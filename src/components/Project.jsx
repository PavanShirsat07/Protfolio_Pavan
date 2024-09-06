import React from 'react';

const Project = () => {
    return (
        <>
            <section id="projects" className="mt-20 lg:mt-32  positions bg-zinc-950">
                {/* Section Title */}
                <div className='flex justify-center text-white text-3xl sm:text-5xl lg:text-6xl montserrat-7 mb-10'>
                    My <span className='text-orange-400'>&nbsp;Projects</span>
                </div>

                {/* Project Cards */}
                <div className='flex justify-center mt-10 cursor-pointer section'>
                    <div className='flex flex-col lg:flex-row justify-center gap-10 px-4'>
                        {/* Card 1 */}
                        <div className='Card relative group w-full lg:w-[450px] h-72 overflow-hidden rounded-lg text-white shadow-lg shadow-gray-600'>
                            <img src="/E-commerse.jpg" className="w-full h-full object-cover transition duration-500 group-hover:opacity-50" alt="E-Commerce" />
                            <div className="absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-40 group-hover:translate-y-0 translate-y-full transition duration-500"></div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 text-center transition duration-500 group-hover:opacity-100 z-10'>
                                <h1 className='text-lg sm:text-xl font-bold'>E-Commerce</h1>
                                <p className='font-bold text-sm sm:text-base px-2'>
                                    An e-commerce website built with HTML, CSS, and JavaScript for the front end, powered by Node.js and MongoDB for the backend and database.
                                </p>
                                <div>
                                    <a href="/"><img src="/Down.png" alt="" width={50} className='mt-2 cursor-pointer' /></a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className='Card relative group w-full lg:w-[450px] h-72 overflow-hidden rounded-lg text-white shadow-lg shadow-gray-600'>
                            <img src="/lost_and_found.webp" className="w-full h-full object-cover transition duration-500 group-hover:opacity-50" alt="Lost And Found" />
                            <div className="absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-40 group-hover:translate-y-0 translate-y-full transition duration-500"></div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 text-center transition duration-500 group-hover:opacity-100 z-10'>
                                <h1 className='text-lg sm:text-xl font-bold'>Lost And Found</h1>
                                <p className='font-bold text-sm sm:text-base px-2'>
                                    Lost & Found helps connect people with lost or found items in their community. Easily report and find items in one place.
                                </p>
                                <div>
                                    <a href="/"><img src="/Down.png" alt="" width={50} className='mt-2 cursor-pointer' /></a>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className='Card relative group w-full lg:w-[450px] h-72 overflow-hidden rounded-lg text-white shadow-lg shadow-gray-600'>
                            <img src="/get.png" className="w-full h-full object-cover transition duration-500 group-hover:opacity-50" alt="Get Me Funds" />
                            <div className="absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-40 group-hover:translate-y-0 translate-y-full transition duration-500"></div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 text-center transition duration-500 group-hover:opacity-100 z-10'>
                                <h1 className='text-lg sm:text-xl font-bold'>Get Me Funds</h1>
                                <p className='font-bold text-sm sm:text-base px-2'>
                                    A full-stack application using the MERN stack (MongoDB, Express, React, Node.js) for seamless web development.
                                </p>
                                <div>
                                    <a href="/"><img src="/Down.png" alt="" width={50} className='mt-2 cursor-pointer' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className='flex justify-center'>
                    <button className='p-3 w-full lg:w-56 rounded-2xl bg-orange-600 font-bold mt-12 text-center'>
                        My All Projects
                    </button>
                </div>
            </section>
        </>
    );
}

export default Project;
