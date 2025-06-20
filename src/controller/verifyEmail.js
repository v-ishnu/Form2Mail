import jwt from "jsonwebtoken";
import Client from "../models/client.js";
import axios from "axios";
import PendingSubmission from "../models/pendingSubmission.js";
import SEND_DATA_TO_EMAIL from "../utils/sendFormDataMail.js";

const verifyEmail = async (req, res) => {
  const { token, recaptchaToken } = req.query;

  try {
    // 1. Verify JWT token first (this happens in all cases)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    // 2. If no reCAPTCHA token, show verification page
    if (!recaptchaToken) {
      return res.render('email-verification', {
        token,
        email,
        recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
      });
    }

    // 3. Verify reCAPTCHA if token is present
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    if (!recaptchaResponse.data.success) {
      return res.render('verification-failed', {
        token: encodeURIComponent(token),
      });
    };

    // 4. Create account in database
    await Client.create({ email, verified: true });


    // Send pending form data
    const pending = await PendingSubmission.findOne({ email });
    if (pending) {
      await SEND_DATA_TO_EMAIL(email, pending.formData);
      await PendingSubmission.deleteOne({ email });
    }

    // 5. Show success page
    return res
    .render('successfully-verify', {
      title: 'Verification Successful!',
      message: 'Your account has been verified.',
    })
    // .send("Email verified and form data submitted successfully.");

  } catch (error) {
    console.error("Verification error:", error);
    return res.status(400).render('verification-error', { error });
  }
};

export default verifyEmail;
