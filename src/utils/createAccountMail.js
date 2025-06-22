; import jwt from "jsonwebtoken"
; import smtpConfig from "../config/smpt.config.js"
; import transporter from "../config/transporter.js"

; const CREATE_ACCONT = async (email) => {
    try {

      const token = jwt.sign(
        { email },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
      );

      const verifyUrl= `https://www.form2mail.dinestx.com/api/v.01/verify?token=${token}`
      // const verifyUrl = `http://localhost:3598/verify-email.html?token=${token}`

      const info = await transporter.sendMail({
        from: `"Form2Mail by Dinestx" <${smtpConfig.fromEmail}>`,
        to: email, // Recipient Address
        subject: `Account Creation`,
        text: `Please verify your account`, // Plain text body
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Welcome!</h2>
          <p>Please verify your account by clicking the link below:</p>
          <a href="${verifyUrl}"
             style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Verify Account
          </a>
        </div>`,
      });

      console.log("Message sent: %s", info.messageId);
      return {
        success: true,
        message: "Mail sent successfully",
        messageId: info.messageId
      };
    } catch (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        message: "Failed to send email",
        error: error.message
      };
    }
  };



; export default CREATE_ACCONT;
