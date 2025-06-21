'use client'

import React, { useState, useEffect } from 'react'
import Contact from './Contact'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { FileText, Mail, Sun, Moon } from 'lucide-react'

const Hero = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  // On mount: load mode from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      setDarkMode(saved === 'true')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
    }
  }, [])

  // Whenever darkMode changes: update <html> class and localStorage
  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  const handleCopyEmail = () => {
    const email = "derdourachraf@gmail.com"
    navigator.clipboard.writeText(email)
      .then(() => showMessage("📧 Email copied to clipboard!"))
      .catch(() => showMessage("❌ Failed to copy email"))
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Achraf_Dardour_Resume.pdf"
    link.click()
  }

  const showMessage = (text: string) => {
    setMessage(text)
    setTimeout(() => setMessage(null), 3000)
  }

  return (
    <div>
      <div className='w-full min-h-screen absolute dark:bg-linear-to-b dark:from-sky-950  top-0 left-0 -z-10'>

      </div>
      <section
      className="mt-[4rem] lg:mt-10 flex text-center flex-col justify-center items-center w-full scroll-mt-32 p-4 rounded-xl font-sans"
      id="about"
    >
      {message && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="px-4 py-2 rounded-xl bg-black text-white text-sm shadow-lg animate-fade-in-out">
            {message}
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto text-[17px] leading-[1.7] text-neutral-300">
        <div className="mb-6">
          <a
            href="#"
            className="text-3xl md:text-4xl text-start dark:text-white text-gray-800 font-extrabold tracking-widest"
          >
            Achraf Dardour
          </a>
          <h1 className="text-lg mt-4 text-neutral-400">Full-stack developer</h1>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-6">
          <Avatar className="w-[10rem] h-[10rem] rounded-3xl -rotate-6 shadow-2xl mx-auto sm:mx-0 sm:w-32 sm:h-32 flex-shrink-0">
            <AvatarImage src="https://cdn.intra.42.fr/users/098de47650121cad9ef881e5377c2630/adardour.jpg" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>

          <p className="text-start text-[#1A1A1A] dark:text-white sm:flex-1 leading-relaxed text-base sm:text-sm">
            Passionate <span className="font-semibold">Full-Stack Developer</span> building dynamic, scalable web applications.
            Specialized in{" "}
            <span className="font-bold text-[#6366F1]">JavaScript</span>,{" "}
            <span className="font-bold text-[#6366F1]">React</span>,{" "}
            <span className="font-bold text-[#6366F1]">Node.js</span>, and{" "}
            <span className="font-bold text-[#6366F1]">Django</span>, with a strong focus on clean code,
            modern <span className="font-semibold">UI/UX</span>, and high-performance architectures.
            Experienced in{" "}
            <span className="font-bold text-[#10B981]">Agile workflows</span>,{" "}
            <span className="font-bold text-[#10B981]">microservices</span>,{" "}
            <span className="font-bold text-[#10B981]">Docker</span>, and{" "}
            <span className="font-bold text-[#10B981]">real-time data systems</span>.
            I thrive in collaborative environments where <span className="italic">innovation</span> and <span className="italic">precision</span> matter.
          </p>
        </div>

        <p className="text-start text-[#1A1A1A] dark:text-white text-sm mt-4">
          Constantly driven by challenge, I enjoy transforming complex problems into
          elegant, efficient solutions. Fluent in Arabic and English, with an
          intermediate command of French, I'm always ready to tackle ambitious
          projects and deliver meaningful results.
        </p>

        <div className="flex  flex-col sm:flex-row gap-4 mt-6">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="text-[#1A1A1A] flex justify-center items-center gap-2 border dark:border-neutral-600 px-6 font-medium rounded-lg text-sm py-2.5 text-center dark:text-neutral-300 hover:bg-neutral-800 transition w-full sm:w-auto"
          >
            <Mail size={16} />
          </button>

          <button
            type="button"
            onClick={handleDownloadResume}
            className="text-[#1A1A1A] flex justify-center items-center gap-2 border dark:border-neutral-600 px-8 font-medium rounded-lg text-sm py-2.5 text-center dark:text-neutral-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition w-full sm:w-auto"
          >
            <FileText size={16} />
            Resume
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
