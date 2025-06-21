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
   <form action="https://www.form2mail.dinestx.com/api/v.01/your@email.com" method="POST">

      <label>Your Name*</label>
      <input type="text" name="name" placeholder="John Smith" required>

      <label>Email Address*</label>
      <input type="email" name="email" placeholder="you@example.com" required>

      <label>Your Message</label>
      <textarea name="message" placeholder="How can we help?"></textarea>

      <button type="submit">
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
1. Create a new Google Sheet
2. Share with our service account:
   - Click **Share** → Enter:
     `form2mail@dinestx.iam.gserviceaccount.com`
   - Set permission: **Editor**

3. Add This Form to Your Website

```html
   <form action="https://www.form2mail.dinestx.com/api/v.01/your@email.com?submit=Your_Google_Sheet_Id" method="POST">
      // Your Form Code
    </form>
```
Where to find Your_Google_Sheet_Id:

Look at your sheet's URL:

`Example`
```
https://docs.google.com/spreadsheets/d/1BiF_PwhXHuNgWENADfQQHTFfDpjGb-zri8MdXv3onnQ/edit
```
**Your_Google_Sheet_Id** `1BiF_PwhXHuNgWENADfQQHTFfDpjGb-zri8MdXv3onnQ`

---

## ⚙️ Form Configuration Options


| Parameter          | Description                                        | Default         |
| ------------------ | -------------------------------------------------- | -------------   |
| `name= "Name"`     | Capital `Name` can be Shown in Your email Table    | `name="name"`   |
| `name= "Email"`    | Capital `Name` can be Shown in Your email Table    | `name="email"`  |
| `name= "Mobile"`   | Capital `Name` can be Shown in Your email Table    | `name="mobile"` |

---

## 💬 Feature Discussions

We welcome community input! Here's how to contribute:

### Current Feature Requests

| Feature Request         | 👍 Votes | Status       | Discussion |
| ----------------------- | -------- | ----------- | ---------- |
| File attachments        | 01       | Planned     | [#4](https://github.com/v-ishnu/Form2Mail/discussions/4)    |



> ℹ️ *Click the issue numbers above to view or join the discussion.*

### How to Participate

1. **Vote** on existing requests by adding a 👍 reaction
2. **Suggest** new features by [opening an issue](https://github.com/v-ishnu/Form2Mail/issues/new)
3. **Discuss** ideas in our [Discussions](https://github.com/v-ishnu/Form2Mail/discussions) tab

---

## 🚨 Troubleshooting Guide (for Users)

### 📧 Not Receiving Emails?

If you're not receiving form submission emails:

- Make sure you entered a **valid email address**
- Check your **Spam** or **Junk folder**
- Try using a different email provider (Currently, We only support Gmail)
- If you're using a custom domain (e.g. `you@yourdomain.com`), ensure your domain is able to receive external emails

---

### ⚠️ Form Not Submitting?

If the form is not submitting properly or shows an error:

- Ensure your internet connection is working
- Refresh the page and try again
- Complete the **reCAPTCHA** challenge (the “I’m not a robot” box)
- If a link was emailed to you for verification:
  - Make sure you click the link within **15 minutes**
  - Check that the link is not broken or expired
- Make sure JavaScript is **enabled** in your browser

---

### 🧪 Still Having Issues?

- Try using a different browser (e.g. Chrome or Firefox)
- Try submitting the form from a different device
- If nothing works, reach out to the site owner for help

---

> 💬 If this service was embedded on another website (like a contact form), please contact the website owner directly — Form2Email does not store your messages.

---

## 🤝 Contributing

We welcome contributions! Please read our [Contribution Guidelines](CONTRIBUTING.md) before getting started.


## 📜 License

Distributed under the MIT License.
See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

 **Project Maintainer** – [@v-ishnu](https://github.com/v-ishnu)<br>
 **Email** – [Vishnu Prakash](mailto:vishnuprakash572@gmail.com)<br>
 **Project Link** – [https://github.com/v-ishnu/Form2Mail](Form2Mail)<br>
