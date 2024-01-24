const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 mt-16">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/yash2324"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-6 w-6"
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png"
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
            className="h-6 w-6"
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png"
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
            className="h-6 w-6"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-logo-icon.png"
            alt="Twitter"
          />
        </a>
      </div>

      <p className="text-center mt-4">© 2024 Yash Gupta</p>
    </div>
  );
};

export default Footer;
