import React from 'react';

const About = () => {
  return (
    <>
      <section id="about" className="mt-10 sm:mt-20 lg:mt-30">
        {/* Section Title */}
        <div className="flex justify-center text-orange-400 text-4xl sm:text-5xl lg:text-6xl font-bold montserrat-7">
          About <span className="text-white">&nbsp;Me</span>
        </div>

        {/* Main Content Container */}
        <div className="text-white mt-5 flex justify-center">
          <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12">
            
            {/* Left Side - About Text */}
            <div className="lg:w-1/2 pr-0 lg:pr-10 pt-5 lg:pt-10 flex justify-center flex-col">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                Full-stack web developer experienced in utilizing technologies like 
                ReactJS, ExpressJS, and <span className="text-blue-400">JavaScript</span> 
                to create efficient and dynamic web applications. Proficient in database 
                management with <span className="text-emerald-400">PostgreSQL</span> and well-versed 
                in <span className="text-yellow-300">Tailwind CSS</span> for sleek UI designs. 
                Additionally skilled in <span className="text-orange-500">Java</span> programming. 
                Committed to delivering high-quality, user-centric solutions while continuously 
                exploring and integrating cutting-edge technologies.
              </p>

              {/* Button */}
              <button className="self-center lg:self-start mt-5 p-3 w-full lg:w-56 rounded-2xl bg-orange-600 font-bold text-white transition duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105">
                More About Me
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/2 flex justify-center items-center mt-5 lg:mt-0">
              <img src="/man.png" className="max-w-full max-h-full object-contain h-64 md:h-80 lg:h-96" alt="Man working on a laptop" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
