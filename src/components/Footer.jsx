import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-8 positions4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ml-20">
        
        {/* About Me Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
          <p>
            I'm a passionate developer focused on creating beautiful and functional web applications.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Me Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Me</h2>
          <p>Email: <a href="mailto:kavnish1245@gmail.com" className="hover:text-white">pavanshirsat957@gmail.com</a></p>
          <p>Phone: +91 9307689613</p>
        </div>

        {/* Follow Me Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-white">
              <img src="/instagram.png" width={40} alt="" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
            <img src="/linkedin.png" width={40} alt="" />
            </a>
            <a href="#" className="text-pink-500 hover:text-white">
            <img src="/facebook.png" width={40} alt="" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-500">
        &copy; 2024 Pavan Shirsat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
