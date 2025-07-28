'use client'
import './globals.css'
import { useEffect, useState } from 'react'
import TypingTitle from '@/components/TypingTitle'
import AgeCalculator from '@/components/AgeCalculator'

export default function HomePage() {
  const birthDate = new Date(2010, 9, 24)

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 text-center px-6 py-12 bg-gradient-to-b from-green-900 via-green-800 to-green-950">
      <TypingTitle
        texts={[
          "Hey, I’m Istiyaq Khan Razin.",
          "A Programmer | Designer | Creator."
        ]}
        loop={true}
        speed={100}
        pause={2000}
        className="text-3xl md:text-4xl font-extrabold text-green-400 drop-shadow-lg"
      />

      <div className="text-green-300 text-xl md:text-2xl font-semibold tracking-wide drop-shadow-md">
        I am <AgeCalculator birthDate={birthDate} /> years old.
      </div>

      <p className="max-w-xl text-green-200/90 font-medium leading-relaxed">
        Welcome to my portfolio! I’m a 15-year-old full-stack developer and digital designer from Bangladesh. Check out my projects, designs, and digital shop below.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <a
          href="#projects"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          View Projects
        </a>
        <a
          href="#designs"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          See Designs
        </a>
        <a
          href="#shop"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Shop Products
        </a>
        <a
          href="https://www.youtube.com/@IMIstiyaqMotion"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-green-400 text-green-400 font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-green-400 hover:text-green-900 transform hover:-translate-y-1"
        >
          YouTube Channel
        </a>
      </div>
    </section>
  )
}
