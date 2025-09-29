"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function About() {
  useGSAP(() => {
    const titleSplit = new SplitText("#about h2", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    // 标题
    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.08,
    });

    // 图片
    tl.from(
      "#about .grid-img",
      {
        opacity: 0,
        y: 50,
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
      },
      "+=0.2"
    );
  });
  return (
    <section
      id="about"
      className="min-h-screen relative py-16 sm:py-20 md:py-32 "
    >
      <div className="mx-auto max-w-6xl px-5 md:px-0">
        {/* 顶部介绍 */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center mb-12 md:mb-16">
          <div className="md:col-span-8 space-y-4 md:space-y-6">
            <p className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-blue-100 text-blue-700 tracking-wide">
              Handcrafted Elegance
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug tracking-tight text-blue-500">
              Where every stitch matters{" "}
              <span className="text-gray-400">-</span> from design to detail
            </h2>
          </div>
        </div>

        {/* 图片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3 w-full h-48 sm:h-64 md:h-[400px] rounded-xl shadow-md overflow-hidden">
            <img
              src="bag1.jpg"
              alt="grid-img-1"
              className="grid-img w-full h-full object-cover object-center"
            />
          </div>

          <div className="md:col-span-6 w-full h-48 sm:h-64 md:h-[400px] rounded-xl shadow-md overflow-hidden">
            <img
              src="bag4.jpg"
              alt="grid-img-2"
              className="grid-img w-full h-full object-cover object-center"
            />
          </div>

          <div className="md:col-span-3 w-full h-48 sm:h-64 md:h-[400px] rounded-xl shadow-md overflow-hidden">
            <img
              src="bag5.jpg"
              alt="grid-img-5"
              className="grid-img w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
