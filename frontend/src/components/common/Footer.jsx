import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo */}
          <div>
            <p className="text-white font-semibold text-lg cursor-pointer">
              Sagar <span className="text-purple-500">&lt;/&gt;</span>
            </p>
            <p className="text-[#71717a] text-sm mt-3 max-w-xs">
              Full-stack developer building clean and scalable web apps.
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="text-white mb-3 text-sm">Social</p>
            <div className="flex gap-5 text-[#a1a1aa] text-lg">

              <a href="#" className="hover:text-white transition">
                <FaGithub />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaLinkedin />
              </a>

              <a href="#" className="hover:text-white transition">
                <FaTwitter />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-[#71717a] flex justify-between">
          <p>© {new Date().getFullYear()} Sagar</p>
          <p>Designed & developed by Sagar using React & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;