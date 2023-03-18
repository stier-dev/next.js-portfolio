import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  console.log("yeeeeeeeey");

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "69gutelaune@gmail.com",
      subject: `Kontakt über die Homepage: ${name}`,
      html: `<p>You have a new contact form submission</p><br>
    <p><strong>Name: </strong> ${name} </p><br>
    <p><strong>Email: </strong> ${email} </p><br>
    <p><strong>Subject: </strong> ${subject} </p><br>
    <p><strong>Message: </strong> ${message} </p><br>
    `,
    });
    console.log("Message Sent", emailRes.messageId);
  } catch (err) {
    console.log("----------- ERROR! ------------");
    console.log(err);
  }

  res.status(200).json(req.body);
};
