'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaPython, FaFigma, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiAdobeaftereffects, SiAdobeillustrator, SiMongodb, SiNextdotjs } from 'react-icons/si'

function calculateAge(birthDate: string) {
  const now = new Date()
  const birth = new Date(birthDate)
  let age = now.getFullYear() - birth.getFullYear()
  const hasBirthdayPassed =
    now.getMonth() > birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate())
  if (!hasBirthdayPassed) age--
  return age
}

export default function AboutPage() {
  const [age, setAge] = useState<number>(0)

  useEffect(() => {
    setAge(calculateAge('2010-10-24'))
  }, [])

  return (
    <div className="space-y-10">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-green-400"
      >
        About Me 💚
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl mx-auto text-green-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hey, I’m <span className="font-semibold text-green-200">Istiyaq Khan Razin</span>, a {age}-year-old full-stack developer & digital designer from <span className="underline underline-offset-4 decoration-green-400">Bangladesh 🇧🇩</span>. I started coding and designing super young — it’s been my obsession since day one.
        <br /><br />
        I’m building premium-level apps, creating fire poster designs, and helping brands + creators show off online. This site is my space to showcase everything I do — from Python projects to sick After Effects animations.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
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
        <Skill icon={<FaPython />} name="Python" />
        <Skill icon={<SiNextdotjs />} name="Next.js" />
        <Skill icon={<SiMongodb />} name="MongoDB" />
        <Skill icon={<FaReact />} name="React" />
        <Skill icon={<FaNodeJs />} name="Node.js" />
        <Skill icon={<FaFigma />} name="Figma" />
        <Skill icon={<SiAdobeillustrator />} name="Illustrator" />
        <Skill icon={<SiAdobeaftereffects />} name="After Effects" />
        {/* Add more skills below */}
      </motion.div>
    </div>
  )
}

function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <motion.div
      className="bg-[#122d18] border border-green-800 rounded-xl p-4 flex flex-col items-center justify-center text-green-200 hover:shadow-md hover:shadow-green-500/30 transition-all"
      whileHover={{ scale: 1.05 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm">{name}</p>
    </motion.div>
  )
}
