import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const contacts = [
  {
    provider: "LinkedIn",
    link: "https://www.linkedin.com/in/achraf-dardour-4803251b6/",
    icon: <FaLinkedin />
  },
  {
    provider: "GitHub",
    link: "https://github.com/achrafder99", 
    icon: <FaGithub />
  },
  {
    provider: "Twitter",
    link: "https://x.com/Achrafber4",  
    icon: <FaTwitter />
  }
];

const Contact = () => {
  return (
    <section className='flex flex-row gap-4  justify-center items-center mt-6 rounded-2xl'>
      <h1 className='text-xs'>Follow me</h1>
      <ul className='flex flex-row gap-4'>
        {contacts.map(({ provider, link, icon }) => (
          <li key={provider} className="flex items-center gap-2 my-2 bg-black/30 backdrop-blur-md p-2 rounded-xl">
            <a href={link} target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2 text-[#ccc] hover:underline">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
