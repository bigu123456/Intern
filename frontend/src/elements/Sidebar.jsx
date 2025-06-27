import React, { useState } from 'react';
import {
  Users,
  Settings,
  Cpu,
  Crown,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    userSetup: false,
    setup: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Sidebar */}
      <div
        className={`
          bg-white shadow-lg border-r border-gray-200
          transition-all duration-300 ease-in-out overflow-hidden
          ${sidebarOpen ? 'w-64' : 'w-16'}
          flex-shrink-0 flex flex-col
        `}
      >
        {/* Top: Scrollable menu */}
        <div className="flex-1 py-6 overflow-auto">
          <nav className="px-2 space-y-2">
            {/* User Setup */}
            <div className="w-full">
              <button
                onClick={() => toggleMenu('userSetup')}
                className="w-full flex items-center gap-3 px-3 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Users className="w-5 h-5 text-teal-500" />
                {sidebarOpen && (
                  <>
                    <span className="font-medium">User Setup</span>
                    {openMenus.userSetup ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 ml-auto" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                    )}
                  </>
                )}
              </button>
              {sidebarOpen && openMenus.userSetup && (
                <div className="mt-1 ml-7 space-y-1">
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Role
                  </div>
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    User
                  </div>
                </div>
              )}
            </div>

            {/* Setup */}
            <div className="w-full">
              <button
                onClick={() => toggleMenu('setup')}
                className="w-full flex items-center gap-3 px-3 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Settings className="w-5 h-5 text-teal-500" />
                {sidebarOpen && (
                  <>
                    <span className="font-medium">Setup</span>
                    {openMenus.setup ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 ml-auto" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                    )}
                  </>
                )}
              </button>
              {sidebarOpen && openMenus.setup && (
                <div className="mt-1 ml-7 space-y-1">
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Sub Organization
                  </div>
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Organization
                  </div>
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Department
                  </div>
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Position
                  </div>
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Salutation
                  </div>
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Designation
                  </div>
                  <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                    Employee
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Bottom: Machine Interfacing + Footer */}
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-100">
            {/* Machine Interfacing */}
            <div className="mb-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Cpu className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-indigo-900 mb-1">
                    Machine Interfacing
                  </h3>
                  <p className="text-sm text-indigo-700 mb-4 leading-relaxed">
                    Automate your lab with machine interfacing
                  </p>
                  <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Powered By Footer */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Crown className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-600">Powered By</span>
              </div>
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MIDAS
                </div>
                <div className="text-xs text-gray-500 font-medium">HEALTH SERVICES</div>
              </div>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          className="fixed top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1 shadow-md hover:bg-gray-100 transition-all duration-300 z-50"
          style={{
            width: 32,
            height: 32,
            left: sidebarOpen ? '16rem' : '4rem',
          }}
        >
          {sidebarOpen ? (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
