"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants";

function AnimatedCounter() {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // 初始值 0
      gsap.set(numberElement, { innerText: "0" });

      // 动画
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top 80%",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <section id="counter" ref={counterRef} className="relative py-16 sm:py-28 ">
      <div className="container mx-auto px-4 sm:px-6">
        {/* 标题 */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-14 text-green-500">
          Our Achievements
        </h2>

        {/* 数字卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {counterItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => el && (countersRef.current[index] = el)}
              className="bg-white/80 backdrop-blur rounded-2xl shadow-md px-4 sm:px-6 py-8 sm:py-10 flex flex-col items-center 
                         hover:shadow-xl hover:scale-[1.02] transition transform duration-300"
            >
              <div
                className="counter-number text-3xl sm:text-5xl font-extrabold mb-2 sm:mb-3 
                text-blue-600"
              >
                {/* 初始0 动画覆盖掉0 */}0{item.suffix}
              </div>
              <div className="text-gray-700 text-sm sm:text-lg font-medium text-center whitespace-nowrap">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnimatedCounter;
