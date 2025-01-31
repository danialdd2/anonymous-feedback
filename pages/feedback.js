import { useState } from "react";
import { useRouter } from "next/router";

export default function Feedback() {
  const router = useRouter();
  const { name } = router.query;
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendFeedback = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipient: name, message }),
    });

    const data = await res.json();
    setStatus(data.success ? "ایمیل ارسال شد!" : "خطایی رخ داد.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">به {name} انتقاد کن</h1>
      <textarea
        className="w-80 h-32 p-2 mt-4 bg-gray-800 border border-gray-600 rounded"
        placeholder="اینجا بنویس..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendFeedback}
        className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
      >
        ارسال انتقاد
      </button>
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}
