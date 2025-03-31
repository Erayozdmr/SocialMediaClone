import React from "react";
import LeftItem from "../config/LeftPage/LeftItem";
import { Link } from "react-router-dom";

const LeftPage = () => {
  return (
    <div className="border-r border-white h-full p-4 md:p-6 flex flex-col items-end">
      {LeftItem.map((item, index) => (
        <Link key={index} to={item.path} className="">
          <div className="flex items-center justify-center text-xl text-white">
            <div className="cursor-pointer mt-4 md:mt-6 text-center md:text-right hover:bg-white/50 flex items-center justify-end p-3 rounded-2xl transition-colors">
              <h1 className="hidden md:block">{item.title}</h1>
              <span className="text-2xl ml-3">{item.icon}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LeftPage;
