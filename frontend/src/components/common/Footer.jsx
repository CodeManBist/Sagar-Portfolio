import { Badge } from "../ui";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "GitHub", href: "#", icon: "GH" },
    { label: "LinkedIn", href: "#", icon: "LI" },
    { label: "Twitter", href: "#", icon: "TW" },
    { label: "Email", href: "mailto:your@email.com", icon: "✉" },
  ];

  const footerLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Resume", href: "/resume.pdf" },
  ];

  return (
    <footer className="bg-gradient-to-b from-neutral-50 to-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-purple to-primary-teal flex items-center justify-center text-white font-bold">
                SC
              </div>
              <span className="font-semibold text-neutral-900">Sagar Clarity</span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Crafting scalable MERN solutions for modern businesses with focus on user experience and results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-neutral-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-600 text-sm hover:text-primary-purple transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-neutral-900 mb-4">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  title={social.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-primary-purple hover:text-white transition-all duration-200"
                >
                  <span className="text-xs font-semibold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 pt-8">
          
          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-neutral-600 text-xs sm:text-sm">
              © {currentYear} Sagar Clarity. Built with precision and passion.
            </p>
            
            <div className="flex gap-2">
              <Badge color="purple" variant="light" size="sm">
                React
              </Badge>
              <Badge color="teal" variant="light" size="sm">
                MERN
              </Badge>
              <Badge color="amber" variant="light" size="sm">
                Full-Stack
              </Badge>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
