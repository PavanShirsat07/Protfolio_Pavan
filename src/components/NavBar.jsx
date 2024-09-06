import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className='flex text-white justify-between p-3'>
          {/* Logo Section */}
          <div className='flex align-middle items-center'>
            <span className='text-3xl'>&lt;</span>
            <div className='cursor-pointer text-3xl Dance pl-2 text-orange-400'>
              Pavan
            </div>
            <div className='cursor-pointer text-3xl Dance pl-2'>
              Shirsat&nbsp;
            </div>
            <span className='text-3xl'>/&gt;</span>
          </div>

          {/* Navigation Links */}
          <ul className='flex gap-9 cursor-pointer text-xl pr-4'>
            <li className='hover:font-bold text-orange-400'>
              <Link to="about" smooth duration={1000}>About me</Link>
            </li>
            <li className='hover:font-bold text-white'>
              <Link to="skills" smooth duration={1000}>My skills</Link>
            </li>
            <li className='hover:font-bold'>
              <Link to="projects" smooth duration={1000}>Projects</Link>
            </li>
            <li className='hover:font-bold'>
              <Link to="contact" smooth duration={1000}>Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;