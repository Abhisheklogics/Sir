import Image from 'next/image';
import Image1 from '../../public/as.jpg';

export default function Hero() {
  return (
    <section className="about  md:py-32" id="about"> {/* Added py-16 for padding, adjust as needed */}
      <div className="container mx-auto"> {/* Added container for centering */}
        <div className="flex flex-wrap gap-16 md:gap-24"> {/* Flexbox for layout, gap for spacing */}
          <div className="w-full md:w-1/2  absolute  ml-[400px] mt-32"> {/* Image container, relative for positioning */}
            <Image
              src={Image1}
              alt="about"
              width={300} // Adjust as needed
              height={200} // Adjust as needed
              objectFit="cover"
              className="rounded-lg shadow-lg absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4" // Tailwind classes for styling and positioning
            />
          </div>
          <div className="w-full md:w-1/2 mt-[-100px] ml-[300px]"> {/* Text container, padding on larger screens */}
            <div className="prose lg:prose-xl"> {/* Added prose class for better typography */}
              <p className="text-white dark:text-gray-400"> {/* Text color based on theme */}
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