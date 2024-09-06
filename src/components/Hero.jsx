import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-scroll';

function Hero() {
  const [text] = useTypewriter({
    words: [' Developer', ' Designer', ' FrontEnd Developer'],
    loop: true,  // Set to true for infinite loop
    delaySpeed: 2000, // Optional: delay between words
  });
  return (
    <>
      <div className='flex flex-col lg:flex-row h-full lg:w-full lg:ml-10 relative z-10 '>
        <div className='container1 w-full lg:w-1/2 flex lg:h-96 justify-center lg:justify-start'>
          <div className='mt-20 p-4 flex flex-col gap-6 items-center lg:items-start'>
            <div className='flex flex-col gap-1 text-center lg:text-left'>
              <span className=' text-4xl text-white montserrat-7'>Heyllo, It's Me</span>
              <span className=' text-6xl text-white montserrat-7'>Pavan Shirsat👋</span>
              <span className='text-4xl text-white montserrat-7'>
                And I'm a
                <span className='text-4xl text-orange-400 montserrat-7'>{text}<Cursor /></span>
              </span>
            </div>
            <p className='text-3xl mt-2 text-gray-300 text-center lg:text-left'>
              A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Flutter / Reactjs / Nodejs / Django and some other cool libraries and frameworks.
            </p>
            <div className='text-white mt-3 flex gap-10 flex-col lg:flex-row items-center lg:items-start'>
              <button className='p-3 w-full lg:w-56 rounded-2xl bg-orange-600 font-bold'><Link to="contact" smooth duration={1000}>Comtact Me</Link>
              </button>
              <button className='p-3 w-full lg:w-56 rounded-2xl bg-orange-600 font-bold' > <a
                href='/resume.pdf'     // Path to the PDF in the public folder
                target='_blank'         // Opens in a new tab
                rel='noopener noreferrer'

              >
                See My Resume
              </a></button>
            </div>
            <div className='flex gap-5 mt-3'>
              <div><img src="/github.png" width={40} alt="GitHub" /></div>
              <div><img src="/linkedin.png" width={40} alt="LinkedIn" /></div>
              <div><img src="/twitter.png" width={40} alt="Twitter" /></div>
              <div><img src="/email.png" width={45} alt="Email" /></div>
              <div><img src="/whatsapp.png" width={40} alt="WhatsApp" /></div>
              <div><img src="/instagram.png" width={40} alt="Instagram" /></div>
            </div>
          </div>
        </div>
        <div className='container2 w-full lg:w-1/2 mt-6 flex justify-center items-center'>
          <div className='relative'>
            <div className="absolute inset-0 bg-blue-700 rounded-full opacity-90 blur-xl"></div>
            <img
              src="/Picture.jpg"
              className='relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full object-cover hover:border-spacing-7 border-gray-700'
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

