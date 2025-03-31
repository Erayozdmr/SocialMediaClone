import React from "react";
import posts from "../Post/PostItem";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { IoArchive } from "react-icons/io5";

const Profilepage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen p-4">
      <div className="relative w-full max-w-4xl">
        <img
          src="/images/Banner.jpg"
          alt="Banner"
          className="w-full h-40 md:h-48 object-cover rounded-lg"
        />
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
          <img
            src="/images/pp3.png"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-800"
            alt="Profil Resmi"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <h1 className="text-xl md:text-2xl font-bold">Eray Özdemir</h1>
        <p className="text-white/50">@erayozdmr</p>
      </div>

      <div className="flex gap-6 mt-4">
        <div className="text-center">
          <h1 className="text-lg md:text-xl font-semibold">12.4M</h1>
          <p className="text-white/50">Takipçi</p>
        </div>
        <div className="text-center">
          <h1 className="text-lg md:text-xl font-semibold">146</h1>
          <p className="text-white/50">Takip</p>
        </div>
      </div>

      <div className="border-b-2 mt-8 border-gray-700 w-full max-w-4xl text-center pb-2">
        <h2 className="text-lg md:text-xl font-semibold">Gönderiler</h2>
      </div>

      <div className="w-full max-w-4xl mt-4 px-2">
        {posts && posts.length > 0 ? (
          posts.map((item, index) => {
            if (item.name === "Eray Özdemir") {
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 mb-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-full"
                      alt="Profil"
                    />
                    <h1 className="text-lg font-semibold">{item.name}</h1>
                  </div>
                  <p className="mt-2 text-gray-300">{item.description}</p>
                  <img
                    src={item.postimage}
                    alt="Gönderi Resmi"
                    className="w-full h-auto mt-2 rounded-lg"
                  />
                  <div className="mt-4 mb-4 gap-2 text-xl flex">
                    <AiFillLike />
                    <FaComments />
                    <IoArchive />
                  </div>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p className="text-center text-gray-500">Henüz gönderi yok</p>
        )}
      </div>
    </div>
  );
};

export default Profilepage;
