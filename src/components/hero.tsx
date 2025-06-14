'use client'

import React, { useState } from 'react'
import Contact from './Contact'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { FileText, Mail } from 'lucide-react'

const Hero = () => {

    const [message, setMessage] = useState<string | null>(null)


    const handleCopyEmail = () => {
        const email = "derdourachraf@gmail.com"
        navigator.clipboard.writeText(email)
            .then(() => showMessage("📧 Email copied to clipboard!"))
            .catch(() => showMessage("❌ Failed to copy email"))
    }

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Achraf_Dardour_Resume.pdf";
        link.click();
    };

    const showMessage = (text: string) => {
        setMessage(text)
        setTimeout(() => setMessage(null), 3000)
    }

    return (
        <section className="mt-14 lg:mt-10 flex text-center flex-col justify-center items-center w-full scroll-mt-32 p-4 rounded-xl font-sans" id="about">
            {message && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                    <div className="px-4 py-2 rounded-xl bg-black text-white text-sm shadow-lg animate-fade-in-out">
                        {message}
                    </div>
                </div>
            )}

            <div className="max-w-3xl mx-auto text-[17px] leading-[1.7] text-neutral-300">
                <div className="mb-6">
                    <a href="#" className="text-4xl md:text-6xl  text-neutral-500 font-extrabold tracking-widest">Achraf Dardour</a>
                    <h1 className="text-lg mt-4 text-neutral-400">Full-stack developer</h1>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-6">
                    <Avatar className="w-[8rem] h-[8rem] rounded-3xl -rotate-6 shadow-2xl">
                        <AvatarImage src="https://cdn.intra.42.fr/users/098de47650121cad9ef881e5377c2630/adardour.jpg" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>

                    <p className="text-start">
                        Passionate Full-Stack Developer with over 6 years of experience building dynamic, scalable web applications. Specialized in <span className="text-white font-medium">JavaScript</span>, <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Node.js</span>, and <span className="text-white font-medium">Django</span>, with a strong focus on clean code, modern UI/UX, and high-performance architectures. Experienced in Agile workflows, microservices, Docker, and real-time data systems. I thrive in collaborative environments where innovation and precision matter.
                    </p>
                </div>

                <p className="text-start">
                    Constantly driven by challenge, I enjoy transforming complex problems into elegant, efficient solutions. Fluent in Arabic and English, with an intermediate command of French, I'm always ready to tackle ambitious projects and deliver meaningful results.
                </p>

                <div className="flex flex-row gap-4 mt-6">
                    <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex cursor-pointer items-center gap-2 border border-neutral-600 px-6 font-medium rounded-lg text-sm py-2.5 text-center text-neutral-300 hover:bg-neutral-800 transition"
                    >
                        <Mail size={16} />
                    </button>

                    <button
                        type="button"
                        onClick={handleDownloadResume}
                        className="flex cursor-pointer items-center gap-2 border border-neutral-600 px-8 font-medium rounded-lg text-sm py-2.5 text-center text-neutral-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition"
                    >
                        <FileText size={16} />
                        Resume
                    </button>
                </div>

                <Contact />
            </div>
        </section>

    )
}

export default Hero
