import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { recipient, message } = req.body;

  const recipientEmails = {
    "یاسین (جوجو)": process.env.yasinzare0021@gmail.com,
    "سعید (سی پی)": process.env.saeedmarandi55@gmail.com,
  };

  const recipientEmail = recipientEmails[recipient];
  if (!recipientEmail) {
    return res.status(400).json({ error: "گیرنده نامعتبر است" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.anonymous4yuo@gmail.com,
      pass: process.env.zvbw hqap ybos hcdn,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: "یک انتقاد ناشناس برای شما",
      text: message,
    });

    res.status(200).json({ success: true, message: "ایمیل ارسال شد!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "خطا در ارسال ایمیل", error });
  }
}
