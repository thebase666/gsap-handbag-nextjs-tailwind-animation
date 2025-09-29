"use client";

import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

function BestSeller() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#best-seller", // id=best-seller 用#选择器
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeline
      .to(".will-fade", {
        // classname=will-fade 用.选择器
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(".masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });

  return (
    <section id="best-seller" className="relative py-12 sm:py-32  pt-20">
      <div className=" mx-auto px-4 sm:px-6">
        {/* 标题 */}
        <h2 className="will-fade text-center text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Best Seller
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* 中间 Masked 图片 */}
          <div className="relative flex justify-center items-center w-full">
            <img
              src="/bag2.jpg"
              alt="Luxury Bag"
              className="masked-img object-contain w-full h-full max-w-[220px] sm:max-w-sm rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* 遮罩内容 */}
        <div className="mt-6 sm:mt-10 text-center px-4">
          <h2 className="will-fade text-xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Signature Elegance
          </h2>
          <div className="masked-content opacity-0  max-w-xl mx-auto hidden md:block">
            <h3 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">
              Crafted for Style, Built for Life
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              More than a bag — it’s a statement piece that blends artistry,
              quality, and everyday functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
