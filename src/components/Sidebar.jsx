import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import {HiOutlineMenu} from 'react-icons/hi';
import {RiCloseLine} from 'react-icons/ri';

import {logo} from '../assets';
import {links} from '../assets/constants';

const NavLinks = ({handleClick}) => (
  <div className ="mt-6">
      {links.map((item) => (
          <NavLink 
            key={item.name}
            to={item.to} 
            className={({ isActive }) => `flex items-center gap-3 px-4 py-1.5 my-2 rounded-lg transition-all
            ${isActive ? "bg-cyan-500 text-white"
            : "text-gray-400 hover:text-white hover:bg-white/10" }`}
            onClick ={() => handleClick && handleClick()} 
          >
            <item.icon className="w-6 h-6 mr-2"/>
            {item.name}
          </NavLink>
      ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return(
    <>
      <div className="md:flex hidden flex-col w-[200px] 
      py-6 px-4 bg-[#191624]">
          <img src={logo} alt="logo" className = " w-full h-9 object-contain" />
          <NavLinks/>
      </div>

      <div className="fixed md:hidden z-50 top-6
      right-3">
        {mobileMenuOpen ? 
        (<RiCloseLine className="w-6 h-6 text-white mr-2" 
           onClick={() => setMobileMenuOpen(false)}/>) 
        : <HiOutlineMenu size={24} className="text-white mr-2"
           onClick={() => setMobileMenuOpen(true)}/>}
      </div>

      <div className={`fixed top-0 h-screen w-2/3 
          to-[#483d8b] bg-[#383373]
          z-40 p-6 md:hidden smooth-transition
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <img src={logo} alt="logo" className = " w-full h-9 object-contain" />
          <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>  
  );
};

export default Sidebar;
