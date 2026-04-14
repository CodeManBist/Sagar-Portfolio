import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  const navClassName = ({ isActive }) =>
    `transition ${isActive ? "text-white" : "text-white/70 hover:text-white"}`;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="w-full h-16 bg-[#0d0d0d] border-b border-white/10 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 h-full flex items-center justify-between">

          {/* Logo */}
          <p className="text-white font-semibold text-lg cursor-pointer">
            Sagar <span className="text-purple-500">&lt;/&gt;</span>
          </p>

          {/* Desktop */}
          <ul className="hidden md:flex gap-8 text-sm cursor-pointer">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink className={navClassName} to={item.to}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="hidden md:block px-4 py-2 text-sm rounded-md bg-white text-black hover:bg-neutral-200 transition cursor-pointer">
            Hire Me
          </button>

          {/* Mobile Button */}
          <div
            className="md:hidden text-white text-xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </div>
        </nav>
      </header>

      {/* ✅ CLEAN OVERLAY */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ✅ CLEAN DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[320px] z-[100]
        bg-[#0d0d0d] border-l border-white/10
        transform transition-transform duration-200
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6">

          {/* Top */}
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <p className="text-white font-semibold text-lg cursor-pointer">
              Sagar <span className="text-purple-500">&lt;/&gt;</span>
            </p>

            <FaTimes
              className="text-white/70 text-xl cursor-pointer hover:text-white"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Links */}
          <ul className="mt-7 space-y-5 text-base cursor-pointer">
            {navLinks.map((item) => (
              <li key={`mobile-${item.to}`}>
                <NavLink
                  className={navClassName}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="mt-auto w-full py-3 rounded-md bg-white text-black hover:bg-neutral-200 transition cursor-pointer">
            Hire Me
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;