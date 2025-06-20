# 📧 Form2Mail

**A lightweight form-to-email solution for static websites**

Send form submissions directly to your inbox without server-side complexity. Perfect for GitHub Pages, JAMstack sites, and simple HTML projects.

![Form2Mail Demo]() <!-- Replace with actual screenshot -->

---

## ✨ Features

- 🚀 **Zero-database architecture** – Pure nodejs mailer
- 🛡️ **Spam protection** – reCAPTCHA
- 📝 **Customizable templates** – HTML or plain text emails
- 🔔 **Success/error notifications** – User feedback after submission
- 💬 **Community-driven** – Feature voting and discussion

---

## 🛠️ Installation

### Basic Setup

1. Use the hosted **Form2Mail** endpoint directly.
Just replace `your@email.com` with your actual email address in the form `action`.
2. Configure your email settings in `form2mail.php`:

   ```php
   // In form2mail.php
   $recipient = "your@email.com";       // Change this
   $subject = "New Form Submission";    // Customize if needed
   ```

3. Add to your HTML form:

   ```html
   <form action="https://form2mail.dinestx.com/api/v.01/your@email.com" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" required></textarea>

       <!-- Honeypot spam protection -->
      <input type="text" name="honeypot" style="display:none">

      <button type="submit">Send Message</button>
    </form>
   ```

---

## ⚙️ Configuration Options

| Parameter          | Description                       | Default       |
| ------------------ | --------------------------------- | ------------- |
| `$recipient`       | Destination email                 | `""`          |
| `$subject_prefix`  | Email subject prefix              | `"Form: "`    |
| `$enable_honeypot` | Anti-spam honeypot field          | `true`        |
| `$redirect_url`    | Page to redirect after submission | `"" (reload)` |

---

## 💬 Feature Discussions

We welcome community input! Here's how to contribute:

### Current Feature Requests

| Feature Request         | 👍 Votes | Status      | Discussion |
| ----------------------- | -------- | ----------- | ---------- |
| File attachments        | 42       | Planned     | [#12](#)   |
| Slack/Teams integration | 28       | In Progress | [#18](#)   |
| Multi-language support  | 15       | Considering | [#23](#)   |

> ℹ️ *Click the issue numbers above to view or join the discussion.*

### How to Participate

1. **Vote** on existing requests by adding a 👍 reaction
2. **Suggest** new features by [opening an issue](https://github.com/YourUsername/Form2Mail/issues/new)
3. **Discuss** ideas in our [Discussions](https://github.com/YourUsername/Form2Mail/discussions) tab

---

## 🚨 Troubleshooting

**Emails not arriving?**

* ✅ Check your server has PHP `mail()` enabled
* ✅ Verify emails aren't landing in spam
* ✅ Test with a different recipient email provider

**Form errors?**

Enable debug mode in `form2mail.php`:

```php
$debug_mode = true;  // Shows detailed error messages
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to GitHub

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License.
See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

**Project Maintainer** – [@YourUsername](https://github.com/YourUsername)
**Email** – [your.email@example.com](mailto:your.email@example.com)
**Project Link** – [https://github.com/YourUsername/Form2Mail](https://github.com/YourUsername/Form2Mail)

```
