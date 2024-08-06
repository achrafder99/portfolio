import { TfiFacebook } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { TfiLinkedin } from "react-icons/tfi";



import React from 'react'

const Socials = () => {
  return (
    <ul className="socials flex flex-row gap-8 p-4 mt-8 items-center">
        <ul className=" p-2  rounded-full border bg-white ">
          <TfiFacebook size={24}></TfiFacebook>
        </ul>
        <ul className=" p-2  rounded-full border bg-white ">
          <FiGithub size={24}></FiGithub>
        </ul>
        <ul className=" p-2  rounded-full border bg-white ">
          <CiTwitter size={24}></CiTwitter>
        </ul>
        <ul className=" p-2  rounded-full border bg-white ">
          <TfiLinkedin size={24}></TfiLinkedin>
        </ul>
      </ul>
  )
}

export default Socials