import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import nodemailer from 'nodemailer'; // You'll need to install this: npm install --save nodemailer

admin.initializeApp();
const db = admin.firestore();

// Configure Nodemailer transporter (replace with your credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service (e.g., 'outlook')
  auth: {
    user: 'tgreat88@gmail.com', // Replace with your email
    pass: 'ohhe kmkx zfuz pccw', // Replace with your email password (or app password)
  },
});

export const sendContactEmail = functions.firestore
  .document('contacts/{contactId}')
  .onCreate(async (snapshot) => {
    const newData = snapshot.data();
    const contactName = newData.name || 'New Contact'; // Handle cases where name is missing

    const mailOptions = {
      from: 'tgreat88@gmail.com', // Replace with your email
      to: 'tgreat88@gmail.com', // Replace with the email address to send notifications to
      subject: 'New Contact Added!',
      text: `A new contact, ${contactName}, has been added to your database.`,
      html: `<h1>New Contact Added!</h1><p>A new contact, <b>${contactName}</b>, has been added to your database.</p>`, //Optional HTML content for better formatting
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });

