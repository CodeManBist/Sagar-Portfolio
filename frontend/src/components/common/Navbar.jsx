import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-[#0d0d0d] border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
    <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-4 flex items-center justify-between">

    {/* Logo */}
    <p className="text-white font-semibold text-lg cursor-pointer">
      Sagar <span className="text-purple-500">&lt;/&gt;</span>
    </p>

    {/* Links */}
    <ul className="flex items-center gap-8 text-sm text-[#a1a1aa]">
      <li><a className="hover:text-white transition">Home</a></li>
      <li><a className="hover:text-white transition">Work</a></li>
      <li><a className="hover:text-white transition">Services</a></li>
      <li><a className="hover:text-white transition">Contact</a></li>
    </ul>

    {/* CTA */}
    <button className="px-4 py-2 text-sm rounded-[6px] bg-white text-black hover:bg-neutral-200 transition">
      Hire Me
    </button>

    </nav>
    </header>
  );
};

export default Navbar;