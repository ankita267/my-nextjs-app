// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using Gmail's SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ankita@gbim.com', // Your Gmail address
        pass: 'DhanuBanu@_1989', // App password (or regular password if less secure apps enabled)
      },
    });

    const mailOptions = {
      from: 'ankita@gbim.com', // Sender address
      to: 'patelankita267@gmail.com', // Receiver address
      subject: 'Message from ${name}', // Subject line
      text: 'Message from ${name} (${email}): ${message}', // Plain text body
      html: '<p><strong>Message from ${name}</strong> (${email}):</p><p>${message}</p>', // HTML body
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
     res.status(500).json({ success: false, message: 'Failed to send email. Try again later' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
