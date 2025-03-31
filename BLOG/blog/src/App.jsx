import "./App.css";
import { Routes, Route } from "react-router-dom";
import LeftPage from "./Pages/LeftPage";
import RightPage from "./Pages/RightPage";
import MainPage from "./Pages/MainPage";
import Notificationpage from "./config/NotificationPage/Notificationpage";
import Messagepage from "./config/MessagePage/Messagepage";
import Profilepage from "./config/ProfilePage/Profilepage";
function App() {
  return (
    <>
      <div className="flex min-h-[957px] max-h-[1450px]">
        <div className="w-2/6 bg-black p-4">
          <LeftPage />
        </div>
        <div className="w-2/6 bg-black  p-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/notification" element={<Notificationpage />} />
            <Route path="/message" element={<Messagepage />} />
            <Route path="/profile" element={<Profilepage />} />
          </Routes>
        </div>
        <div className="w-2/6 bg-black p-4">
          <RightPage />
        </div>
      </div>
    </>
  );
}

export default App;
