import { NavLink} from 'react-router-dom';

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

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  
  
  return(
    <>
      <div className="md:flex hidden flex-col w-[200px] 
      py-6 px-4 bg-[#191624] ">
          <img src={logo} alt="logo" className = " w-full h-9 object-contain" />
          <NavLinks/>
      </div>
      {/* sliding menu */}
      <div className={`fixed top-0 h-screen w-2/3 
          bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg
          z-50 p-6 md:hidden smooth-transition
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <img src={logo} alt="logo" className = " w-full h-9 object-contain" />
          <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>  
  );
};

export default Sidebar;
