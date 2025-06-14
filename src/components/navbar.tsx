'use client'

import React, { useState, useEffect } from 'react'
import { Mail, Folder, User, FileText, Briefcase, GraduationCap, Code } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const items = [
  { index: 1, name: "Experience", icon: <Briefcase size={18} />, targetId: "experience" },
  { index: 2, name: "Project", icon: <Folder size={18} />, targetId: "projects" },
  { index: 3, name: "About", icon: <User size={18} />, targetId: "about" },
  { index: 4, name: "Education", icon: <GraduationCap size={18} />, targetId: "educations" },
  { index: 5, name: "Stack", icon: <Code size={18} />, targetId: "stack" },
];

const Navbar = () => {
  const [isVertical, setIsVertical] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isSmallScreen) return 
      if (window.scrollY > 200) {
        setIsVertical(true)
      } else {
        setIsVertical(false)
      }
    }

    const handleResize = () => {
      const small = window.innerWidth < 1024
      setIsSmallScreen(small)
      if (small) setIsVertical(false)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isSmallScreen])

  const handleClick = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    if (isVertical && !isSmallScreen) {
      const navbarWidth = 20; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarWidth;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // default smooth scroll
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};


  const showIconsOnly = isVertical || isSmallScreen

  return (
    <div
      className={`top-0 z-50 p-4 text-sm font-extrabold transition-all duration-500 nav
        ${isVertical || isSmallScreen ? 'fixed' : 'mt-8'}
        flex ${isVertical && !isSmallScreen ? 'flex-col items-center gap-8 w-fit -translate-x-[6rem]' : 'flex-row justify-between items-center w-full'}
        ${isSmallScreen ? 'bg-[#1A1A1A]/90 backdrop-blur-lg p-6' : ''}
      `}
    >
      {(isVertical && !isSmallScreen) && (
        <div className="relative inline-block">
          <Avatar className="w-10 h-10 rounded-md shadow-2xl">
            <AvatarImage src="https://cdn.intra.42.fr/users/098de47650121cad9ef881e5377c2630/adardour.jpg" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>

          <button
            type="button"
            title="Online"
            className="absolute -bottom-2 right-0 w-4 h-4 bg-green-600 rounded-full border-2 border-[#1A1A1A] animate-pulse focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-green-500"
            onClick={() => alert("You clicked the online status!")}
          />
        </div>
      )}

      <ul className={`transition-all duration-500 ${isVertical && !isSmallScreen ? 'flex flex-col gap-8' : 'flex flex-row gap-4'}`}>
        {items.map((item) => (
          <li
            key={item.index}
            onClick={() => handleClick(item.targetId)}
            className='uppercase text-xs font-extrabold text-gray-300 cursor-pointer flex items-center gap-2'
          >
            {showIconsOnly ? item.icon : item.name}
          </li>
        ))}
      </ul>

      {!isVertical && !isSmallScreen && (
        <button className="text-xs px-6 p-2 font-bold rounded-md flex items-center gap-2">
          <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
          Seeking opportunities
        </button>
      )}
    </div>
  )
}

export default Navbar
