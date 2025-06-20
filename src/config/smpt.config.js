import dotenv from "dotenv";
dotenv.config();

const smtpConfig = {
  smtp: {
    service: 'gmail', // Explicitly using Gmail service
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false // For development only
    }
  },
  from: {
    address: process.env.FROM_EMAIL,
    name: process.env.FROM_NAME
  }
};


// Validation
if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
  console.warn('⚠️ SMTP credentials missing - email functionality disabled');
  smtpConfig.disabled = true;
} else {
  console.log('✅ SMTP configured for:', process.env.SMTP_USER);
}

export default smtpConfig;
