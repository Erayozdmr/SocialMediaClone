import React, { useState } from "react";
import { IoIosNotifications, IoIosClose } from "react-icons/io";
import { BsCheck2All, BsCheck2 } from "react-icons/bs";
import NotificationItems from "../NotificationPage/NotificationItem";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState(NotificationItems);
  const [activeTab, setActiveTab] = useState("all");

  // Bildirimi sil
  const removeNotification = (id) => {
    setNotifications(notifications.filter((item) => item.id !== id));
  };

  // Bildirimi okundu olarak işaretle
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  // Tümünü okundu olarak işaretle
  const markAllAsRead = () => {
    setNotifications(notifications.map((item) => ({ ...item, read: true })));
  };

  // Filtrelenmiş bildirimler
  const filteredNotifications =
    activeTab === "unread"
      ? notifications.filter((item) => !item.read)
      : notifications;

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Başlık */}
      <div className="flex justify-between items-center mb-6 flex-wrap">
        <h1 className="text-2xl font-bold text-white flex items-center">
          <IoIosNotifications className="mr-2 text-blue-400" />
          Bildirimler
        </h1>
        {notifications.some((item) => !item.read) && (
          <button
            onClick={markAllAsRead}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors mt-2 sm:mt-0"
          >
            Tümünü okundu olarak işaretle
          </button>
        )}
      </div>

      {/* Tablar */}
      <div className="flex border-b border-gray-700 mb-4 flex-wrap">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "all"
              ? "text-blue-400 border-b-2 border-blue-400"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("all")}
        >
          Tümü ({notifications.length})
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === "unread"
              ? "text-blue-400 border-b-2 border-blue-400"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("unread")}
        >
          Okunmamış ({notifications.filter((item) => !item.read).length})
        </button>
      </div>

      {/* Bildirim Listesi */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg transition-all duration-200 flex items-start ${
                item.read
                  ? "bg-gray-800"
                  : "bg-gray-700 border-l-4 border-blue-400"
              }`}
            >
              <div className="flex-shrink-0 mt-1">
                <div
                  className={`p-2 rounded-full ${
                    item.read ? "bg-gray-600" : "bg-blue-500"
                  }`}
                >
                  <IoIosNotifications className="text-white" />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <p
                  className={`${
                    item.read ? "text-gray-300" : "text-white font-medium"
                  }`}
                >
                  {item.description}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(item.time).toLocaleString()}
                </p>
              </div>
              <div className="flex space-x-2">
                {!item.read && (
                  <button
                    onClick={() => markAsRead(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                    title="Okundu olarak işaretle"
                  >
                    {item.read ? <BsCheck2All /> : <BsCheck2 />}
                  </button>
                )}
                <button
                  onClick={() => removeNotification(item.id)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                  title="Bildirimi sil"
                >
                  <IoIosClose size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <div className="text-gray-400 mb-2">
              <IoIosNotifications size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg text-white font-medium mb-1">
              {activeTab === "unread"
                ? "Okunmamış bildirimin yok"
                : "Hiç bildirimin yok"}
            </h3>
            <p className="text-gray-400 text-sm">
              {activeTab === "unread"
                ? "Tüm bildirimlerini okudun."
                : "Yeni bildirimler burada görünecek."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
