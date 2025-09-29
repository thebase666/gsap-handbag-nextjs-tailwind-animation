"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Hero() {
  useGSAP(() => {
    // 标题拆分动画
    const heroSplit = new SplitText(".title0", {
      type: "chars, words",
    });

    gsap.from(heroSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    // 副标题动画
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.3,
      delay: 1.5,
    });

    // Icon follows scroll
    // scrollTrigger makes the animation follow scrolling:
    // trigger: "#hero" → The element that triggers the animation.
    // start: "top top" → The animation starts when the top of #hero reaches the top of the viewport.
    // end: "bottom top" → The animation ends when the bottom of #hero reaches the top of the viewport.
    // scrub: true → The animation syncs with scrolling; it progresses smoothly as you scroll.
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".icon", { y: 200 }, 0)
      .to(".icon1", { y: 300 }, 0);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-12 
       text-gray-900 overflow-hidden"
    >
      {/* 背景渐变光效 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.25),transparent_60%)] pointer-events-none" />

      <img
        src="bag4.jpg"
        alt="bag4"
        className="mx-auto mb-10 w-[400px] md:w-[500px] rounded-2xl shadow-xl object-cover"
      />

      <p className="title0 relative text-5xl md:text-7xl font-extrabold tracking-tight text-center bg-gradient-to-r from-blue-500 via-purple-900 to-pink-600 bg-clip-text text-transparent">
        SUPER HANDBAG
      </p>

      {/* 装饰 icon */}
      <img
        id="icon1"
        src="icon1.png"
        alt="icon1"
        className="hidden md:inline icon1 absolute bottom-96 left-5 w-16 md:w-48"
      />
      <img
        id="icon"
        src="icon.png"
        alt="icon"
        className="icon absolute bottom-48 right-5 w-16 md:w-48"
      />

      {/* 副标题 & CTA */}
      <div className=" relative w-full max-w-3xl mt-5">
        <div className="content text-center space-y-6">
          {/* 桌面端显示 */}
          <div className="space-y-5 ">
            <p className="subtitle text-2xl md:text-4xl font-semibold leading-snug bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mt-5">
              Carry Your Style Everywhere
            </p>
            <p className="subtitle text-lg md:text-xl font-medium tracking-wide text-gray-600 hidden md:block">
              Timeless. Elegant. Essential.
            </p>
          </div>

          {/* 移动端显示 */}
        </div>
      </div>

      <Star className="arrow absolute bottom-12 left-1/2 -translate-x-1/2 w-6 h-6 text-purple-400 animate-bounce" />
    </section>
  );
}
