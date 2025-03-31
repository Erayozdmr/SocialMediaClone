import React, { useState } from "react";
import { MessageItems, NewMessageItems } from "./MessageItem";
import {
  IoChatbubbleEllipsesOutline,
  IoSearchOutline,
  IoSend,
} from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { BsCheck2All, BsCheck2 } from "react-icons/bs";

const MessagePage = () => {
  const [messages, setMessages] = useState(MessageItems);
  const [newMessages] = useState(NewMessageItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("messages");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const selectMessage = (id) => {
    const message = messages.find((item) => item.id === id);
    setSelectedMessage(message);
    setMessages(
      messages.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  };

  const sendMessage = () => {
    if (newMessage.trim() === "" || !selectedMessage) return;

    const updatedMessages = messages.map((item) => {
      if (item.id === selectedMessage.id) {
        return {
          ...item,
          messages: [
            ...item.messages,
            {
              sender: "me",
              text: newMessage,
              time: new Date().toISOString(),
            },
          ],
          lastMessage: newMessage,
          time: new Date().toISOString(),
        };
      }
      return item;
    });

    setMessages(updatedMessages);
    setSelectedMessage(
      updatedMessages.find((item) => item.id === selectedMessage.id)
    );
    setNewMessage("");
  };

  const filteredMessages = messages.filter((msg) =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNewMessages = newMessages.filter((msg) =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-full bg-black text-white overflow-hidden">
      {/* Sol panel - Mesaj listesi */}
      <div className="w-full md:w-1/3 flex flex-col border-r border-gray-800 h-screen">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 bg-black">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Mesajlar</h1>
            <button className="text-gray-400 hover:text-white">
              <FiMoreVertical size={20} />
            </button>
          </div>

          {/* Arama */}
          <div className="relative mb-4">
            <IoSearchOutline className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Kişi ara..."
              className="w-full bg-gray-900 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Tablar */}
          <div className="flex border-b border-gray-800">
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === "messages"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("messages")}
            >
              Mesajlar
            </button>
            <button
              className={`flex-1 py-3 font-medium ${
                activeTab === "new"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("new")}
            >
              Yeni Kişiler
            </button>
          </div>
        </div>

        {/* Mesaj listesi */}
        <div className="flex-1 overflow-y-auto bg-black">
          {activeTab === "messages" ? (
            filteredMessages.length > 0 ? (
              filteredMessages.map((item) => (
                <div
                  key={item.id}
                  onClick={() => selectMessage(item.id)}
                  className={`flex items-center p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-900 ${
                    !item.read ? "bg-gray-900" : ""
                  } ${selectedMessage?.id === item.id ? "bg-gray-800" : ""}`}
                >
                  <img
                    src={item.image}
                    className="w-12 h-12 rounded-full object-cover mr-3 border border-gray-700"
                    alt={item.name}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold truncate">{item.name}</h3>
                      <span className="text-xs text-gray-500">
                        {new Date(item.time).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-400 truncate">
                        {item.lastMessage || item.message}
                      </p>
                      {item.read ? (
                        <BsCheck2All className="text-blue-500 ml-2" />
                      ) : (
                        <BsCheck2 className="text-gray-500 ml-2" />
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-4 text-gray-500">
                <IoChatbubbleEllipsesOutline size={48} className="mb-4" />
                <p>Hiç mesajınız yok</p>
              </div>
            )
          ) : filteredNewMessages.length > 0 ? (
            filteredNewMessages.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-900"
              >
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full object-cover mr-3 border border-gray-700"
                  alt={item.name}
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Yeni kişi</p>
                </div>
                <button className="text-gray-400 hover:text-white p-2">
                  <IoChatbubbleEllipsesOutline size={20} />
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-4 text-gray-500">
              <IoChatbubbleEllipsesOutline size={48} className="mb-4" />
              <p>Yeni kişi bulunamadı</p>
            </div>
          )}
        </div>
      </div>

      {/* Sağ panel - Sohbet alanı */}
      {selectedMessage ? (
        <div className="hidden md:flex flex-col w-2/3 h-full bg-black">
          {/* Sohbet header */}
          <div className="flex items-center p-4 border-b border-gray-800 bg-black">
            <img
              src={selectedMessage.image}
              className="w-10 h-10 rounded-full mr-3 border border-gray-700"
              alt={selectedMessage.name}
            />
            <div className="flex-1">
              <h2 className="font-semibold">{selectedMessage.name}</h2>
              <p className="text-xs text-gray-500">Çevrimiçi</p>
            </div>
          </div>

          {/* Mesajlar */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-900 bg-opacity-30">
            {selectedMessage.messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.sender === "me"
                      ? "bg-blue-600 rounded-tr-none"
                      : "bg-gray-800 rounded-tl-none"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className="text-xs text-right mt-1 text-gray-400">
                    {new Date(msg.time).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mesaj gönderme */}
          <div className="p-4 border-t border-gray-800 bg-black">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Mesaj yaz..."
                className="flex-1 bg-gray-900 rounded-full py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gray-700"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="ml-3 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors"
              >
                <IoSend size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-col items-center justify-center w-2/3 h-screen bg-black border-l border-gray-800">
          <div className="text-center p-6">
            <IoChatbubbleEllipsesOutline
              size={72}
              className="mx-auto mb-6 text-gray-700"
            />
            <h2 className="text-2xl font-bold mb-2">
              {activeTab === "messages" ? "Mesaj seçin" : "Kişi seçin"}
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              {activeTab === "messages"
                ? "Sohbet etmek için bir mesaj seçin"
                : "Yeni bir sohbet başlatmak için kişi seçin"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagePage;
