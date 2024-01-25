import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white p-4 mt-8 md:mt-16">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/yash2324"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-8 w-8"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />
        </a>

        <a
          href="https://linkedin.com/in/yash-gupta-012769206/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-8 w-8"
            src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
            alt="LinkedIn"
          />
        </a>

        <a
          href="https://twitter.com/yashgupta023"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-8 w-8"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png"
            alt="Twitter"
          />
        </a>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <ul className="list-none flex flex-col md:flex-row items-center">
          <li className="mt-3 p-1 md:mt-2 sm:mt-0 md:mr-5">
            <Link
              to="/aboutus"
              className="text-center rounded-md mb-2 bg-black  font-black text-white"
            >
              About Us
            </Link>
          </li>
          <li className="mt-3 p-1 md:mt-2 sm:mt-0">
            <Link
              to="/contact"
              className="text-center rounded-md mb-2 bg-black  font-black text-white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-center mt-4">
        © 2024{" "}
        <a
          href="https://linkedin.com/in/yash-gupta-012769206/"
          className="text-white hover:text-gray-400"
        >
          Yash Gupta
        </a>
      </p>
    </div>
  );
};

export default Footer;
