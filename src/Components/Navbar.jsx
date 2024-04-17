import React, {useState} from 'react';
import { acmLogo, devday } from '../assets';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
<nav>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={devday} alt="Flowbite Logo" className='w-24 h-24'/>
    <button onClick={toggleNavbar} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class={`${!isOpen ? "hidden " : " "} bg-transparent w-full md:block md:w-auto`} id="navbar-default">
      <ul class="font-Gotham text-lg flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
        <li>
          <Link to="/">
          <div class="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 hover:text-white" >Home</div>
          </Link>
        </li>
        <li>
        <Link to="/about">
          <div class="block py-2 px-3 text-black rounded  md:border-0 md:p-0 hover:text-white ">About Us</div>
          </Link>
        </li>
        <li>
          <Link to="/register">
          <a href="" class="block py-2 px-3 text-black rounded md:border-0 md:p-0 hover:text-white">Register</a>
          </Link>
        </li>
        <li>
        <a href="https://fypxtreme.acmdevday.com" class="block py-2 px-3 text-black rounded md:border-0 md:p-0 hover:text-white">FYP Xtreme</a>
        </li>
        <li>
        <a href="https://chatbot.acmdevday.com" target="_blank" class="block py-2 px-3 text-black rounded md:border-0 md:p-0 hover:text-white">Chatbot</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    );
};

export default Navbar;
      
