# 🚀 Contributing to Form2Mail

Thank you for your interest in contributing to [Form2Mail](https://github.com/v-ishnu/Form2Mail)! I welcome contributions from everyone! Here's how to get started:

## 📋 Prerequisites
- GitHub account
- Git installed locally
- Node.js (if contributing to code)

## 🛠 Development Setup

1. **Fork the repository**
   - Click here to *Fork* the repo [Form2Mail](https://github.com/v-ishnu/Form2Mail/fork)

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Form2Mail.git
   cd Form2Mail
   ```

3. **Set up upstream**
   ```bash
   git remote add upstream https://github.com/v-ishnu/Form2Mail.git
   ```

## 🔄 Making Changes

### Create a branch
```bash
git checkout -b type/description
# Examples:
# feat/email-validation
# fix/issue-42
# docs/update-instructions
```

### Make your changes
- Follow existing code style
- Update tests if needed
- Keep commits atomic

### Commit properly

```bash
git add .
git commit -m "feat: add email validation [ISSUE-123]"
```

**Commit message format:**

```
type(scope): description [ISSUE]
```

### Push changes

```bash
git push origin your-branch-name
```


## 🚨 Troubleshooting

### 📧 Emails Not Arriving?

- Ensure all SMTP settings are correctly configured in your `.env` file:
  - Download `.env` Sample File.
  - `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_HOST`, `SMTP_PORT`
- Use valid `from` and `to` addresses in your `transporter.sendMail()` call.
- Check the **Spam or Junk folder** of the recipient.
- If you're using **Gmail SMTP**:
  - Make sure [2-Step Verification](https://myaccount.google.com/security) is enabled.
  - Generate and use an [App Password](https://support.google.com/accounts/answer/185833?hl=en) instead of your main Gmail password.
- Ensure your SMTP provider allows third-party or less secure app access.

---

### ⚠️ Form Submission or Verification Errors?

- ✅ Confirm Express is parsing incoming JSON:

  ```js
  app.use(express.json());
  ```

* ✅ Ensure you're passing the JWT token correctly in the verification URL:

  ```
  http://localhost:3598/verify.html?token=your_jwt_token_here
  ```

* ✅ reCAPTCHA issues? Double-check:

  * `RECAPTCHA_SECRET_KEY` is correct in `.env`
  * Your site/domain (e.g., `localhost`) is added in the [Google reCAPTCHA admin console](https://www.google.com/recaptcha/admin)

* ✅ Ensure MongoDB is connected successfully:

  * Your logs should say: `✅ Database Connected Successfully`
  * If it hangs or times out, check your connection string or try using `127.0.0.1` for local MongoDB

---

### 🧪 Enable Debugging

Use helpful logs during development to trace issues:

```js
console.log("📥 Email:", email);
console.log("🔑 Token generated:", token);
console.log("📨 Sending mail to:", smtpConfig.fromEmail);
```

For error handling middleware in Express:

```js
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});
```

---

> 💡 Still stuck? Open an issue or run with `NODE_ENV=development` to enable more verbose logs.

---



## 📤 Submitting Changes

1. Create a **Pull Request** from your fork to the main repo
2. Fill out the PR template completely
3. Include:
   - Description of changes
   - Screenshots if UI changes
   - Reference issues with #
4. Wait for review and address feedback

## 🏷 Pull Request Labels
| Label       | Purpose                    |
|-------------|----------------------------|
| bug         | Fixes a bug                |
| enhancement | New feature                |
| docs        | Documentation changes      |
| question    | Seeking clarification      |

## 💡 Pro Tips
- Keep PRs focused on single purpose
- Sync with upstream regularly:
  ```bash
  git fetch upstream
  git merge upstream/main
  ```
- Be responsive to review comments

We appreciate your contribution! ❤️

```
