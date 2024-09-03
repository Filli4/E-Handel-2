import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-200">
      <div className="mb-2">
        <a href="/about" className="text-blue-500 hover:underline mx-2">
          Om oss
        </a>
        <a href="/contact" className="text-blue-500 hover:underline mx-2">
          Kontakta oss
        </a>
      </div>
    </footer>
  );
};

export default Footer;
