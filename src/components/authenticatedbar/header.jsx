import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import '../../components/auth/Login'
import { toast } from 'react-toastify';
import { FcReadingEbook } from "react-icons/fc";
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const SideMenu = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/');
    console.log('Logged out successfully');
    toast.success("Logged out successfully");
  };

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-64 bg-[#D0D8FF] border-8 border-white text-xl font-bold shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
      `}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-500"
      >
        X
      </button>
      <nav className="mt-16 p-4">
        <ul className="space-y-4">
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={handleLogout}>Log Out</li>
        </ul>
      </nav>
    </div>
  );
};


function Navbar() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {

    localStorage.removeItem('userData');
    navigate('/');
    console.log('Logged out successfully')
    // alert("Logged out successfully");
    toast.success("Logged out successfully");

  };

  const font = {
    fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
      fontWeight: { 400: 400, },
    }
  }

  return (
  
    <div style={font} className='nav items-center text-black bg-white fixed top-0 w-full p-4 cursor-pointer z-50'>
        <div className='flex justify-between items-center w-full max-w-7xl mx-auto'>
          <div>
            <ul className='flex gap-1 items-center font-bold'>
              <li>
                <FcReadingEbook className="w-6 h-6 md:w-8 md:h-8" />
              </li>
              <li className='text-sm md:text-base'>PORTFOLIO</li>
            </ul>
          </div>
          <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden md:block">
          <div>
            <ul className='text-xl flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 items-center font-medium  md:text-base'>
            <li className='border-b-2 border-[#778cf8] inline-block text-[#778cf8]'>Projects </li>
            <li onClick={handleLogout} className='mt-1 text-2xl px-2 py-1'> <BiLogOutCircle /></li>
            </ul>
          </div>
        </div>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      </div>
  )
}

export default Navbar
