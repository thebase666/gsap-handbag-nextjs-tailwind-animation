"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { allBags } from "../constants";

function Collections() {
  const [currentId, setCurrentId] = useState(1);
  const [currentBag, setCurrentBag] = useState(allBags[0]);

  useEffect(() => {
    const selectedBag = allBags.find((bag) => bag.id === currentId);
    setCurrentBag(selectedBag);
  }, [currentId]);

  useGSAP(() => {
    gsap.fromTo(
      "#currentBagImage",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(".name", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".title",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut", delay: 0.5 }
    );
    gsap.fromTo(
      ".description",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut", delay: 0.8 }
    );
  }, [currentId]);

  return (
    <section id="collections" className="relative py-16 md:py-32 ">
      {/* 背景装饰 */}
      <img
        src="/icon2.png"
        alt="icon2"
        id="icon2"
        className="absolute bottom-6 right-6 w-12 md:w-48 "
      />

      {/* 标签导航 */}
      <nav className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12 md:mb-16">
        {allBags.map((bag, _) => {
          const isActive = bag.id === currentId;
          console.log("bag.id, currentId", bag.id, currentId);
          return (
            <button
              key={bag.id}
              onClick={() => setCurrentId(bag.id)}
              className={`px-3 py-1 md:px-5 md:py-2 rounded-full text-xs md:text-base font-medium transition-all duration-300 
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
            >
              {bag.name}
            </button>
          );
        })}
      </nav>

      {/* 主体内容 */}
      <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 md:px-0">
        <div className=" flex justify-center">
          <div className="w-[220px] h-[220px] md:w-[450px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl bg-transparent">
            <img
              id="currentBagImage"
              src={currentBag.image}
              alt={currentBag.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 文字内容 */}
        <div className="space-y-6 text-center md:text-left">
          <p className="name text-2xl md:text-4xl font-extrabold mt-2  bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            {currentBag.name}
          </p>

          <div className="space-y-4 hidden md:block">
            <h2 className="title text-lg md:text-2xl font-semibold text-gray-900">
              {currentBag.title}
            </h2>
            <p className="description text-sm md:text-base text-gray-600 leading-relaxed">
              {currentBag.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collections;
