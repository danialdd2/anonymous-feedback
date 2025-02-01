import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
console.log("Request body:", req.body);  // چاپ کل داده‌های دریافتی

  const { recipient, message } = req.body;

  // چاپ داده‌ها برای بررسی
  console.log("Recipient: ", recipient);
  console.log("Message: ", message);

  const recipientEmails = {
  "یاسین (جوجو)": process.env.EMAIL_TO_YASIN,
  "سعید (سی پی)": process.env.EMAIL_TO_SAEED,
  "دانیال": "danialdavaminp@gmail.com",  // اضافه کردن دانیال
};


  const recipientEmail = recipientEmails[recipient];
  if (!recipientEmail) {
    return res.status(400).json({ error: "گیرنده نامعتبر است" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
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
    console.error(error);  // چاپ خطا در کنسول
    res.status(500).json({ success: false, message: "خطا در ارسال ایمیل", error });
  }
}
