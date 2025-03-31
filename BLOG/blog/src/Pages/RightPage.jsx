import React from "react";

const RightPage = () => {
  return (
    <div className="border-l border-gray-700 h-full w-80 p-4 bg-black text-white hidden lg:block">
      {/* Arama Çubuğu */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Ara"
            className="w-full bg-gray-800 rounded-full py-2 px-4 pl-10 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <svg
            className="w-5 h-5 text-gray-500 absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Trendler */}
      <div className="bg-gray-800 rounded-xl mb-4">
        <h2 className="text-xl font-bold p-4">Trendler</h2>
        <div className="divide-y divide-gray-700">
          {[
            {
              category: "Türkiye · Gündem",
              title: "#ReactJS",
              tweets: "15.2K",
            },
            {
              category: "Teknoloji · Gündem",
              title: "Next.js",
              tweets: "32.1K",
            },
            { category: "Spor · Gündem", title: "Fenerbahçe", tweets: "45.7K" },
            {
              category: "Eğlence · Gündem",
              title: "Dizi Önerisi",
              tweets: "12.3K",
            },
          ].map((trend, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-700 cursor-pointer transition"
            >
              <p className="text-gray-500 text-sm">{trend.category}</p>
              <p className="font-bold">{trend.title}</p>
              <p className="text-gray-500 text-sm">{trend.tweets} gönderi</p>
            </div>
          ))}
        </div>
        <div className="p-4 text-blue-500 hover:bg-gray-700 cursor-pointer rounded-b-xl">
          Daha fazla göster
        </div>
      </div>

      {/* Takip Edilecekler */}
      <div className="bg-gray-800 rounded-xl">
        <h2 className="text-xl font-bold p-4">Kimleri takip etmeli</h2>
        <div className="divide-y divide-gray-700">
          {[
            { name: "React", handle: "@reactjs", avatar: "R" },
            { name: "Next.js", handle: "@nextjs", avatar: "N" },
            { name: "Tailwind CSS", handle: "@tailwindcss", avatar: "T" },
          ].map((user, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-700 cursor-pointer transition flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                  {user.avatar}
                </div>
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-gray-500">{user.handle}</p>
                </div>
              </div>
              <button className="bg-white text-black font-bold px-4 py-1 rounded-full text-sm hover:bg-gray-200">
                Takip et
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 text-blue-500 hover:bg-gray-700 cursor-pointer rounded-b-xl">
          Daha fazla göster
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-gray-500 text-xs">
        <div className="flex flex-wrap gap-2">
          <span className="hover:underline cursor-pointer">
            Hizmet Şartları
          </span>
          <span className="hover:underline cursor-pointer">
            Gizlilik Politikası
          </span>
          <span className="hover:underline cursor-pointer">Çerezler</span>
          <span className="hover:underline cursor-pointer">
            Erişilebilirlik
          </span>
          <span className="hover:underline cursor-pointer">
            Reklam bilgileri
          </span>
          <span className="hover:underline cursor-pointer">Daha fazla</span>
        </div>
        <div className="mt-2">© 2023 Clone</div>
      </div>
    </div>
  );
};

export default RightPage;
