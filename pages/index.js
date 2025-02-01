export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="flex items-center justify-center min-h-full bg-opacity-80 backdrop-blur-lg p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm max-w-lg w-full space-y-8 animate-fadeIn">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">به انتقاد ناشناس خوش آمدی</h1>
          <p className="text-center text-lg text-gray-600 mb-4">انتقاد خود را مطرح کنید و از آن لذت ببرید!</p>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="نام را وارد کنید..."
              className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
            />
            <div className="flex justify-center gap-4">
              <button className="w-1/3 p-3 bg-primary text-white rounded-lg hover:bg-green-600 transition duration-300">یاسین (جوجو)</button>
              <button className="w-1/3 p-3 bg-primary text-white rounded-lg hover:bg-green-600 transition duration-300">سعید (سی پی)</button>
              <button className="w-1/3 p-3 bg-primary text-white rounded-lg hover:bg-green-600 transition duration-300">دانیال</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
