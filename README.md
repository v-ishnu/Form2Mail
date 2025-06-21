# 📧 Form2Mail

**Seamlessly receive form submissions via email AND store them in Google Sheets**
A complete solution for capturing, notifying, and organizing form data without backend code.

Effortlessly capture form submissions with instant email delivery and automated Google Sheets logging - no backend code required. The perfect solution for static sites, GitHub Pages, and JAMstack projects.

![Form2Mail Demo]() <!-- Replace with actual screenshot -->

---

## ✨ Key Features

- 🚀 **Zero backend setup** - works with static sites
- 🛡️ **Spam protection** – reCAPTCHA
- ✉️ **Instant email notifications** on form submission
- 📊 **Auto-save to Google Sheets** in real-time
- 🔒 **Secure processing** via Google Service Account
- 🔔 **Success/error notifications** – User feedback after submission
- 💬 **Community-driven** – Feature voting and discussion

---

## Basic Setup

### 1. Email-Only Setup (Simple Version)

**Perfect when you just need form submissions sent to your inbox**
Get form submissions straight to your inbox in 2 minutes!


1. Copy this ready-to-use form code:
   ```html
   <form action="https://www.form2mail.dinestx.com/api/v.01/your@email.com" method="POST" style="max-width:500px;margin:0 auto;">

      <label>Your Name*</label>
      <input type="text" name="name" placeholder="John Smith" required style="width:100%;padding:8px;margin-bottom:15px;">

      <label>Email Address*</label>
      <input type="email" name="email" placeholder="you@example.com" required style="width:100%;padding:8px;margin-bottom:15px;">

      <label>Your Message</label>
      <textarea name="message" placeholder="How can we help?" style="width:100%;padding:8px;height:120px;margin-bottom:15px;"></textarea>

      <button type="submit" style="background:#0066ff;color:white;padding:10px 20px;border:none;cursor:pointer;">
         Send Message
      </button>
   </form>
   ```

2. Just change one thing:

   Replace your@email.com with your actual email address

   ```js
      https://www.form2email.dinestx.com/api/v.01/your@email.com
   ```

3. **That's it!** Form submissions will now come directly to your inbox.


### 2. Form2Mail with Google Sheets Integration

#### Prepare Your Google Sheet
1. Create a new Google Sheet ([template](https://sheets.new))
2. Share with our service account:
   - Click **Share** → Enter:
     `form2mail@dinestx.iam.gserviceaccount.com`
   - Set permission: **Editor**

3. Add This Form to Your Website
Where to find YOUR_SHEET_ID:
Look at your sheet's URL:

```
https://docs.google.com/spreadsheets/d/1BiF_PwhXHuNgWENADfQQHTFfDpjGb-zri8MdXv3onnQ/edit
```
**Key Part:** `1BiF_PwhXHuNgWENADfQQHTFfDpjGb-zri8MdXv3onnQ`

```html
   <form action="https://www.form2mail.dinestx.com/api/v.01/your@email.com?submit=Your_Google_Sheet_Id" method="POST">
      // Your Form Code
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
