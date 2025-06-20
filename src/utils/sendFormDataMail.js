; import smtpConfig from "../config/smpt.config.js"
; import transporter from "../config/transporter.js"



const SEND_DATA_TO_EMAIL = async (email,formData) => {
    const tableRows = Object.entries(formData)
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>${key}</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${value}</td>
        </tr>
      `
    )
    .join("");

  const htmlBody = `
    <div style="font-family: Arial, sans-serif;">
      <h2 style="color: #2563eb;">New Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <thead>
          <tr>
            <th style="padding: 8px; background-color: #f0f0f0; border: 1px solid #ccc;">Field</th>
            <th style="padding: 8px; background-color: #f0f0f0; border: 1px solid #ccc;">Value</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;

  const info = await transporter.sendMail({
    from: `"Form2Mail by Dinestx" <${smtpConfig.fromEmail}>`,
    to: email,
    subject: `Form Submission Received`,
    html: htmlBody
  });

  return {
    success: true,
    message: "Form data email sent successfully",
    messageId: info.messageId
  };
};


export default SEND_DATA_TO_EMAIL;
