import Client from "../models/client.js";
import CREATE_ACCOUNT from "../utils/sendMails.js";

const formSubmission = async (req, res) => {
    try {
        const emailAddress = req.params.email || req.params.emailAddress;
        const formData = req.body;

        if (!emailAddress) {
            return res.status(400).json({ error: "Email is required" });
        }

        const client = await Client.findOne({ email: emailAddress });

        if (!client) {
            console.log("Client not found, sending account creation email...");

            const mailResponse = await CREATE_ACCOUNT(emailAddress);

            if (!mailResponse.success) {
                return res.status(424).json({
                    message: "Client not found and failed to send email",
                    email: emailAddress,
                    error: mailResponse.error
                });
            }

            return res.status(200).json({
                success: true,
                message: "Account creation email sent",
                email: emailAddress
            });
        }

        res.status(200).json({
            success: true,
            email: emailAddress,
            client: client // Optional: send client data if found
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
