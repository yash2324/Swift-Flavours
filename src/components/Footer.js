import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white p-4 mt-16">
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
      <div>
        <ul className="flex justify-center">
          <li className="bt2 mx-5 mt-7 px-2 py-1 w-32 text-center rounded-md mb-2 bg-gradient-to-r from-amber-500 to-pink-500  font-black text-slate-800">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="bt1 mx-5 mt-7 px-2 py-1 w-32 text-center rounded-md mb-2 bg-gradient-to-r from-amber-500 to-pink-500  font-black text-slate-800 ">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <p className="text-center mt-4">© 2024 Yash Gupta</p>
    </div>
  );
};

export default Footer;
