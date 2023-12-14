import logo from "../assets/logo3.jpg"
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [active, setActive] = useState(false);

  // const navItems = (
  //   <>
  //     <li><Link className="text-white text-xl " to="home" smooth={true} duration={500}>Home</Link></li>
  //     <li><Link className="text-white text-xl " to="about" smooth={true} duration={500}>About</Link></li>
  //     <li><Link className="text-white text-xl " to="contact" smooth={true} duration={500}   spy={true}
  //         activeClass="text-red-500">Contact</Link></li>
  //   </>
  // )

  const navItems = (
    <>
     
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          Projetcts
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          className={active ? "text-amber-500 text-xl" : "text-white text-xl "}
          onClick={() => setActive(!active)}
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-emerald-400">
      <div className="navbar fixed mx-auto max-w-[1349px] md:pt-5   md:-mt-[20px]  bg-black">
        <div className="navbar-start pl-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
         <div className="flex gap-2">
          <img className="w-[50px] h-[50px] rounded-full" src={logo} alt="" />
          <a className=" text-3xl font-bold text-white ">Md Mehedi<span className="text-yellow-500" > Hasan</span></a>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;