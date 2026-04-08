import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "Project", "Services", "Contact"];
  const paths = ["/", "/project", "/services", "/contact"];

  return (
    <header className="sticky top-0 z-50 flex h-18 items-center justify-between border-b border-slate-200/70 bg-white/90 px-6 md:px-8 backdrop-blur-md">

      {/* Logo */}
      <h1 className="z-50 text-[18px] font-bold tracking-tight text-slate-900">
        <Link to="/">Sagar Clarity</Link>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center text-[15px] text-slate-600">
          {navItems.map((item, i) => (
            <li key={item} className="px-2">
              <Link
                to={paths[i]}
                className="relative inline-block py-1 transition hover:text-indigo-600
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-0.5 after:w-0 after:bg-indigo-600
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
          className="action-button action-button-primary"
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
        className={`fixed top-18 left-0 h-[calc(100vh-4.5rem)] w-[70%] border-r border-slate-200 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-start px-6 py-6 text-[15px] text-slate-600">

          {navItems.map((item, i) => (
            <li key={item} className="w-full py-3">
              <Link
                to={paths[i]}
                onClick={() => setOpen(false)}
                className="relative inline-block transition hover:text-indigo-600
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-0.5 after:w-0 after:bg-indigo-600
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
              className="action-button action-button-primary block w-full text-center"
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