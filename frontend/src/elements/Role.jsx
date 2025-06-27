import React, { useState } from 'react';
import { Search, Plus, MoreHorizontal } from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntriesCount, setShowEntriesCount] = useState(15);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const roles = [
    { id: 1, name: 'Pharmacy cashier' },
    { id: 2, name: '1750144989536 role' },
    { id: 3, name: 'LAB SUPERADMIN' },
    { id: 4, name: 'Account' },
    { id: 5, name: 'Test-02' },
    { id: 6, name: 'Test-01' },
    { id: 7, name: 'Test01' },
    { id: 8, name: 'Test' },
    { id: 9, name: 'Admin' },
    { id: 10, name: 'Agent' },
    { id: 11, name: 'Inventory' },
    { id: 12, name: 'Lab' },
    { id: 13, name: 'Pathouser' },
    { id: 14, name: 'SuperAdmin' }
  ];

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Layout: Sidebar + Main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto transition-all duration-300">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Table Controls */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search Table"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 w-48 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm font-medium">
                    Search
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm font-medium">
                    <Plus className="w-4 h-4" />
                    <span>Add</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Show</span>
                    <select
                      value={showEntriesCount}
                      onChange={(e) => setShowEntriesCount(Number(e.target.value))}
                      className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900 text-sm">S.N.</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900 text-sm">Name</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900 text-sm">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredRoles.slice(0, showEntriesCount).map((role, index) => (
                    <tr key={role.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="py-3 px-6 text-sm text-gray-700">{index + 1}</td>
                      <td className="py-3 px-6 text-sm text-gray-900">{role.name}</td>
                      <td className="py-3 px-6">
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors duration-200">
                          <MoreHorizontal className="w-4 h-4 text-gray-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {Math.min(filteredRoles.length, showEntriesCount)} of {filteredRoles.length} entries
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1.5 text-sm border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-200">
                    Previous
                  </button>
                  <button className="px-3 py-1.5 text-sm bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors duration-200">
                    1
                  </button>
                  <button className="px-3 py-1.5 text-sm border border-gray-200 rounded hover:bg-gray-50 transition-colors duration-200">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
