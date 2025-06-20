import Client from "../models/client.js";
import PendingSubmission from "../models/pendingSubmission.js";
import CREATE_ACCOUNT from "../utils/createAccountMail.js";
import SEND_DATA_TO_EMAIL from "../utils/sendFormDataMail.js";
import SEND_TO_SHEET from "../utils/sendToGoogleSheet.js";

const formSubmission = async (req, res) => {
    try {
        const emailAddress = req.params.email || req.params.emailAddress;
        const formData = req.body;
        const sheetId = req.query.sheet; // ✅ Sheet ID passed as query param

        console.log("Request URL:", req.originalUrl);
        console.log("Sheet ID:", req.query.sheet);



        if (!emailAddress) {
            return res.status(400).json({ error: "Email is required" });
        }

        const client = await Client.findOne({ email: emailAddress });

        if (!client) {
            console.log("Client not found, sending account creation email...");

            // Store form temporarily
            await PendingSubmission.findOneAndUpdate(
                { email: emailAddress },
                { formData, sheetId },
                { upsert: true }
            );

            const mailResponse = await CREATE_ACCOUNT(emailAddress);

            if (!mailResponse.success) {
                return res.status(424).json({
                    message: "Client not found and failed to send email",
                    email: emailAddress,
                    error: mailResponse.error
                });
            }

            return res
                .render("account-creation", { email: emailAddress })
            // .status(200).json({
            //     success: true,
            //     message: "Account creation email sent",
            //     email: emailAddress
            // });
        }

        // ✅ If client exists, send email + Google Sheet
        await SEND_DATA_TO_EMAIL(emailAddress, formData);

        console.log(sheetId);
        if (sheetId) {
            await SEND_TO_SHEET(sheetId, formData);
        }

        res.status(200).json({
            success: true,
            message: "Form data sent + Store in sheet ",
            email: emailAddress
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            error: "Internal server error",
            details: error.message
        });
    }
};


export default formSubmission;
