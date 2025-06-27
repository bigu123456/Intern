import React, { useState } from "react";
import Header from './Header';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Users,
  Settings,
  Building2,
  FileText,
  Cpu,
  Crown,
} from "lucide-react";

function User() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({
    userSetup: false,
    setup: false,
  });

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <>
     <Header />
      <div className="min-h-screen bg-gray-50 flex relative">
        {/* Sidebar */}
        <div
          className={`
            bg-white shadow-lg border-r border-gray-200
            transition-all duration-300 ease-in-out overflow-hidden
            ${sidebarOpen ? "w-64" : "w-16"}
            flex-shrink-0
          `}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 py-6 overflow-auto">
              <nav className="px-2 space-y-2">
                {/* User Setup */}
                <div className="w-full">
                  <button
                    onClick={() => toggleMenu("userSetup")}
                    className="w-full flex items-center gap-3 px-3 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <Users className="w-5 h-5 text-teal-500" />
                    {sidebarOpen && <span className="font-medium">User Setup</span>}
                    {sidebarOpen && (
                      openMenus.userSetup ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 ml-auto" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                      )
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
                    onClick={() => toggleMenu("setup")}
                    className="w-full flex items-center gap-3 px-3 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <Settings className="w-5 h-5 text-teal-500" />
                    {sidebarOpen && <span className="font-medium">Setup</span>}
                    {sidebarOpen && (
                      openMenus.setup ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 ml-auto" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                      )
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

              {/* Machine Interfacing Section */}
              {sidebarOpen && (
                <div className="mt-8 mx-4 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
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
                      <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {sidebarOpen && (
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-medium text-gray-600">
                      Powered By
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MIDAS
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    HEALTH SERVICES
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          className="fixed top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-1 shadow-md hover:bg-gray-100 transition-all duration-300 z-50"
          style={{
            width: 32,
            height: 32,
            left: sidebarOpen ? "16rem" : "4rem",
          }}
        >
          {sidebarOpen ? (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex items-center">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          </header>

          {/* Content Area */}
          <main className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Setup Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      <Settings className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Setup
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Sub Organization Organization
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-sm text-gray-500">
                          Active Configuration
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Audit Logs Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Audit Logs
                      </h2>
                      <p className="text-gray-600 mb-4">Audit Logs</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-500">
                          Monitoring Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Content */}
              <div className="mt-12">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="text-center py-16">
                    <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-600 mb-2">
                      Welcome to Your Dashboard
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Manage your organization settings, user roles, and monitor
                      system activity from this central hub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default User;
