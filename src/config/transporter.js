import nodemailer from "nodemailer"
    ; import smtpConfig from "./smpt.config.js";


// Transporter Using Nodemailer
const transporter = nodemailer.createTransport(smtpConfig.smtp)

// Verify connection configuration
// Verify connection on startup
transporter.verify()
    .then(() => console.log('✅ SMTP Connection Verified'))
    .catch(err => console.error('❌ SMTP Connection Failed:', err));


export default transporter;
