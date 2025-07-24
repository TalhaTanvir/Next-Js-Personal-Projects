import React from "react";
import { LuNetwork } from "react-icons/lu";

function Footer() {
  return (
    <div className="py-16 bg-gray-200 dark:bg-gray-900">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
        {/* 1st Part */}
        <div className="xl:col-span-2">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="size-10 bg-cyan-800 rounded-full flex items-center justify-center flex-col">
              <LuNetwork className="size-5 text-white" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold ">
              DevHire
            </h1>
          </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam dolor ullam, cupiditate libero nemo est!</p>
        {/* call */}
        <div className="mt-5">
            <h1 className="lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium">Call Us</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold">+921234567890</p>
        </div>
        {/* Address */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Islamabad</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Islamabad Punjab Pakistan</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">example@gmail.com</p>
        </div>
        {/* 2nd Part */}
        <div className="space-y-6">
            <h1 className="text-lg font-bold text-gray-800 dark:test-gray-200">For Candidates</h1>
            <p className="footer__link">Browse Jobs</p>
            <p className="footer__link">Browse Categories</p>
            <p className="footer__link">Candidate Dashboard</p>
            <p className="footer__link">Job Alerts</p>
            <p className="footer__link">My Bookmarks</p>
        </div>
        {/* 3rd Part */}
        <div className="space-y-6">
            <h1 className="text-lg font-bold text-gray-800 dark:test-gray-200">For Employers</h1>
            <p className="footer__link">Browse Candidate</p>
            <p className="footer__link">Employer Dashboard</p>
            <p className="footer__link">Add Job</p>
            <p className="footer__link">Job Packages</p>
        </div>
         {/* 4th Part */}
        <div className="space-y-6">
            <h1 className="text-lg font-bold text-gray-800 dark:test-gray-200">About Us</h1>
            <p className="footer__link">Jobs Page</p>
            <p className="footer__link">Jobs Page Alternative</p>
            <p className="footer__link">Resume Page</p>
            <p className="footer__link">Blog</p>
            <p className="footer__link">Contact</p>
        </div>
         {/* 5th Part */}
        <div className="space-y-6">
            <h1 className="text-lg font-bold text-gray-800 dark:test-gray-200">Helpful Resources</h1>
            <p className="footer__link">SiteMap</p>
            <p className="footer__link">Terms of Use</p>
            <p className="footer__link">Privacy Center</p>
            <p className="footer__link">Security Center</p>
            <p className="footer__link">Accessibility Center</p>
        </div>
      </div>
      <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800">
        <p className="text-gray-500">© 2025 DevHire. All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
