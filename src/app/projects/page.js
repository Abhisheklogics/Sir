'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const project = () => {
  useEffect(()=>{
      AOS.init({
        duration: 800,
       
      })
    },[])
  return (
    <section  className="service py-16 md:py-32  dark:bg-gray-800" id="service">
      <div   data-aos="fade-right" className="container mx-auto">
        <h1 data-aos="zoom-in-up" className="heading text-3xl md:text-5xl hover:text-blue-500 font-bold text-center  mt-[-100px]">
          <span>My</span> Skills and Expertise
        </h1>
        <div className=" cursor-pointer grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 mt-10">
          <div className="box bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 hover:scale-105">
            <i className="fas fa-paint-brush text-4xl text-blue-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2 hover:text-blue-500 ">Internet of Things</h3>
            <p className="text-gray-600 dark:text-gray-400">
              The Internet of Things (IOT) is a network of Internet-enabled objects, together with web services that interact with these objects. Underlying the Internet of Things are sensor technologies such as RFID, sensors, and smartphones.
            </p>
          </div>

          {/* Repeat this structure for other skills */}
          <div  data-aos="zoom-in-up" className="box bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 hover:scale-105">
            <i className="fas fa-chart-line text-4xl text-green-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2 hover:text-blue-500 ">Swarm Intelligence</h3>
            <p className="text-gray-600 dark:text-gray-400">
            Swarm intelligence is the collective learning and decision-making process of groups of organisms that work together to achieve a goal. It can be observed in nature, such as in flocks of birds or schools of fish, and can also be used in robotics and other applications. 
            </p>
          </div>

          <div  data-aos="zoom-in-up" className="box bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 hover:scale-105">
            <i className="fas fa-cloud text-4xl text-yellow-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2 hover:text-blue-500 ">Cloud Computing</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cloud computing is the delivery of computing as a service rather than a product, whereby shared resources, software, and information are provided to computers and other devices as a utility (like the electricity grid) over a network (typically the Internet).
            </p>
          </div>

          <div  data-aos="zoom-in-left" className="box bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 hover:scale-105">
            <i className="fas fa-brain text-4xl text-red-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2 hover:text-blue-500 ">Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore the latest questions and answers in Machine Learning, and find Machine Learning experts.
            </p>
          </div>

          <div data-aos="zoom-in-left"  className="box bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 hover:scale-105">
            <i className="fas fa-helicopter text-4xl text-purple-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2 hover:text-blue-500 ">Drone Technology</h3>
            <p className="text-gray-600 dark:text-gray-400">
            A drone refers to an aerial vehicle that receives remote commands from a pilot or relies on software for autonomous flight. Many drones display features like cameras for collecting visual data and propellers for stabilizing their flight patterns.
            </p>
          </div>

          <div data-aos="zoom-out-down" className="box bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 hover:scale-105">
            <i className="fas fa-code text-4xl text-pink-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-2 hover:text-blue-500 ">Embedded Programming</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore the latest questions and answers in Embedded Programming, and find Embedded Programming experts.
            </p>
          </div>

          <div data-aos="zoom-out-right" className="box bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 hover:scale-105">
            <i className="fas fa-atom text-4xl text-indigo-500 mb-4"></i> {/* Replace with your icon */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center hover:text-blue-500 ">Particle Swarm Optimization</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore the latest questions and answers in Particle Swarm Optimization, and find Particle Swarm Optimization experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default project;