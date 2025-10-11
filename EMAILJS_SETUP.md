# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form to work properly.

## Steps to Configure EmailJS

### 1. Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Test the service to make sure it works
6. Copy your **Service ID**

### 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Template Name:** `contact_form_template`

**Email Template:**
```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} <{{from_email}}>

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent from: Portfolio Website Contact Form
```

**Auto-Reply Template (Optional):**
```
Subject: Thank you for contacting Nadeem Silawat

Hi {{to_name}},

Thank you for reaching out to me! I have received your message and will get back to you within 24 hours.

In the meantime, feel free to check out my projects on GitHub or connect with me on LinkedIn.

Best regards,
Nadeem Silawat
Full Stack Developer

---
This is an automated response. Please do not reply to this email.
```

4. Copy your **Template ID**

### 4. Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### 5. Update Your Configuration
Replace the placeholder values in `/src/services/emailService.js`:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',     // Replace with your Service ID
  TEMPLATE_ID: 'your_actual_template_id',   // Replace with your Template ID  
  PUBLIC_KEY: 'your_actual_public_key',     // Replace with your Public Key
};
```

### 6. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (destination)
- `{{reply_to}}` - Reply-to address

## Troubleshooting

### Common Issues:
1. **403 Error**: Check your Public Key
2. **400 Error**: Verify Template ID and Service ID
3. **Email not received**: Check spam folder and service configuration
4. **CORS Error**: Make sure you're using the correct domain in EmailJS dashboard

### Rate Limits:
- Free plan: 200 emails/month
- Consider upgrading if you expect more traffic

### Security:
- Your Public Key is safe to expose in frontend code
- EmailJS handles the secure communication
- Consider adding a simple captcha for production use

## Environment Variables (Optional)

For better security, you can use environment variables:

1. Create `.env.local` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `emailService.js`:
```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
```

## Support

If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/