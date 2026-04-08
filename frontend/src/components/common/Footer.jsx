const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 md:px-12 lg:px-20">
      
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-[16px] font-bold tracking-tight text-slate-900">
            Sagar Clarity
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            © 2024 Sagar Clarity. Built with precision.
          </p>
        </div>

        {/* Right Links */}
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="transition hover:text-indigo-600">
            GITHUB
          </a>
          <a href="#" className="transition hover:text-indigo-600">
            LINKEDIN
          </a>
          <a href="mailto:your@email.com" className="transition hover:text-indigo-600">
            EMAIL
          </a>
          <a href="/resume.pdf" className="transition hover:text-indigo-600">
            RESUME
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;