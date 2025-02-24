import emailjs from "@emailjs/browser";

// EmailJS credentials
const serviceID = "service_22sid6t";
const templateID = "template_snicksc";
const userID = "u8V8a8crL34jh7EQK";

// Function to send email
export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(serviceID, templateID, formData, userID);
    console.log("Email sent successfully!", response);
    return true; // Indicate success
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Indicate failure
  }
};