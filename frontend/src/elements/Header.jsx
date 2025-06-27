import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 w-full">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MIDAS</h1>
              <p className="text-xs text-gray-500 -mt-1">HEALTH SERVICES</p>
            </div>
          </div>

          <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-orange-400"></div>
              <div className="w-2 h-2 bg-blue-400"></div>
              <div className="w-2 h-2 bg-purple-400"></div>
              <div className="w-2 h-2 border border-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-3xl mx-4 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search for modules, sub-modules, settings, etc. (ctrl+e)"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Right: User Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <span className="text-gray-800 text-sm font-medium whitespace-nowrap">Nobel Medical College</span>
          </div>

          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200">
            <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">SA</span>
            </div>
            <span className="text-gray-800 text-sm font-medium">superadmin</span>
          </div>

          <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600">
            <Bell className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
