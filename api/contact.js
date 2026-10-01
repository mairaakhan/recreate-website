const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    const {
      name,
      company,
      email,
      phone,
      topic,
      message
    } = req.body;

    /* REQUIRED FIELDS */

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields."
      });
    }

    /* SMTP CONNECTION */

    const transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }

    });

    /* SEND EMAIL */

    await transporter.sendMail({

      from: `"Re Create Website" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      replyTo: email,

      subject: `New Website Enquiry - ${topic || "General Enquiry"}`,

      text: `
New enquiry received from the Re Create Technologies website.

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone}
Service: ${topic || "Not selected"}

Project Details:
${message}
      `

    });

    return res.status(200).json({
      success: true,
      message: "Thank you! Your enquiry has been sent successfully."
    });

  } catch (error) {

    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again."
    });

  }

};