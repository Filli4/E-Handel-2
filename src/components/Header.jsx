import React from "react";

const Header = () => {
  return (
    <header className="text-center p-4 bg-gray-200">
      <nav>
        <a href="/" className="text-blue-500 hover:underline mx-2">
          Hem
        </a>
        <a href="/about" className="text-blue-500 hover:underline mx-2">
          Om oss
        </a>
        <a href="/contact" className="text-blue-500 hover:underline mx-2">
          Kontakta oss
        </a>
      </nav>
    </header>
  );
};

export default Header;
