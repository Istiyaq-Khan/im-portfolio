'use client';
import { useEffect, useState } from 'react';

const titles = [
  'A Programmer',
  'A Designer',
  'A Creator'
];

export default function TypingTitle() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[index];
    let i = 0;
    const interval = setInterval(() => {
      setText(currentTitle.slice(0, i));
      i++;
      if (i > currentTitle.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTyping(false);
          setTimeout(() => {
            setTyping(true);
            setIndex((index + 1) % titles.length);
          }, 1000);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, typing]);

  return (
    <h2 className="text-xl md:text-3xl font-semibold text-green-600">Hey, I'm Istiyaq Khan Razin. {text}<span className="animate-pulse">|</span></h2>
  );
}
