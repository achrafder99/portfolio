'use client'

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

  return (
    <>
      <div className="absolute inset-0 " />
      <div className="flex justify-center  dark:text-white ">
        <div className="w-full max-w-[48rem]    z-[10]">
          <Navbar />
          <Hero></Hero>
          <SkillsSection></SkillsSection>
          <Educations></Educations>
          <Experience></Experience>
          <Projects></Projects>
          <EmailMe></EmailMe>

          <Header></Header>
        </div>
      </div>
    </>

  );
}
