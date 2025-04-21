"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-6">
      <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3 className="font-bold text-xl text-indigo-600">Company Name</h3>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">
            Resources
          </div>
          <a className="my-3 block text-white" href="/#">
            Documentation
          </a>
          <a className="my-3 block text-white" href="/#">
            Tutorials
          </a>
          <a className="my-3 block text-white" href="/#">
            Support <span className="text-teal-600 text-xs p-1">New</span>
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">
            Support
          </div>
          <a className="my-3 block text-white" href="/#">
            Help Center
          </a>
          <a className="my-3 block text-white" href="/#">
            Privacy Policy
          </a>
          <a className="my-3 block text-white" href="/#">
            Conditions
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-indigo-600 font-bold">
            Contact us
          </div>
          <a className="my-3 block text-white" href="/#">
            12 malvin, Floor 4 San Francisco, CM
          </a>
          <a className="my-3 block text-white" href="/#">
            contact@company.com
          </a>
        </div>
      </div>

      <div className="bg-gray-900 pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex"></div>
          <div className="mt-2 text-white">
            &copy; 2025 Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
