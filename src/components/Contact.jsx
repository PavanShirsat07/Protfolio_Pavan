import React from 'react'

const Contact = () => {
    return (
        <>
              <section id="contact" className='bg-zinc-950'>
            <div className='flex justify-center align-middle text-orange-400 text-6xl bg-zinc-950 montserrat-7  positions3 '>
                Contact <span className='text-white'>&nbsp;Me</span>
            </div>

            <div className="flex justify-center items-center  bg-zinc-950 positions3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-10 max-w-5xl w-full">
        {/* Left Side (Contact Info) */}
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-orange-400">Me</span>
          </h1>
          <h2 className="text-xl font-semibold mb-4">Let's Work Together</h2>
          <p className="mb-6">"I'm excited to collaborate on projects that bring your ideas to life. Whether it's building a new website or improving an existing platform, I offer tailored solutions to meet your unique needs. Let's create something great together!
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A1 1 0 0017 5H3a1 1 0 00-.997.884z" />
              <path d="M18 8.118l-8 4-8-4v6.882A1 1 0 003 16h14a1 1 0 001-.998V8.118z" />
            </svg>
            <p>pavanshirsat957@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.293 5.293a1 1 0 011.414 0L7 8.586V7a1 1 0 012 0v4a1 1 0 01-1.707.707L3.707 5.293a1 1 0 00-1.414 1.414l3.586 3.586a1 1 0 01-.293.707H3a1 1 0 000 2h2a1 1 0 01.707-.293L10 17.586a1 1 0 001.414-1.414l-4-4A1 1 0 0010 11V7a1 1 0 00-.707-1.707L5.707 4.293a1 1 0 00-1.414 0l-2 2a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <p>9307689613</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-orange-400 hover:text-white transition duration-300">
              <img src="/instagram.png" width={30} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/pavan-shirsat-9591442a8/" className="text-orange-400 hover:text-white transition duration-300">
            <img src="/linkedin.png" width={30} alt="" />
            </a>
            <a href="#" className="text-orange-400 hover:text-white transition duration-300">
            <img src="/whatsapp.png" width={30} alt="" />
            </a>
            <a href="#" className="text-orange-400 hover:text-white transition duration-300">
            <img src="/facebook.png" width={35} className='pd-2'  alt="" />
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-transparent focus:border-orange-400 focus:outline-none text-gray-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-transparent focus:border-orange-400 focus:outline-none text-gray-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-transparent focus:border-orange-400 focus:outline-none text-gray-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Enter Your Message"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border-2 border-transparent focus:border-orange-400 focus:outline-none text-gray-300 h-32"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-orange-300 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
        </>
    )
}

export default Contact
