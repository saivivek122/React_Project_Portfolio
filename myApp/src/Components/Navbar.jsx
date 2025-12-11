import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// ------------------ NAVBAR WITH DARK MODE + MOBILE ------------------
function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 p-4 shadow-md backdrop-blur-md ${
        dark ? "bg-gray-900/80" : "bg-white/80"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>
          Sai Vivek
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg font-medium items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={
                dark
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {link.label}
            </Link>
          ))}

          {/* Dark mode toggle (with icon) */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-lg border text-sm hover:opacity-80 flex items-center gap-2"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />} {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X size={30} className={dark ? "text-white" : "text-gray-900"} />
          ) : (
            <Menu size={30} className={dark ? "text-white" : "text-gray-900"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden mt-4 p-4 rounded-xl ${
            dark ? "bg-gray-800" : "bg-white"
          } shadow-lg space-y-4 text-lg`}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`${dark ? "text-gray-200" : "text-gray-800"} block`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setDark(!dark)}
            className="w-full px-3 py-2 rounded-lg border text-center"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
export default Navbar