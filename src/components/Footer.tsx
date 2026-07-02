import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTiktok,
  FaTelegram,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-24 bg-gray-50 py-16 border-t">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center">

          <h2 className="font-heading text-4xl text-primary">
            PlanetCred
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Climate Action. Measured. Rewarded. Scaled.
          </p>

          <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
            Localizing climate education across Africa and building
            trusted systems that verify grassroots climate action.
          </p>

        </div>

        {/* SOCIALS */}

        <div className="flex justify-center gap-8 mt-10 text-3xl text-primary">

          <a
            href="https://www.linkedin.com/company/planetcred-initiative/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/planetcred.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/planetcred"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="X"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.tiktok.com/@planetcred"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href="https://t.me/planetcred"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>

        </div>

        {/* COPYRIGHT */}

        <div className="mt-12 text-center text-gray-500">

          <p>© 2026 PlanetCred Initiative. All rights reserved.</p>

          <p className="mt-2 text-sm">
            Built in Abuja, Nigeria 🇳🇬
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;