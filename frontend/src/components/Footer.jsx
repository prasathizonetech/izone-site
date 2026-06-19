import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import FacebookIcon from "@/components/icons/FacebookIcon";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about#team" },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/development/web-development" },
    { name: "AI & ML", path: "/development/ai-ml" },
    { name: "Government Tenders", path: "/development/government-tenders" },
    {
      name: "Social Media Marketing",
      path: "/development/social-media-marketing",
    },
    { name: "Content Writing", path: "/development/content-writing" },
    { name: "Graphics Designer", path: "/development/graphics-designer" },
  ],
  resources: [
    { name: "Blog", path: "#" },
    { name: "Case Studies", path: "/development#portfolio" },
    { name: "Documentation", path: "#" },
    { name: "FAQ", path: "#" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/izonegroups/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/izonegroups/",
    label: "Twitter",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/izonegroups/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/izonegroups/",
    label: "Instagram",
  },
];

export function Footer() {
  const openDialer = (event) => {
    event.preventDefault();
    window.location.assign("tel:+919943077284");
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10 px-4 pb-4 pt-5 md:px-6 md:pb-5 md:pt-7">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 text-left sm:grid-cols-2 lg:grid-cols-[minmax(220px,1.45fr)_minmax(120px,0.7fr)_minmax(190px,0.95fr)_minmax(260px,1.2fr)] lg:items-start">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="mb-2.5 flex items-center justify-start gap-2">
              <div className="flex h-8 w-28 items-center justify-start md:h-9 md:w-32">
                <img src="/izone-logo.png" alt="iZone" className="h-full w-full object-contain object-left" />
              </div>
            </Link>
            <p className="mb-2 max-w-xs text-xs leading-relaxed text-muted-foreground text-justify md:text-[0.8125rem]">
              Transforming ideas into exceptional digital experiences. We build
              modern, scalable web solutions that drive business growth.
            </p>
            <div className="flex justify-start gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:h-9 md:w-9"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="text-left text-xs md:text-[0.8125rem] lg:pl-1">
            <h4 className="mb-2 font-display text-sm font-semibold text-foreground">
              Company
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-left text-xs md:text-[0.8125rem]">
            <h4 className="mb-2 font-display text-sm font-semibold text-foreground">
              Services
            </h4>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left sm:col-span-2 lg:col-span-1">
            <h4 className="mb-2 font-display text-sm font-semibold text-foreground">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="grid grid-cols-[16px_minmax(0,1fr)] items-start gap-2 text-left">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="max-w-[280px] text-justify leading-relaxed text-muted-foreground md:text-[0.8125rem]">
                  3rd Floor, Aruvi Arcade Complex, 5th Cross Thillainagar, North
                  Extension Road, Tiruchirapalli, Tamil Nadu-620018.
                </span>
              </li>
              <li className="grid grid-cols-[16px_minmax(0,1fr)] items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-primary" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=innovativezone.tech@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-xs text-muted-foreground transition-colors hover:text-primary md:text-[0.8125rem]"
                >
                  innovativezone.tech@gmail.com
                </a>
              </li>
              <li className="grid grid-cols-[16px_minmax(0,1fr)] items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <a
                  href="tel:+919943077284"
                  onClick={openDialer}
                  className="text-xs text-muted-foreground transition-colors hover:text-primary md:text-[0.8125rem]"
                >
                  +91-9943077284
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 flex flex-col items-start justify-between gap-1.5 border-t border-border pt-2 text-left md:mt-5 md:flex-row">
          <p className="text-xs leading-4 text-muted-foreground">
            &copy; {new Date().getFullYear()} Izone Technologies. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
            <Link
              to="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
