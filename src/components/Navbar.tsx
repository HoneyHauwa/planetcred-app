import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-background border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">

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

        <div className="flex items-center gap-8 font-body text-sm">

          <Link
            to="/"
            className="hover:text-primary transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-primary transition"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-primary transition"
          >
            Projects
          </Link>

          <Link
            to="/gallery"
            className="hover:text-primary transition"
          >
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

      </div>

    </nav>
  );
}

export default Navbar;