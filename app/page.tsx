import Image from "next/image";
import Nav from "./nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Hero from "./Hero";
import Socials from "./Socials";
import pingpong from "@/public/assets/pingpong.avif"
import Docker from "@/public/assets/docker.png"
import Http from "@/public/assets/http.webp"
import cub3d from "@/public/assets/cub3d.png"
import { FiGithub } from "react-icons/fi";
import Nodejs from "@/public/assets/svgs/nodejs-logo-svgrepo-com.svg"
import Ts from "@/public/assets/svgs/typescript-svgrepo-com.svg"
import Js from "@/public/assets/svgs/Js.svg"
import next from "@/public/assets/svgs/next.svg"
import Django from "@/public/assets/svgs/Django.svg"
import api from "@/public/assets/svgs/api.svg"
import docker from "@/public/assets/svgs/docker.svg"
import sql from "@/public/assets/svgs/sql.svg"
import shell from "@/public/assets/svgs/shell.svg"
import postman from "@/public/assets/svgs/postman.svg"
import socket from "@/public/assets/svgs/socket.svg"
import c__ from "@/public/assets/svgs/c__.png"


export default function Home() {
  return (
    <div className="flex flex-col  container mx-auto ">
      <div className="absolute w-full min-h-64 bg-gradient-to-b from-indigo-500 left-0 -z-40">

      </div>
      <div
        className="-z-10 absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
      ></div>
      <Nav></Nav>
      <Hero></Hero>
      <Socials></Socials>
      <div className="skills flex flex-col p-4">
        <h1 className="text-3xl font-extrabold">skills</h1>
        <div className="grid grid-cols-6 mt-5 gap-4  rounded-md  ">
          <div className="bg-green-100 justify-center rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-4 font-extrabold">
            <Image
              src={Nodejs}
              alt="My SVG Image"
              width="50"
              height="50"/>
              Node.js
          </div>
          <div className="bg-blue-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center justify-center gap-2 font-extrabold">
          <Image
              src={Ts}
              alt="My SVG Image"
              width="24"
              height="24"/>
            TypeScript  
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn  flex flex-row items-center gap-4 font-extrabold justify-center">
          <Image
              src={Js}
              alt="My SVG Image"
              width="24"
              height="24"/>
            JavaScript
          </div>
          <div className="bg-purple-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-4 font-extrabold justify-center">
          <Image
              src={next}
              alt="My SVG Image"
              width="24"
              height="24"/>
            Next.js / React
          </div>
          <div className="bg-red-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-2 font-extrabold justify-center ite">
          <Image
              src={Django}
              alt="My SVG Image"
              width="26"
              className="mt-1"
              height="26"/>
            Django
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-2 font-extrabold justify-center ">
          <Image
              src={api}
              alt="My SVG Image"
              width="26"
              height="26"/>
            
            REST API
          </div>
          <div className="bg-teal-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-2 font-extrabold justify-center">
          <Image
              src={docker}
              alt="My SVG Image"
              width="26"
              height="26"/>
            Docker
          </div>
            
          <div className="bg-pink-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-2 font-extrabold justify-center">
          <Image
              src={sql}
              alt="My SVG Image"
              width="26"
              height="26"/>
            Postgres / SQL
          </div>
          <div className="bg-gray-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn  flex flex-row items-center gap-2 font-extrabold justify-center">
          <Image
              src={shell}
              alt="My SVG Image"
              width="22"
              height="22"/>
            Shell
          </div>
          <div className="bg-orange-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-2 font-extrabold justify-center">
          <Image
              src={postman}
              alt="My SVG Image"
              width="22"
              height="22"/>
            Postman
          </div>
          <div className="bg-cyan-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-2 font-extrabold justify-center">
          <Image
              src={socket}
              alt="My SVG Image"
              width="22"
              height="22"/>
            WebSocket
          </div>
          <div className="bg-lime-100 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out animate-fadeIn flex flex-row items-center gap-2 font-extrabold justify-center">
          <Image
              src={c__}
              alt="My SVG Image"
              width="22"
              height="22"/>
            C / C++
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="p-4 text-3xl font-extrabold">Projects</h1>
        <div className="grid grid-cols-2 gap-8 px-2 mt-4">
          <div className="w-full min-h-[18rem] relative  rounded-3xl shadow-2xl">
            <div className="bg-gradient-to-t from-[#020617] w-full h-full absolute z-10 rounded-3xl">
              <section className="p-4 px-8 flex flex-col h-full  justify-end">
                <h1 className=" rounded-md z-10 text-white font-bold text-3xl" >ft_transcendence</h1>
                <p className="text-gray-300 text-sm mt-2">ft_transcendence is a project from School 42, an innovative coding
                  school that emphasizes peer-to-peer learning and real-world projects. The project involves creating a comprehensive web application ...</p>
                <span className="mt-4">
                  <FiGithub className="text-white" size={24}></FiGithub>
                </span>
              </section>
            </div>
            <Image
              src={pingpong}
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="w-full min-h-[18rem] relative  rounded-3xl shadow-2xl">
            <div className="bg-gradient-to-t from-[#020617] w-full h-full absolute z-10 rounded-3xl">
              <section className="p-4 px-8 flex flex-col h-full  justify-end">
                <h1 className=" rounded-md z-10 text-white font-bold text-3xl" >Inception</h1>
                <p className="text-gray-300 text-sm mt-2">Inception is another challenging project from School 42 that focuses on containerization and orchestration using Docker ...</p>
                <span className="mt-4">
                  <FiGithub className="text-white" size={24}></FiGithub>
                </span>
              </section>
            </div>
            <Image
              src={Docker}
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="w-full min-h-[18rem] relative  rounded-3xl shadow-2xl">
            <div className="bg-gradient-to-t from-[#020617] w-full h-full absolute z-10 rounded-3xl">
              <section className="p-4 px-8 flex flex-col h-full  justify-end">
                <h1 className=" rounded-md z-10 text-white font-bold text-3xl" >Web Server</h1>
                <p className="text-gray-300 text-sm mt-2">Webserver is a foundational project at School 42 designed to immerse students in the intricacies of building a fully functional web server from scratch using C++. This project introduces key concepts such as HTTP protocols ...</p>
                <span className="mt-4">
                  <FiGithub className="text-white" size={24}></FiGithub>
                </span>
              </section>
            </div>
            <Image
              src={Http}
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="w-full min-h-[18rem] relative  rounded-3xl shadow-2xl">
            <div className="bg-gradient-to-t from-[#020617] w-full h-full absolute z-10 rounded-3xl">
              <section className="p-4 px-8 flex flex-col h-full  justify-end">
                <h1 className=" rounded-md z-10 text-white font-bold text-3xl" >Cub 3D</h1>
                <p className="text-gray-300 text-sm mt-2">Cub 3D is a fascinating project from School 42 that immerses students in the world of graphics programming using C. Inspired by classic first-person shooter games like Wolfenstein 3D ...</p>
                <span className="mt-4">
                  <FiGithub className="text-white" size={24}></FiGithub>
                </span>
              </section>
            </div>
            <Image
              src={cub3d}
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="w-full min-h-[18rem] relative  rounded-3xl shadow-2xl">
            <div className="bg-gradient-to-t from-[#020617] w-full h-full absolute z-10 rounded-3xl">
              <section className="p-4 px-8 flex flex-col h-full  justify-end">
                <h1 className=" rounded-md z-10 text-white font-bold text-3xl" >Minishell</h1>
                <p className="text-gray-300 text-sm mt-2">Minishell is an essential project at School 42 that introduces students to the fundamentals of building a simple shell application using C This project requires students to implement core functionalities of a Unix shell ...</p>
                <span className="mt-4">
                  <FiGithub className="text-white" size={24}></FiGithub>
                </span>
              </section>
            </div>
            <Image
              src={cub3d}
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="contact mt-4 p-4 font-extrabold">
        <div className=" py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto bg-white p-8 ">
        <h2 className="text-3xl font-bold mb-6 text-start text-gray-800">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
    </div>
  );
}
