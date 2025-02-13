'use client'

import Image from 'next/image';
import Image1 from '../../public/as.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Hero() {
  useEffect(()=>{
    AOS.init({
      duration: 800,
     
    })
  },[])
  return (
    <section  className="  md:py-32" > 
      <div className=" mx-auto"> 
        <div className="flex flex-wrap gap-16 md:gap-24"> 
          <div data-aos="fade-right" className="w-full md:w-1/2 md:h-[400px] absolute  ml-[500px] mt-32"> 
            <Image
              src={Image1}
              alt="about"
              width={500} 
              height={100}
             
              className="rounded-lg shadow-lg absolute top-10 left-20 transform -translate-x-1/4 -translate-y-1/4" // Tailwind classes for styling and positioning
            />
          </div>
          <div className="w-full md:w-1/2 mt-[-100px] ml-[300px]">
            <div className="prose lg:prose-xl"> 
              <p data-aos="fade-left" className="dark:text-gray-400  ml-[130px] text-justify"> 
                The process of finding optimal values for the specific parameters of a given system to fulfill all design requirements while considering the lowest possible cost is referred to as an optimization. Optimization problems can be found in all fields of science.

                Conventional optimization algorithms Deterministic algorithms have some limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}