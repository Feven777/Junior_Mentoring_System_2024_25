import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

// Initialize the Mailtrap client with the token
export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

// Define the sender's email and name
export const sender = {
  email: "hello@demomailtrap.com",
  name: "Tsion",
};

// Define the recipient(s)
const recipients = [
  {
    email: "recipient@example.com",
    name: "Recipient Name",
  },
];

// Send an email using the Mailtrap client
mailtrapClient
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    html: "<p>Congrats for sending a test email with Mailtrap!</p>",
    category: "Integration Test",
  })
  .then((response) => {
    console.log("Email sent successfully:", response);
  })
  .catch((error) => {
    console.error("Error sending email:", error);
  });
