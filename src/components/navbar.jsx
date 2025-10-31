import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/harvest_app_icon.png";

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blogs" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Harvest App logo"
            className="w-7 h-7 object-contain"
          />
          <h1 className="text-lg md:text-xl font-bold text-green-800 tracking-tight">
            The Harvest App
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-green-800 font-medium">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <li
                className={`cursor-pointer border-b-2 transition-all duration-300 ${
                  location.pathname === item.path
                    ? "border-green-700 text-green-900 font-semibold"
                    : "border-transparent hover:border-green-600"
                }`}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <a href="#download">
            <button className="py-2 px-6 rounded-lg bg-green-700 text-white hover:bg-green-800 shadow-sm transition-all duration-300">
              Download
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          className="md:hidden text-green-800"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`absolute top-16 w-full bg-green-50 border-t border-green-100 flex flex-col items-center gap-6 py-6 text-green-800 font-medium transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            className={`${
              location.pathname === item.path
                ? "text-green-900 font-semibold"
                : "hover:text-green-700"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <a href="#download" onClick={() => setMobileOpen(false)}>
          <button className="py-2 px-10 rounded-lg bg-green-700 text-white hover:bg-green-800 shadow-sm transition-all">
            Download
          </button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
