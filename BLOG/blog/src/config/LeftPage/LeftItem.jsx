import { IoMdHome } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const LeftItem = [
  {
    id: 1,
    title: "Anasayfa",
    icon: <IoMdHome />,
    path: "/",
  },
  {
    id: 2,
    title: "Bildirimler",
    icon: <IoIosNotifications />,
    path: "/notification",
  },
  {
    id: 3,
    title: "Mesajlar",
    icon: <AiFillMessage />,
    path: "/message",
  },
  {
    id: 4,
    title: "Profil",
    icon: <FaUser />,
    path: "/profile",
  },
];

export default LeftItem;
