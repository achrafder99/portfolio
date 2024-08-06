/* eslint-disable react/jsx-no-undef */
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'

const Hero = () => {
    return (
        <div className="hero  w-full min-h-[24rem] rounded-md mt-4 flex flex-row justify-between ">
            <section className="mt-12">
                <Avatar className="w-[200px] h-[200px] rounded-full shadow-2xl border-4 border-[#4f46e5] flex justify-center items-center ml-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <section className="mt-6 text-3xl flex flex-col   p-4 items-start">
                    <h1 className="mb-2">Hello I`m Achraf Dardour</h1>
                    <p className="flex rounded-lg ">Full stack developer</p>
                </section>
            </section>
            <section className=" max-w-[48rem] p-4 flex flex-col justify-between items-start rounded-md mt-4 text-gray-950">
                <h1 className="text-3xl font-extrabold  bg-[#4f46e5] shadow-2xl text-white p-4 rounded-md">// About</h1>
                <p className="text-[1rem]">
                    Achraf Dardour is a skilled full-stack developer from Morocco with extensive experience in modern web technologies. He excels in using <span className="font-bold text-blue-500">Next.js</span> and <span className="font-bold text-blue-500">React</span> for creating dynamic, responsive frontends, and leverages the <span className="font-bold text-blue-500">MERN stack</span> for comprehensive web application development. His backend expertise includes <span className="font-bold text-blue-500">Django</span>, which he uses to build robust, scalable applications.

                    Achraf is proficient in containerization using <span className="font-bold text-blue-500">Docker</span>, facilitating seamless development and deployment workflows. He also has a strong command of both <span className="font-bold text-blue-500">SQL</span> and <span className="font-bold text-blue-500">PostgreSQL</span>, ensuring efficient and reliable database management. Achraf's versatile skill set and dedication to modern development practices make him a valuable asset in the tech industry.
                </p>
            </section>
        </div>
    )
}

export default Hero