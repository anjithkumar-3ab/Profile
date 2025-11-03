const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const TelegramBot = require('node-telegram-bot-api');

// Initialize Telegram Bot (only if token is provided)
let bot;
if (process.env.TELEGRAM_BOT_TOKEN) {
  bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });
}

// Contact form submission
router.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Send via Telegram if configured
    if (bot && process.env.TELEGRAM_CHAT_ID) {
      const telegramMessage = `
🆕 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
📌 <b>Subject:</b> ${subject}

💬 <b>Message:</b>
${message}

⏰ <i>Received: ${new Date().toLocaleString()}</i>
      `;

      await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, telegramMessage, {
        parse_mode: 'HTML'
      });
    }

    // Send via Email (existing functionality)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL || 'anjithkumars143@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Message sent: %s', info.messageId);
    
    res.json({ 
      success: true, 
      message: 'Message sent successfully!',
      messageId: info.messageId,
      telegram: bot && process.env.TELEGRAM_CHAT_ID ? 'Telegram notification sent' : 'Telegram not configured'
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

module.exports = router;
