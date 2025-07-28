'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type Project = {
  id: string
  title: string
  techStack: string[]
  github?: string
  demo?: string
  description: string
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    techStack: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/razin-portfolio',
    demo: 'https://im-razin.vercel.app',
    description: 'A luxurious portfolio site to showcase my designs, blogs, and products.',
  },
  {
    id: '2',
    title: 'AI Chatbot with Flask',
    techStack: ['Python', 'Flask', 'OpenAI API'],
    github: 'https://github.com/istiyaq-ai-bot',
    demo: '',
    description: 'A chatbot built with Flask using OpenAI’s GPT model for cool convos.',
  },
  {
    id: '3',
    title: 'YouTube Thumbnail Generator',
    techStack: ['Python', 'Pillow', 'Tkinter'],
    github: '',
    demo: '',
    description: 'A desktop app to auto-generate epic YouTube thumbnails using Python!',
  },
  // Add more projects later as you build em 🔥
]

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-green-400"
      >
        My Coding Projects 💻🚀
      </motion.h1>

      <p className="text-center text-green-300 max-w-3xl mx-auto">
        These are the projects I’ve coded using Python, Next.js, and more. Some are just experiments, some are full-on fire apps. Stay tuned for more!
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {mockProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#122d18] border border-green-800 rounded-2xl p-5 space-y-4 shadow hover:shadow-green-500/20 transition-all"
            whileHover={{ scale: 1.03 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-xl font-semibold text-green-300">{project.title}</h2>
            <p className="text-green-400 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs text-green-200 bg-green-900 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-green-300 hover:text-green-500 transition"
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-green-300 hover:text-green-500 transition"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
