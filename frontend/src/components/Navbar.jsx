import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[4.5rem] flex items-center justify-between px-6 md:px-8 relative bg-[#FDFEFF]">

      {/* Logo */}
      <h1 className="text-[18px] font-semibold text-[#0F172A] z-50">
        <Link to="/">Sagar Clarity</Link>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center text-[15px] text-[#475569]">
          
          {["Home", "Work", "Services", "Contact"].map((item, i) => {
            const paths = ["/", "/work", "/services", "/contact"];
            return (
              <li key={item}>
                <Link
                  to={paths[i]}
                  className="relative pl-8 hover:text-[#4F46E5] transition-colors duration-200
                  after:content-[''] after:absolute after:left-8 after:bottom-[-4px]
                  after:h-[2px] after:w-0 after:bg-[#4F46E5]
                  after:transition-all after:duration-300
                  hover:after:w-[calc(100%-2rem)]"
                >
                  {item}
                </Link>
              </li>
            );
          })}

        </ul>
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Link to="/contact">
          <button className="bg-[#493EE5] text-white px-[24px] py-[8px] rounded-md text-sm font-medium hover:bg-indigo-700 transition">
            Hire Me
          </button>
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden z-50"
        onClick={() => setOpen(!open)}
      >
        <div className="w-6 h-[2px] bg-black mb-1"></div>
        <div className="w-6 h-[2px] bg-black mb-1"></div>
        <div className="w-6 h-[2px] bg-black"></div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[4.5rem] left-0 w-full bg-white shadow-md transition-all duration-300 ${
          open ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center py-6 text-[#475569]">
          
          <li className="py-3">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li className="py-3">
            <Link to="/work" onClick={() => setOpen(false)}>Work</Link>
          </li>
          <li className="py-3">
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          </li>
          <li className="py-3">
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>

          <li className="mt-4">
            <Link to="/contact" onClick={() => setOpen(false)}>
              <button className="bg-[#493EE5] text-white px-6 py-2 rounded-md text-sm">
                Hire Me
              </button>
            </Link>
          </li>

        </ul>
      </div>

    </header>
  );
};

export default Navbar;