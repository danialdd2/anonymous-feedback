import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const people = ["سعید (سی پی)", "یاسین (جوجو)", "دانیال"]; // اضافه کردن دانیال به لیست

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">به انتقاد ناشناس خوش اومدی</h1>
      <div className="mt-5">
        <p className="mb-2 text-lg">به کی میخوای انتقاد کنی؟</p>
        <input
          type="text"
          placeholder="نام را وارد کنید..."
          className="p-2 rounded border border-gray-600 bg-gray-800 text-white"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="mt-3">
          {people
            .filter((p) => p.includes(search))
            .map((person) => (
              <button
                key={person}
                className="block w-full p-2 mt-2 bg-blue-600 hover:bg-blue-700 rounded"
                onClick={() => router.push(`/feedback?name=${person}`)}
              >
                {person}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
