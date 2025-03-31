import React from "react";
import PostItem from "../config/Post/PostItem";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment, FaComments } from "react-icons/fa";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";

const MainPage = () => {
  const [likedPosts, setLikedPosts] = React.useState([]);
  const [savedPosts, setSavedPosts] = React.useState([]);

  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const toggleSave = (postId) => {
    if (savedPosts.includes(postId)) {
      setSavedPosts(savedPosts.filter((id) => id !== postId));
    } else {
      setSavedPosts([...savedPosts, postId]);
    }
  };

  return (
    <div className="text-white bg-black min-h-screen max-w-2xl mx-auto border-x border-gray-800">
      {/* Başlık */}
      <div className="sticky top-0 z-10 bg-black bg-opacity-80 backdrop-blur-sm p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Ana Sayfa</h1>
      </div>

      {/* Gönderi oluşturma alanı */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex gap-3">
          <img
            src="/images/pp2.png"
            className="w-12 h-12 rounded-full object-cover"
            alt="Profil"
          />
          <div className="flex-1">
            <textarea
              className="w-full bg-transparent outline-none resize-none text-lg placeholder-gray-500"
              placeholder="Neler oluyor?"
              rows="3"
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex gap-4 text-blue-500">
                {/* Medya ekleme butonları buraya gelebilir */}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-1.5 rounded-full disabled:opacity-50"
                disabled={true}
              >
                Gönder
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gönderi akışı */}
      <div>
        {PostItem &&
          PostItem.map((item, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-800 hover:bg-gray-900/50 transition"
            >
              <div className="flex gap-3">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full object-cover"
                  alt={item.name}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h1 className="font-bold hover:underline cursor-pointer">
                      {item.name}
                    </h1>
                    <span className="text-gray-500">
                      @{item.name.toLowerCase().replace(/\s/g, "")}
                    </span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-500 hover:underline cursor-pointer">
                      2sa
                    </span>
                  </div>

                  <p className="mt-1 mb-3">{item.description}</p>

                  {item.postimage && (
                    <div className="mt-2 mb-3 rounded-xl overflow-hidden border border-gray-800">
                      <img
                        src={item.postimage}
                        className="w-full object-cover max-h-96"
                        alt="Gönderi"
                      />
                    </div>
                  )}

                  <div className="flex justify-between mt-2 text-gray-500 max-w-md">
                    <button
                      className={`flex items-center gap-1 group ${
                        likedPosts.includes(item.id) ? "text-red-500" : ""
                      }`}
                      onClick={() => toggleLike(item.id)}
                    >
                      {likedPosts.includes(item.id) ? (
                        <AiFillLike className="text-lg group-hover:scale-110 transition" />
                      ) : (
                        <AiOutlineLike className="text-lg group-hover:scale-110 transition" />
                      )}
                      <span>
                        {item.likes + (likedPosts.includes(item.id) ? 1 : 0)}
                      </span>
                    </button>

                    <button className="flex items-center gap-1 group hover:text-blue-500">
                      <FaRegComment className="text-lg group-hover:scale-110 transition" />
                      <span>{item.comments}</span>
                    </button>

                    <button
                      className={`flex items-center gap-1 group ${
                        savedPosts.includes(item.id) ? "text-green-500" : ""
                      }`}
                      onClick={() => toggleSave(item.id)}
                    >
                      {savedPosts.includes(item.id) ? (
                        <IoBookmark className="text-lg group-hover:scale-110 transition" />
                      ) : (
                        <IoBookmarkOutline className="text-lg group-hover:scale-110 transition" />
                      )}
                    </button>

                    <button className="flex items-center gap-1 group hover:text-blue-500">
                      <RiShareForwardLine className="text-lg group-hover:scale-110 transition" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainPage;
