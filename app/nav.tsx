import Link from 'next/link'
import React from 'react'

const nav = () => {
    return (
        <nav className="mt-8 flex flex-row justify-between  items-center rounded-md backdrop-blur-xl bg-white/30 p-4">
            <ul className=" rounded-md   flex-row  gap-12 flex justify-center items-center text-sm">
                <li className="text-[#111827]  px-[14px] py-[8px]  p-2 rounded-md">
                    <Link href="/Contact">Contact</Link>
                </li>
                <li className="text-[#111827] px-[14px] py-[8px] p-2 rounded-md ">
                    <Link href="/Projects">Projects</Link>
                </li>
                <li className="text-[#111827] px-[14px] py-[8px] p-2 rounded-md ">
                    <Link href="/About">About</Link>
                </li>
                <li className="text-[#111827] px-[14px] py-[8px] p-2  rounded-md ">
                    <Link href="/Blogs">Blogs</Link>
                </li>
            </ul>
            <section className="flex flex-row gap-6  items-center text-xs">
                <Link className="bg-[#111827] text-white px-[14px] py-[8px] rounded-md" href="/hireme">Hire me</Link>
                <Link className="text-[#111827] px-[14px] py-[8px] rounded-md" href="/resume">resume</Link>
            </section>
        </nav>
    )
}

export default nav