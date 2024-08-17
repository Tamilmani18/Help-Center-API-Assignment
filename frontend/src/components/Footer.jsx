import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold">Abstract</h3>
          <ul>
            <li>
              <a href="#">Branches</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Release Notes</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Community</h3>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
            <li>
              <a href="#">Podcast</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>
          <h3 className="font-semibold mt-4">Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:info@abstract.com">info@abstract.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
