"use client";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import BestSeller from "@/components/BestSeller";
import Features from "@/components/Features";
import AnimatedCounter from "@/components/AnimatedCounter";
import About from "@/components/About";
import Contact from "@/components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);
// register global one time

const App = () => {
  return (
    <main className="bg-gradient-to-br  from-blue-50 via-purple-50 to-pink-50">
      <Navbar />
      <Hero />
      <Collections />
      <BestSeller />
      <Features />
      <AnimatedCounter />
      <About />
      <Contact />
    </main>
  );
};

export default App;
