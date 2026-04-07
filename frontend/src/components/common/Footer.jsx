const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] px-6 md:px-12 lg:px-20 py-10">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-[16px] font-semibold text-[#001C37]">
            Sagar Clarity
          </h3>
          <p className="text-xs text-[#777587] mt-1">
            © 2024 Sagar Clarity. Built with precision.
          </p>
        </div>

        {/* Right Links */}
        <div className="flex gap-6 text-sm text-[#64748B]">
          <a href="#" className="hover:text-[#4F46E5] transition">
            GITHUB
          </a>
          <a href="#" className="hover:text-[#4F46E5] transition">
            LINKEDIN
          </a>
          <a href="mailto:your@email.com" className="hover:text-[#4F46E5] transition">
            EMAIL
          </a>
          <a href="/resume.pdf" className="hover:text-[#4F46E5] transition">
            RESUME
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;