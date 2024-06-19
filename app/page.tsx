'use client'


import Image from "next/image";
import Hero from "./components/hero";
import { skills } from "@/data";
import Link from "next/link";
import { useInView, animated, useSpring } from "@react-spring/web";


export default function Home() {
  
   const [styleRef, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-20% 0%',
    }
  )

  const [styleProp, spring] = useInView( () => ({
    from: {
      opacity: 0,
      x: 200,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  }),
  {
    rootMargin: '-20% 20%',
  })
  return (
    <main className="w-full h-auto min-h-screen overflow-x-hidden">
          <Hero />


        <animated.section ref={styleRef} style={springs} className="w-full py-8 h-[280px] flex items-center justify-center">
              <div className="flex flex-1 md:flex-row flex-col-reverse items-center gap-6 md:gap-2 lg:gap-3 justify-around">
                  <div className="flex gap-4 items-center">
                        <Image 
                          src={'/languages.svg'}
                          width={1000}
                          height={1000}
                          className="w-[280px] md:w-[350px] h-auto"
                          alt="Programming languages"
                        />
                  </div>
                  
                  <div className="flex-1 px-6 md:px-0 max-w-[650px]">
                     <p className="text-pretty text-center md:text-left text-sm lg:text-lg">I&apos;m a Self-learned Web developer and UI designer studying at University of Caloocan City. I&apos;m incoming 4th year College student who likes to learn about Web Development. All of my projects were start from scratch, 
                      designing and converting them into a Full-Stack applications.</p>
                  </div>
              </div>
        </animated.section>


        {/**PROGRAMMING SKILLS */}
        <animated.div ref={styleProp} style={spring} className="w-full mt-[75px] py-8 h-auto flex flex-col items-center justify-center ">
             <h1 className="text-[25px] md:text-[30px] text-center">Programming Skills</h1>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-6 md:px-0 md:w-1/2 mt-[30px] md:mt-[70px] grid-rows-2 items-center">
                {skills.map((item) => (
                    <div className="flex items-center gap-4 " key={item.id}>
                        <Image 
                          src={item.image}
                          alt="programming languages"
                          width={1000}
                          height={1000}
                          className="object-cover size-[65px]"
                          loading="lazy"
                          quality={100}
                        />
                        <progress value={item.ratio} max={100} className="w-[250px] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400"/>
                    </div>
                ))}

             </div>
        </animated.div>

        {/**FOOTER */}
        <footer className="bg-[#95a895] mt-[120px] text-black w-full p-8 md:p-12">
              <div className="flex flex-col sm:flex-row gap-8 sm:justify-around w-full items-center">
                  <h1 className="text-xl md:text-[28px] font-medium text-[#171a17]">Contact me on my socials</h1>

                  {/**SOCIALS */}
                  <div className="flex gap-4 flex-row items-center">
                     <Link href={'https://facebook.com/dreyy23'} target="_blank">
                      <Image 
                       alt="facebook icon"
                       width={500}
                       height={500}
                       src={'/facebook-color.svg'}
                       color="#ffff"
                       loading="lazy"
                       className="text-white size-[30px]"
                     />
                      </Link>

                    <Link href={'https://github.com/kenta23'} target="_blank">
                    <Image 
                       alt="github icon"
                       width={500}
                       height={500}
                       src={'/github-color.svg'}
                       loading="lazy"
                       className="text-white size-[30px]"
                     />
                    </Link>
                     
                     <Link href={'https://www.linkedin.com/in/rmramos23/'} target="_blank">
                     <Image 
                       alt="linkedin icon"
                       width={500}
                       height={500}
                       src={'/linkedin-color.svg'}
                       loading="lazy"
                       className="text-white size-[30px]"
                     />
                     </Link>
                     
                  </div>
              </div>
        </footer>
    </main>
  );
}
