'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  FileCode,
  Network,
  Cpu,
  BarChart3,
  Settings
} from 'lucide-react';
import { ReactElement, useState } from "react";

const skills: Record<'frontend' | 'backend' | 'devops', string[]> = {
  frontend: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Cypress'],
  backend: ['Node.js', 'Express', 'Django', 'Nest.js'],
  devops: ['SQL', 'PostgreSQL', 'Docker', 'Kubernetes', 'Microservices', 'Nginx', 'Kafka', 'Elasticsearch'],
};

const skillIcons: Record<string, ReactElement> = {
  'JavaScript': <Code size={16} />,
  'React': <Layout size={16} />,
  'Next.js': <Layout size={16} />,
  'Tailwind CSS': <Layout size={16} />,
  'Cypress': <FileCode size={16} />,
  'Node.js': <Server size={16} />,
  'Express': <Server size={16} />,
  'Django': <Server size={16} />,
  'Nest.js': <Server size={16} />,
  'SQL': <Database size={16} />,
  'PostgreSQL': <Database size={16} />,
  'Docker': <Cloud size={16} />,
  'Kubernetes': <Network size={16} />,
  'Microservices': <Cpu size={16} />,
  'Nginx': <Settings size={16} />,
  'Kafka': <BarChart3 size={16} />,
  'Elasticsearch': <BarChart3 size={16} />,
};

const skillColors: Record<string, string> = {
  'JavaScript': 'bg-yellow-500',
  'React': 'bg-cyan-500',
  'Next.js': 'bg-black',
  'Tailwind CSS': 'bg-blue-400',
  'Cypress': 'bg-green-500',
  'Node.js': 'bg-green-700',
  'Express': 'bg-gray-800',
  'Django': 'bg-green-900',
  'Nest.js': 'bg-red-600',
  'SQL': 'bg-indigo-600',
  'PostgreSQL': 'bg-blue-800',
  'Docker': 'bg-blue-500',
  'Kubernetes': 'bg-indigo-500',
  'Microservices': 'bg-purple-500',
  'Nginx': 'bg-gray-700',
  'Kafka': 'bg-orange-600',
  'Elasticsearch': 'bg-yellow-600',
};

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  function toggleCategory(key: string) {
    setExpandedCategories(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <section className="text-white scroll-mt-28 " id="stack" >
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-2 mt-6 text-[#ccc]">Stacks</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  rounded-2xl mt-4 gap-4">
          {Object.keys(skills).map((key) => {
            const skillList = skills[key as keyof typeof skills];
            const isExpanded = expandedCategories[key];
            const visibleSkills = isExpanded ? skillList : skillList.slice(0, 4);

            return (
              <div key={key}>
                <h1 className="text-white text-xs tracking-widest rounded-2xl font-semibold mb-2 uppercase">
                  {key}
                </h1>

                <div className="space-y-1 mt-6">
                  {visibleSkills.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-gray-300 text-sm border p-1 rounded-2xl mt-6 gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className={`${skillColors[item] || 'bg-gray-600'} p-2 rounded-xl`}>
                        <div className={`p-2 shadow-2xl rounded-lg bg-white/30 backdrop-blur-md`}>
                          {skillIcons[item] || <Code size={16} />}
                        </div>
                      </div>
                      <span className="truncate max-w-[120px]" title={item}>{item}</span>
                    </motion.div>
                  ))}
                </div>

                {skillList.length > 4 && (
                  <button
                    onClick={() => toggleCategory(key)}
                    className="mt-4 p-2 cursor-pointer   text-xs text-cyan-400 hover:underline"
                  >
                    {isExpanded ? 'Show Less' : 'More'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

