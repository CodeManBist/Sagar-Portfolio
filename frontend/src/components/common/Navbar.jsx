import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/project" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-purple to-primary-teal flex items-center justify-center text-white font-bold text-lg">
              SC
            </div>
            <span className="hidden sm:inline font-semibold text-neutral-900">
              Sagar Clarity
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-neutral-600 text-sm font-medium hover:text-primary-purple transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-teal group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Let&apos;s Work Together
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-neutral-700 hover:text-primary-purple transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Sidebar */}
          {open && (
            <div className="fixed top-16 md:top-20 left-0 right-0 bg-white border-b border-neutral-100 md:hidden animate-slide-in-down">
              <nav className="flex flex-col px-6 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="py-3 text-neutral-600 text-sm font-medium hover:text-primary-purple transition-colors border-b border-neutral-100 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to="/contact" onClick={() => setOpen(false)} className="w-full">
                    <Button variant="primary" size="md" className="w-full">
                      Let&apos;s Work Together
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
