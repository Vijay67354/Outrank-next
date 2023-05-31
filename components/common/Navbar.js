import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {


  
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  const closeMenu = () => setClick(false);

  return (

<div className="header header-bg z-50 px-12  2">
<nav className="navbar ">
  <Link href="/" className="logo">
  

    <p className="text-4xl text-white font-bold cursor-pointer">OUTRANK </p>
  </Link>
  <div className="hamburger" onClick={handleClick} >
    {click ? (
      <FaTimes size={30} style={{ color: "#ffffff" }} />
    ) : (
      <FaBars size={30} style={{ color: "#ffffff" }} />
    )}
  </div>
  <ul className={click ? "nav-menu active" : "nav-menu"}>
    
    <li className="nav-item text-white hover:text-[#007bff] group relative">

      WHO WE ARE
     
      <div className=" group-hover:flex group-hover:flex-col absolute bg-secondary text-black duration-500 transition-all max-w-max rounded w-[250px]">
        <div className=" textclass font-semibold px-5 py-3 hover:text-secondary text-white max-w-max hover:bg-[#007bff] m-2 rounded"><Link href='/about' className="textclass">CAREERS</Link></div>
      
      </div>
    </li>
   
    <li className= "group relative nav-item hover:text-[#007bff] group dropdown  px-4 text-white cursor-pointer font-bold  tracking-wide">
      <Link href="/whatwedo " >
      WHAT WE DO
      </Link>
      <div className="hidden group-hover:flex group-hover:flex-col absolute bg-secondary text-black duration-500 transition-all max-w-max rounded w-[250px]">
        <div className=" textclass font-semibold px-5 py-3 hover:text-secondary text-white max-w-max hover:bg-[#007bff] m-2 rounded"><Link href='/virtualcenter' className="textclass">GENERATE MORE TRAFFIC</Link></div>
        <div className=" textclass font-semibold px-5 py-3 max-w-max hover:text-secondary text-white hover:bg-[#007bff]  m-2 rounded"><Link href='/managementconsultancy' className="textclass">GENERATE MORE TRAFFIC</Link></div>
        <div className=" textclass font-semibold px-5 py-3 max-w-max hover:text-secondary text-white hover:bg-[#007bff]  m-2 rounded"><Link href='/recruitmentsolution' className="textclass">GENERATE MORE TRAFFIC</Link> </div>
        <div className=" textclass font-semibold px-5 py-3 max-w-max hover:text-secondary text-white hover:bg-[#007bff]  m-2 rounded"><Link href='/retailrequirement' className="textclass">DELIGHT MORE CUSTOMERS</Link></div>
        
      </div>
    </li>

    <li className= "nav-item hover:text-[#007bff] text-white">
      <Link href="/career" onClick={closeMenu}>
      CASE STUDIES
      </Link>
    
    </li>

  

    <li className= "group relative nav-item hover:text-[#007bff] group dropdown  px-4 text-white cursor-pointer font-bold  tracking-wide">
   
      INSIGHTS
      
      <ul className="hidden group-hover:flex group-hover:flex-col absolute bg-secondary text-black duration-500 transition-all max-w-max rounded w-[250px]">
        <li className="group  textclass font-semibold px-5 py-3 hover:text-secondary text-white max-w-max hover:bg-[#007bff] m-2 rounded">Blog
        <ul className="hidden">
          gagan
        </ul>
        

        </li>
        
      </ul>
    </li>
    
   
    
    <li className="nav-item hover:text-[#007bff] text-white" >
      <Link
        href="/contact"
        onClick={closeMenu}
        className="link-color"
      >
        CONTACT
      </Link>
    </li>
    <li className="nav-item hover:text-[#007bff] text-white" >
      <Link
        href="/seo"
        onClick={closeMenu}
        className="link-color"
      >
        SEO
      </Link>
    </li>
    
    <li className="lg:pl-8"><button type='button' className='border text-md px-8 py-2 rounded-md hover:scale-105 duration-500 text-white transition-all hover:bg-[#eb305c]  font-medium mt-2' style={{boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.25'}}>GET PROPOSAL</button></li>
  </ul>
</nav>
    </div> 

  );
};

export default Navbar;









































