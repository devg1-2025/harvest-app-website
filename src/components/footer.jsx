import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Info */}
        <div>
          <h5 className="text-2xl font-bold text-white mb-4">The Harvest App</h5>
          <p className="text-gray-400 leading-relaxed">
            Created to help churches nurture souls and strengthen discipleship.  
            Transform how your ministry tracks, follows up, and grows with care and consistency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Quick Links</h6>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-green-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <a href="#download" className="hover:text-green-400 transition-colors">
                Download
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h6 className="text-lg font-semibold text-white mb-3">Contact</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:tryttechglobal@gmail.com"
                className="hover:text-green-400 transition-colors"
              >
                tryttechglobal@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/2348166528347"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                +234 816 652 8347
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800/50 py-6 mt-6">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">The Harvest App</span>.  
          All rights reserved. Crafted with ❤️ by Tryt Tech.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
