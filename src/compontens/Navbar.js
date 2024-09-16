import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-100   border-b border-gray-500 w-[98%] mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="hidden sm:flex sm:items-center sm:ml-6">
                <div className="flex space-x-8 ">
                  <Link
                    to="/dashboard"
                    className="text-gray-900 px-3 py-2 text-lg  font-medium "
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/customers"
                    className="text-gray-900 px-3 py-2 text-lg font-medium "
                  >
                    Customers
                  </Link>{" "}
                  <Link
                    to="/vendor"
                    className="text-gray-900 px-3 py-2 text-lg font-medium "
                  >
                    Vendors
                  </Link>{" "}
                  <Link
                    to="/items"
                    className="text-gray-900 px-3 py-2 text-lg font-medium "
                  >
                    Items
                  </Link>
                  <Link
                    to="/bankaccount"
                    className="text-gray-900 px-3 py-2 text-lg font-medium "
                  >
                    Bank Account
                  </Link>
                  <Link
                    to="/charts"
                    className="text-gray-900 px-3 py-2 text-lg font-medium "
                  >
                    Charts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
