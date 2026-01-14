import React, { useEffect, useState } from "react";
import python from "../assets/python.png";
import java from "../assets/java.png";
import sql from "../assets/sql.png";

const ProgrammingLanguage = () => {
  const itemWidth = 170;

  const [curIndex, setCurIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(1);

  const languageList = [
    { name: "Java", img: java },
    { name: "Python", img: python },
    { name: "SQL", img: sql },
  ];

  // 🔹 Handle screen resize
  useEffect(() => {
    const updateItemsVisible = () => {
      if (window.innerWidth >= 1024) setItemsVisible(4);
      else if (window.innerWidth >= 768) setItemsVisible(3);
      else if (window.innerWidth >= 640) setItemsVisible(2);
      else setItemsVisible(1);
    };

    updateItemsVisible();
    window.addEventListener("resize", updateItemsVisible);

    return () => window.removeEventListener("resize", updateItemsVisible);
  }, []);

  const maxIndex = Math.max(languageList.length - itemsVisible, 0);

  const prevIndex = () => {
    if (curIndex > 0) setCurIndex(curIndex - 1);
  };

  const nextIndex = () => {
    if (curIndex < maxIndex) setCurIndex(curIndex + 1);
  };

  return (
    <div>
      <p className="text-2xl font-semibold mb-5 text-center md:text-left">
        PROGRAMMING LANGUAGES KNOWN
      </p>

      <div className="flex justify-center items-center w-full">
        {/* Left Arrow */}
        <div className="w-[10%] flex justify-center">
          {curIndex > 0 && (
            <span
              onClick={prevIndex}
              className="hover:bg-slate-500 rounded-full p-3 cursor-pointer"
            >
              &#129128;
            </span>
          )}
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden p-4"
          style={{ width: `${itemsVisible * itemWidth}px` }}
        >
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${curIndex * itemWidth}px)`,
            }}
          >
            {languageList.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative group  rounded-xl"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[150px] w-[150px] rounded-lg cursor-pointer group-hover:scale-105 duration-500 group-hover:bg-slate-600 bg-white"
                />
                <p className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 text-white text-xl font-semibold tracking-widest">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="w-[10%] flex justify-center">
          {curIndex < maxIndex && (
            <span
              onClick={nextIndex}
              className="hover:bg-slate-500 rounded-full p-3 cursor-pointer"
            >
              &#129130;
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingLanguage;
