'use client'

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/SkillsSection";
import Educations from "@/components/Educations";
import Experience from "@/components/Experience";
import Projects from "@/components/projects";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import EmailMe from "@/components/emailme";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("darkMode");
      if (storedDarkMode === "true") {
        setDarkMode(true);
        document.body.classList.add("dark");
      } else {
        setDarkMode(false);
        document.body.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <>
      <div className="absolute inset-0 " />
      <div className="flex justify-center dark:text-white ">
        <div className="w-full max-w-[48rem] z-[10]">
          <Navbar />
          <Hero />
          <SkillsSection />
          <Educations />
          <Experience />
          <Projects />
          <EmailMe />
          <Header />
        </div>
      </div>
    </>
  );
}
