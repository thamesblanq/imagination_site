import brain from './img/brain-2.png';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Content = () => {
    const tl = gsap.timeline();
    const s1 = useRef(null);
    const s2 = useRef(null);
    const img = useRef(null);
    const sub = useRef(null);

    useEffect(() => {
        tl.from(s1.current, {
            opacity: 0,
            y: 100,
            ease: "power3.out",
            duration: 1
        });
        tl.from(s2.current, {
            opacity: 0,
            y: 100,
            ease: "power3.out",
            duration: 1
        }, "+=1");
        tl.from(img.current, {
            opacity: 0,
            x: 100,
            ease: "power3.out",
            duration: 1
        }, "+=1");
        tl.from(sub.current, {
            opacity: 0,
            x: -100,
            ease: "power3.out",
            duration: 1
        }, "+=1");
    })

  return (
    <main className="w-full">
        <section className="w-full p-4 min-h-screen flex flex-col justify-center items-center gap-2" ref={s1}>
            <h1 className="text-4xl font-roboto font-bold text-white items-start">First Section</h1>
            <p className="font-poppins font-normal text-white md:w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Dui accumsan sit amet nulla facilisi. Sit amet tellus cras adipiscing. Praesent elementum facilisis leo vel. Quisque non tellus orci ac auctor augue mauris. Sed risus pretium quam vulputate dignissim. Tristique magna sit amet purus gravida quis blandit turpis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
            </p>
        </section>

        <section className="w-full p-4 min-h-screen flex flex-col justify-center items-center gap-2" ref={s2}>
            <h1 className="text-4xl font-roboto font-bold text-white items-start">Second Section</h1>
            <p className="font-poppins font-normal text-white md:w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Dui accumsan sit amet nulla facilisi. Sit amet tellus cras adipiscing. Praesent elementum facilisis leo vel. Quisque non tellus orci ac auctor augue mauris. Sed risus pretium quam vulputate dignissim. Tristique magna sit amet purus gravida quis blandit turpis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
            </p>
        </section>

        <section className="w-full min-h-screen flex gap-2 items-center md:justify-center flex-col md:flex-row">
            <div className="w-1/2 md:h-2/5" ref={img}>
                <img src={brain} alt="brain" className="w-full" title='ai-brain'></img>
            </div>

            <div className='md:w-1/2 p-4' ref={sub}>
                <h1 className="text-white text-4xl font-roboto font-bold">Subheading</h1>
                <p className="font-poppins font-normal text-white md:w-4/5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Dui accumsan sit amet nulla facilisi. Sit amet tellus cras adipiscing. Praesent elementum facilisis leo vel. Quisque non tellus orci ac auctor augue mauris. Sed risus pretium quam vulputate dignissim. Tristique magna sit amet purus gravida quis blandit turpis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
                </p>
            </div>
        </section>


    </main>
  )
}

export default Content