"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function Features() {
  useGSAP(() => {
    const heroSplit = new SplitText(".title1", { type: "chars, words" });
    gsap.from(heroSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1.3,
      ease: "expo.out",
      stagger: 0.1,
    });

    gsap.to(".g_grow", {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".g_grow",
        start: "top 85%",
        scrub: 2,
      },
    });

    gsap.fromTo(
      "#bag4_img",
      { scale: 1.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#bag4",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="features" className="relative py-12 sm:py-20 overflow-hidden">
      <div className=" mx-auto px-4 sm:px-6 flex flex-col items-center ">
        <p className="title1 text-3xl md:text-5xl font-extrabold tracking-tight text-center text-pink-600 mb-10">
          Explore The Story
        </p>

        {/* 图片区域 */}
        <div className="w-full flex flex-col gap-4 sm:gap-6 max-w-5xl">
          {/* 上面两张横排 */}
          <div className="flex flex-row gap-4 sm:gap-6">
            <div className="flex-1 h-[25vh] sm:h-[40vh] overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="bag6.jpg"
                alt="bag6"
                className="g_grow w-full h-full object-cover object-center scale-115 opacity-0 rounded-xl sm:rounded-2xl shadow-md"
              />
            </div>
            <div className="flex-1 h-[25vh] sm:h-[40vh] overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src="bag7.jpg"
                alt="bag7"
                className="g_grow w-full h-full object-cover object-center scale-115 opacity-0 rounded-xl sm:rounded-2xl shadow-md"
              />
            </div>
          </div>

          {/* 下面一张大图 */}
          <div
            id="bag4"
            className="flex items-center justify-center w-full max-w-xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl shadow-lg"
          >
            <img
              id="bag4_img"
              src="bag4.jpg"
              alt="bag4"
              className="w-full h-[30vh] lg:h-[54vh] object-cover opacity-0 rounded-xl sm:rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
