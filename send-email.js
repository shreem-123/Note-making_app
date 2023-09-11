const nodemailer = require('nodemailer');

// Create a transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USERNAME, // Your Gmail email address
    pass: process.env.GMAIL_PASSWORD, // Your Gmail App Password
  },
});

// Email details
const mailOptions = {
  from: 'your-email@gmail.com', // Your Gmail email address
  to: 'recipient@example.com', // Recipient's email address
  subject: 'GitHub Actions Workflow Failed',
  text: 'Your GitHub Actions workflow has failed. Check the workflow run for details.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
