import jwt from "jsonwebtoken";
import Client from "../models/client.js";
import axios from "axios";

// const verifyEmail = async (req, res) => {
//     // ✅ Correct: Extract token from query params
//     const { token } = req.query;

//     if (!token) {
//         return res.status(400).send("❌ Token is required.");
//     }

//     try {
//         // ✅ Now `token` is a string (not an object)
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const email = decoded.email;

//         let user = await Client.findOne({ email });

//         if (!user) {
//             await Client.create({ email, verified: true });
//         } else {
//             user.verified = true;
//             await user.save();
//         }

//         return res.send("✅ Email verified successfully!");
//     } catch (err) {
//         console.error("Error verifying email:", err);
//         return res.status(400).send("❌ Invalid or expired link.");
//     }
// };


// 2nd Approach
// const verifyToken = async (req, res) => {
//     const { token, recaptcha } = req.body;

//     if (!token || !recaptcha) {
//         return res.status(400).json({ message: "Missing token or reCAPTCHA" });
//     }

//     try {
//         // ✅ 1. Verify reCAPTCHA with Google
//         const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
//         const googleRes = await fetch(
//             `https://www.google.com/recaptcha/api/siteverify`,
//             {
//                 method: "POST",
//                 headers: { "Content-Type": "application/x-www-form-urlencoded" },
//                 body: new URLSearchParams({
//                     secret: recaptchaSecret,
//                     response: recaptcha,
//                 }),
//             }
//         );
//         const googleData = await googleRes.json();

//         if (!googleData.success) {
//             return res.status(403).json({ message: "Invalid reCAPTCHA" });
//         }

//         // ✅ 2. Verify JWT token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const email = decoded.email;

//         // ✅ 3. Create or update client
//         let client = await Client.findOne({ email });
//         console.log("Client:",client)

//         if (!client) {
//             // ✅ Create new verified user
//             try {
//                 await Client.create({ email, verified: true });
//             } catch (e) {
//                 console.log("❌ Failed to create client", e);
//                 return res.status(500).json({ message: "❌ Failed to create client" });
//             }
//         } else {
//             client.verified = true;
//             await client.save();
//         }

//         return res.status(200).json({ message: "✅ Email verified successfully" });
//     } catch (err) {
//         console.error("Verification failed:", err);
//         return res.status(400).json({ message: "❌ Verification failed" });
//     }
// };

// const verifyEmail = async (req, res) => {
//     const { token, recaptcha } = req.body; // From frontend form

//     // 1. Verify reCAPTCHA
//     try {
//         const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
//         const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptcha}`;
//         const recaptchaRes = await axios.post(recaptchaUrl);

//         if (!recaptchaRes.data.success) {
//             return res.status(400).json({ message: "❌ reCAPTCHA verification failed." });
//         }
//     } catch (err) {
//         console.error("reCAPTCHA verification error:", err);
//         return res.status(400).json({ message: "❌ reCAPTCHA error. Try again." });
//     }

//     // 2. Verify JWT token
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const email = decoded.email;

//         // 3. Update user verification status
//         let user = await Client.findOne({ email });
//         if (!user) {
//             await Client.create({ email, verified: true });
//         } else {
//             user.verified = true;
//             await user.save();
//         }

//         return res.json({ message: "✅ Email verified successfully!" });
//     } catch (err) {
//         console.error("JWT verification error:", err);
//         return res.status(400).json({ message: "❌ Invalid or expired token." });
//     }
// };


const verifyAccount = async (req, res) => {
  const { token, recaptchaToken } = req.query;

  try {
    // 1. Verify JWT token first (this happens in all cases)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    // 2. If no reCAPTCHA token, show verification page
    if (!recaptchaToken) {
      return res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Email Verification</title>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            <style>
                :root {
            --primary: #4361ee;
            --primary-dark: #3a56d4;
            --success: #4cc9f0;
            --text: #2b2d42;
            --light: #f8f9fa;
            --white: #ffffff;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --border-radius: 12px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            color: var(--text);
        }

        .verification-container {
            background: var(--white);
            padding: 40px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            width: 100%;
            max-width: 480px;
            text-align: center;
            transition: all 0.3s ease;
        }

        h1 {
            color: var(--primary);
            margin-bottom: 24px;
            font-size: 28px;
            font-weight: 700;
        }

        p {
            margin-bottom: 24px;
            line-height: 1.6;
            color: #4a5568;
        }

        .message {
            font-size: 14px;
            color: #718096;
            margin-top: 20px;
            font-style: italic;
        }

        .email-display {
            font-weight: 600;
            color: var(--primary);
            word-break: break-all;
        }

        .g-recaptcha {
            display: flex;
            justify-content: center;
            margin: 24px 0;
        }

        button {
            background-color: var(--primary);
            color: var(--white);
            border: none;
            padding: 14px 28px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            width: 100%;
            max-width: 240px;
            margin: 0 auto;
            display: block;
        }

        button:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(67, 97, 238, 0.2);
        }

        button:active {
            transform: translateY(0);
        }

        .logo {
            margin-bottom: 24px;
            font-size: 24px;
            font-weight: bold;
            color: var(--primary);
        }

        @media (max-width: 480px) {
            .verification-container {
                padding: 24px;
            }

            h1 {
                font-size: 24px;
            }
        }
            </style>
            <script>
                function handleSubmit(e) {
                    e.preventDefault();
                    const recaptchaResponse = grecaptcha.getResponse();
                    if (!recaptchaResponse) {
                        alert('Please complete the reCAPTCHA');
                        return;
                    }
                    window.location.href = '/api/v.01/verify?token=${encodeURIComponent(token)}&recaptchaToken=' + encodeURIComponent(recaptchaResponse);
                }
            </script>
        </head>
        <body>
            <div class="verification-container">
                <h1>Verify Your Email</h1>
                <p>Please complete the reCAPTCHA to verify your email address.</p>

                <form onsubmit="handleSubmit(event)">
                    <div class="g-recaptcha" data-sitekey="${process.env.RECAPTCHA_SITE_KEY}"></div>
                    <button type="submit">Verify Email</button>
                </form>

                <p class="message">Verifying email: ${email}</p>
            </div>
        </body>
        </html>
      `);
    }

    // 3. Verify reCAPTCHA if token is present
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    if (!recaptchaResponse.data.success) {
      return res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Verification Failed</title>
            <style>

            </style>
        </head>
        <body>
            <div class="error-container">
                <h1>Verification Failed</h1>
                <p>reCAPTCHA verification failed. Please try again.</p>
                <a href="/api/v.01/verify?token=${encodeURIComponent(token)}">Retry verification</a>
            </div>
        </body>
        </html>
      `);
    }

    // 4. Create account in database
    await Client.create({ email, verified: true });

    // 5. Show success page
    return res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Verification Successful</title>
          <style>/* Success styles */</style>
      </head>
      <body>
          <div class="success-container">
              <div class="success-icon">✓</div>
              <h1>Verification Successful!</h1>
              <p>Your account has been verified.</p>
          </div>
      </body>
      </html>
    `);

  } catch (error) {
    console.error("Verification error:", error);
    return res.status(400).send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Verification Error</title>
          <style>/* Error styles */</style>
      </head>
      <body>
          <div class="error-container">
              <h1>Verification Error</h1>
              <p>${error.message.includes("expired") ?
        "The verification link has expired." :
        "Invalid verification token."}</p>
              <p>Please request a new verification email.</p>
          </div>
      </body>
      </html>
    `);
  }
};

export default verifyAccount;
