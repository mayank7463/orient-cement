import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#eee]  h-20 w-full flex  justify-between items-center px-10 text-xs">
      <div className="">
        <a href="https://iocl.com/pages/sitemap" className="no-underline mr-4">Privacy Policy </a>
        <a href="#data-privacy-policy" className="no-underline mr-4">Terms of Use</a>
        <a href="#hyperlinking-policy" className="no-underline">Site Map</a>
      </div>
      <div className="">
        <span>All rights reserved &copy;2024 CK Birla Group&nbsp;</span>
        <i className="fa-brands fa-github fa-beat" style={{ color: '#32e10e' }}></i>
        &nbsp;
      </div>
      
    </footer>
  );
};

export default Footer;
