import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-gray-100 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="PlanetCred Logo"
            className="h-12 w-auto"
          />

          <h1 className="font-heading text-2xl text-primary">
            PlanetCred
          </h1>
        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-8 font-body text-sm">

          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-primary transition">
            About
          </Link>

          <Link to="/projects" className="hover:text-primary transition">
            Projects
          </Link>

          <Link to="/gallery" className="hover:text-primary transition">
            Gallery
          </Link>

          <a
            href="https://t.me/planetcred"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-full"
          >
            Join Community
          </a>

        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}

      {open && (

        <div className="md:hidden border-t border-gray-100 bg-background">

          <div className="flex flex-col px-6 py-6 gap-6 font-body">

            <Link
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              to="/projects"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
            >
              Gallery
            </Link>

            <a
              href="https://t.me/planetcred"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-3 rounded-full text-center"
            >
              Join Community
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;