import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';


const Header = () => {
  const tl = gsap.timeline();
  const header = useRef(null);

  useEffect(() => {
    tl.from(header.current, {
      y: 130,
      opacity: 0,
      ease: 'power2.out',
      duration: 4
    });
  })


  return (
    <header className="w-full min-h-screen flex items-center flex-col justify-center gap-4 p-4" ref={header}>
        <h1 className="text-4xl md:text-7xl font-poppins font-bold text-white">Development Reimagined</h1>
        <p className="text-white font-rem text-sm md:text-xl">We bring to you fast servers and application runtime out of the box.</p>
    </header>
  )
}

export default Header