'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Code, Server, Cloud } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';


const projects = [
  {
    project: "minishell",
    desc: "The Minishell project is a system programming assignment developed in C as part of the curriculum at 1337 School. Its objective is to create a simplified version of the Unix command-line interpreter (shell), allowing users to execute commands in a terminal environment. The project involves implementing essential features such as parsing and interpreting user input, managing environment variables, handling built-in commands like cd, echo, pwd, env, export, unset, and exit, and supporting process management through system calls like fork, execve, and waitpid. Additionally, Minishell manages input/output redirections, pipes, and signal handling, providing a functional and interactive shell experience. This project offered valuable experience in Unix system programming, file descriptor manipulation, memory management, and error handling while respecting the behavior and conventions of standard shells like bash. Through Minishell, I gained a deeper understanding of low-level process control, terminal I/O, and the internal mechanisms that power Unix-like operating systems.The Minishell project is a system programming assignment developed in C as part of the curriculum at 1337 School. Its objective is to create a simplified version of the Unix command-line interpreter (shell), allowing users to execute commands in a terminal environment. The project involves implementing essential features such as parsing and interpreting user input, managing environment variables, handling built-in commands like cd, echo, pwd, env, export, unset, and exit, and supporting process management through system calls like fork, execve, and waitpid. Additionally, Minishell manages input/output redirections, pipes, and signal handling, providing a functional and interactive shell experience. This project offered valuable experience in Unix system programming, file descriptor manipulation, memory management, and error handling while respecting the behavior and conventions of standard shells like bash. Through Minishell, I gained a deeper understanding of low-level process control, terminal I/O, and the internal mechanisms that power Unix-like operating systems.",
    tags: ["C", "Unix", "Shell", "System Calls"],
    github: "https://github.com/achrafder99/minishell"
  },
  {
    project: "webserver",
    desc: "The Webserver project is a system and network programming assignment developed in C++ as part of the curriculum at 1337 School. Inspired by popular HTTP servers like Nginx, this project involved building a functional multi-client web server capable of handling HTTP requests and responses. The server is designed to manage multiple simultaneous connections using non-blocking sockets and multiplexing techniques like poll() or select(). It supports parsing and serving HTTP/1.1 requests, delivering static files, handling different HTTP methods such as GET, POST, and DELETE, and implementing essential features like error handling, client timeouts, CGI execution, and configuration file parsing for dynamic server setup. Through this project, I gained valuable experience in socket programming, event-driven server architecture, file I/O, process management, and deepened my understanding of the HTTP protocol and how modern web servers operate internally.",
    tags: ["C++", "HTTP", "Sockets", "CGI"],
    github: "https://github.com/achrafder99/Webserver_42"

  },
  {
    project: "inception",
    desc: "The Inception project is a DevOps and system administration assignment developed as part of the 1337 School curriculum. Its goal is to introduce students to modern containerization and deployment practices by creating a fully functional, containerized infrastructure using Docker. The project involves setting up multiple Docker containers to host different services, including Nginx as a reverse proxy, WordPress with a MariaDB database, and additional tools like phpMyAdmin. Each service runs in its own container, with strict network isolation and volume management to ensure data persistence. The infrastructure is orchestrated using Docker Compose, allowing easy deployment and scalability. Through this project, I gained hands-on experience with Docker images, container networking, service orchestration, and securing web services, while learning the fundamentals of infrastructure-as-code and modern deployment workflows.",
    tags: ["Docker", "Nginx", "MariaDB", "WordPress"],
    github: "https://github.com/achrafder99/inception"
  },
  {
    project: "ft_transcendence",
    desc: "The ft_transcendence project is the final and most advanced web development assignment at 1337 School, designed to apply full-stack development, real-time communication, and system monitoring techniques. I built a dynamic and interactive web application using Next.js for the frontend and Django with Django REST Framework for the backend. The application features real-time functionality through WebSockets and Django Channels, enabling live chat and multiplayer game interactions. To ensure security and performance, we implemented rate limiting mechanisms to protect the APIs against abuse and potential DDoS attacks. Additionally, the project integrates the Elastic Stack (ELK) — Elasticsearch, Logstash, and Kibana — for centralized logging, monitoring, and visualizing server activities and application logs. This project provided valuable experience in full-stack application architecture, asynchronous WebSocket management, API security, and system observability within a containerized and scalable infrastructure.",
    tags: ["Next.js", "Django", "WebSockets", "ELK"],
    github: "https://github.com/achrafder99/ft_transcendence"

  },
];

const iconForProject = (name: string) => {
  switch (name) {
    case 'minishell':
      return <Code className="w-6 h-6 text-indigo-500" />;
    case 'webserver':
      return <Server className="w-6 h-6 text-emerald-500" />;
    case 'inception':
      return <Cloud className="w-6 h-6 text-sky-500" />;
    case 'ft_transcendence':
      return <BadgeCheck className="w-6 h-6 text-pink-500" />;
    default:
      return <Code className="w-6 h-6 text-gray-500" />;
  }
};

const Projects = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
 <section
      className="scroll-mt-28 px-2 sm:px-6 md:px-4 max-w-7xl mx-auto"
      id="projects"
    >
      <h2 className="text-xl text-[#ccc] font-extrabold mb-4  text-start md:text-left">
        Projects
      </h2>

      {/* Grid for md and up, flex-col for smaller */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] border rounded-lg shadow-md flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 p-4">
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-4">
                  {iconForProject(proj.project)}
                  <h3 className="text-xl font-semibold capitalize text-gray-800 dark:text-white">
                    {proj.project}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
              >
                <section className="text-gray-700 bg-[#282828]/30 border backdrop-blur-md p-2 rounded-xl dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer">
                  <FaGithub color="#ccc" size={20} />
                </section>
              </a>
            </div>

            <div className="px-4 pb-6">
              <p className="text-gray-600 text-sm dark:text-gray-300 leading-relaxed mb-4">
                {expanded[index] || proj.desc.length <= 200
                  ? proj.desc
                  : `${proj.desc.slice(0, 200)}...`}
              </p>
              {proj.desc.length > 200 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-indigo-400 text-sm font-semibold hover:underline"
                >
                  {expanded[index] ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
