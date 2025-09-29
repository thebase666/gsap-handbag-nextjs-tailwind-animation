"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { socials } from "../constants";

function Contact() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
      },
      defaults: { ease: "power2.out", duration: 0.8 },
    });

    timeline
      .from("#contact h2", { opacity: 0, y: 50 })
      .from("#contact h3", { opacity: 0, y: 40, stagger: 0.2 }, "+=0.3")
      .from("#contact p", { opacity: 0, y: 30, stagger: 0.15 }, "-=0.4")
      .from("#contact .socials", { opacity: 0, y: 40 }, "-=0.4")
      .to("#icon1", { y: -50, duration: 1 }, "<");
  });

  return (
    <footer
      id="contact"
      className="relative  px-4 sm:px-12 py-14 sm:py-32 overflow-hidden"
    >
      {/* 标题 */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>
      </div>

      {/* 主体内容 */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12">
        {/* 店铺地址 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-700">
            Visit Our Store
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            123 Fashion Avenue, <br /> New York, NY 10001
          </p>
        </div>

        {/* 联系方式 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-700">
            Customer Care
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            +1 (555) 987-6543
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            support@luxbag.com
          </p>
        </div>

        {/* 社交媒体 */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 text-pink-700">
            Follow Us
          </h3>
          <div className="flex gap-4 sm:gap-6 bg-gradient-to-br from-blue-900 via-purple-800 to-pink-500 px-4 sm:px-6 py-3 sm:py-4 rounded-full socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition transform hover:scale-110 hover:drop-shadow-lg"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 sm:w-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <img
        src="icon1.png"
        alt="icon1"
        id="icon1"
        className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-16 sm:w-48"
      />

      {/* 底部版权 */}
      <div className="text-center text-xs sm:text-sm text-gray-500 mt-10 sm:mt-16">
        © {new Date().getFullYear()} SuperBag. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;
