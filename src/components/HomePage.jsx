import React from 'react';
import Navbar from './NavBar';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section id="about" className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-4xl">About Me</h1>
      </section>

      {/* Skills Section */}
      <section id="skills" className="h-screen bg-gray-700 text-white flex items-center justify-center">
        <h1 className="text-4xl">My Skills</h1>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-screen bg-gray-600 text-white flex items-center justify-center">
        <h1 className="text-4xl">Projects</h1>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen bg-gray-500 text-white flex items-center justify-center">
        <h1 className="text-4xl">Contact Me</h1>
      </section>
    </div>
  );
}

export default HomePage;
