import React, { useState } from 'react';
import { Search, Bell, ChevronRight } from 'lucide-react';
import Bigyan from './Bigyan';

const modules = [
  {
    title: 'User Management',
    description: 'User Setup Setup Audit Logs',
    icon: '👤',
    color: 'bg-red-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    subOptions: ['User Setup', 'setup','Audit logs'],
  },
  {
    title: 'Admission And Discharge',
    description: 'Admission Admission &',
    icon: '🏥',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    subOptions: ["Admission","Admission & Discharge","Setup","Report"],
  },
  {
    title: 'Patient Administration',
    description: 'Dashboard Patient',
    icon: '👥',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ["Patient Records","Appointments","Billing","Medical History","Insurance"]
  },
  {
    title: 'Investigation',
    description: 'Dashboard Pathology Histology Ra',
    icon: '🧪',
    color: 'bg-cyan-500',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    subOptions: ["Dashboard","Pathology","Histology", "Radiology","Cardiology","Endoscopy","Setup","Report","Audit Log"],
  },
  {
    title: 'Pharmacy',
    description: 'Dashboard Sales Purchase Stock Is',
    icon: '💊',
    color: 'bg-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    subOptions: [
      'Dashboard',
      'Sales',
      'Purchase',
      'Stock',
      'Setup',
      'Purchase Report',
      'Sales Report',
      'Stock Report',
      'Coupon',
      'Account Head Map',
      'Account Posting',
      'IRD Report',
    ],
  },
  {
    title: 'Account',
    description: 'Dashboard Account',
    icon: '📊',
    color: 'bg-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ["Dashboard","Account Tree","Heads","Books","Setup","Ledger Analysis","Account Analysis","Report","Managerial Analysis","Budget"],
  },
  {
    title: 'Agent Portal',
    description: 'Dashboard Patient',
    icon: '👨‍💼',
    color: 'bg-slate-600',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    subOptions: ["Dashboard","Patient List","Setu","Transaction"],
  },
  {
    title: 'Inventory',
    description: 'Setup Dashboard Stock Issue Item',
    icon: '📦',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    subOptions: ["Setup","Dashboard","Stock","Issue","Item Consumption","Purchase"],
  },
  {
    title: 'Clinical Management',
    description: 'OPD List Of Last Ward List Medical',
    icon: '🩺',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ["OPD List","OT List","Ward List","Medical Record","Setup"],
  },
  {
    title: 'Canteen Management',
    description: ' sales Setup',
    icon: '🍽️',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ["Sales","Setup"],
  },
  {
    title: 'Dental',
    description: 'Dashboard',
    icon: '🦷',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ['Patient Records', 'Appointments', 'Treatment Plans', 'Billing'],
  },
  {
    title: 'Claim Management',
    description: 'Booking List Claim Management',
    icon: '📋',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ["Booking List","Claim Management"]
  },
  {
    title: 'Blood Bank',
    description: 'Dashboard Donor Register Donor',
    icon: '🩸',
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    subOptions: ["Dashboard","Donor Register","Donor List","Setup"]
  },
  {
    title: 'My Profile',
    description: 'My Profile',
    icon: '👨‍⚕️',
    color: 'bg-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    subOptions: ['My Profile'],
  },
  {
    title: 'MIS Reports',
    description: 'Patient Administration',
    icon: '📈',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ['Patient Administration'],
  },
  {
    title: 'PIS',
    description: 'Dashboard',
    icon: '💻',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ['Dashbaord'],
  },
  {
    title: 'Mero Doctor',
    description: 'Dashboard',
    icon: '👩‍⚕️',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ['Dashboard'],
  },
  {
    title: 'Assets Management',
    description: 'Dashboard',
    icon: '🏢',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ['Dashboard'],
  },
  {
    title: 'Form Settings',
    description: 'Setup',

    
    icon: '⚙️',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    subOptions: ['Setup'],
  },
];

function Dashbaord() {
  const [hoveredModule, setHoveredModule] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gray-50 pb-28">
        {/* New Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 w-full">
          <div className="flex items-center justify-between h-16 px-4">

            {/* Left: Logo and App Grid */}
            <div className="flex items-center space-x-4">
              {/* Logo Box */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">M</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">MIDAS</h1>
                  <p className="text-xs text-gray-500 -mt-1">HEALTH SERVICES</p>
                </div>
              </div>

              {/* App Grid Icon (Custom Box) */}
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

            {/* Right: Org Info, User Info, Notifications */}
            <div className="flex items-center space-x-4">
              {/* Organization Name */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-gray-800 text-sm font-medium whitespace-nowrap">
                  Nobel Medical College And Teaching Hospital
                </span>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200">
                <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">SA</span>
                </div>
                <span className="text-gray-800 text-sm font-medium">superadmin</span>
              </div>

              {/* Notification Icon */}
              <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600">
                <Bell className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Modules</h2>
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <span>All Modules</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredModule(module.title)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <div
                  className={`group ${module.bgColor} ${module.borderColor} border rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`${module.color} rounded-lg p-2 flex-shrink-0`}>
                      <span className="text-white text-lg">{module.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </div>

                {/* Submenu */}
{hoveredModule === module.title && module.subOptions && (
  <ul className="absolute left-0 top-full mt-2 w-56 max-w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 text-sm text-gray-700">
    {module.subOptions.map((opt, i) => (
      <li
        key={i}
        className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer whitespace-nowrap flex justify-between items-center"
      >
        <span>{opt}</span>
        <ChevronRight className="w-4 h-4" />
      </li>
    ))}
  </ul>
)}

              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <Bigyan />
      </div>
    </>
  );
}

export default Dashbaord;
