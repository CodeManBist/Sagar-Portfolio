import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "Project", "Services", "Contact"];
  const paths = ["/", "/project", "/services", "/contact"];

  return (
    <header className="h-[4.5rem] flex items-center justify-between px-6 md:px-8 sticky top-0 z-50 bg-[#FDFEFF]">

      {/* Logo */}
      <h1 className="text-[18px] font-semibold text-[#0F172A] z-50">
        <Link to="/">Sagar Clarity</Link>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center text-[15px] text-[#475569]">
          {navItems.map((item, i) => (
            <li key={item} className="px-2">
              <Link
                to={paths[i]}
                className="relative inline-block py-1 hover:text-[#4F46E5] transition
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:w-0 after:bg-[#4F46E5]
                after:transition-all after:duration-300 after:ease-in-out
                hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Link
          to="/contact"
          className="bg-[#493EE5] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
        >
          Hire Me
        </Link>
      </div>

      {/* Mobile Icon */}
      <button
        className="md:hidden z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-[4.5rem] left-0 h-[calc(100vh-4.5rem)] w-[70%] bg-[#FDFEFF] shadow-md transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-start px-6 py-6 text-[15px] text-[#475569]">

          {navItems.map((item, i) => (
            <li key={item} className="w-full py-3">
              <Link
                to={paths[i]}
                onClick={() => setOpen(false)}
                className="relative inline-block hover:text-[#4F46E5] transition
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:w-0 after:bg-[#4F46E5]
                after:transition-all after:duration-300 after:ease-in-out
                hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Button */}
          <li className="mt-4 w-full">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block bg-[#493EE5] text-white px-6 py-2 rounded-md text-sm text-center"
            >
              Hire Me
            </Link>
          </li>

        </ul>
      </div>

    </header>
  );
};

export default Navbar;