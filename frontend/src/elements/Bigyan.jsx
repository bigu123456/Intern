import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Bigyan = () => {
  return (
    <div className="fixed bottom-6 left-4 max-w-full bg-white p-2 shadow-lg border border-gray-200 overflow-visible">
      <h2 className="text-lg font-bold text-slate-800 mb-2">My Favorite</h2>

      <div className="flex space-x-3 flex-nowrap">
        {/* User Management with Link */}
        <Link to="/user" className="no-underline">
  <div className="bg-amber-50 hover:bg-amber-100 rounded-2xl p-2 cursor-pointer border border-white shadow-sm min-w-[110px] flex flex-col items-center space-y-1">
    <div className="bg-amber-100 w-8 h-8 rounded-xl flex items-center justify-center text-xl">👥</div>
    <h3 className="font-semibold text-slate-800 text-xs leading-tight text-center truncate">User Management</h3>
  </div>
</Link>


        {/* Other items without links (or you can add links similarly) */}
        <div className="bg-emerald-50 hover:bg-emerald-100 rounded-2xl p-2 cursor-pointer border border-white shadow-sm min-w-[110px] flex flex-col items-center space-y-1">
          <div className="bg-emerald-100 w-8 h-8 rounded-xl flex items-center justify-center text-xl">👤</div>
          <h3 className="font-semibold text-slate-800 text-xs leading-tight text-center truncate">Patient Administration</h3>
        </div>

        <div className="bg-cyan-50 hover:bg-cyan-100 rounded-2xl p-2 cursor-pointer border border-white shadow-sm min-w-[110px] flex flex-col items-center space-y-1">
          <div className="bg-cyan-100 w-8 h-8 rounded-xl flex items-center justify-center text-xl">⚙️</div>
          <h3 className="font-semibold text-slate-800 text-xs leading-tight text-center truncate">Account</h3>
        </div>

        <div className="bg-sky-50 hover:bg-sky-100 rounded-2xl p-2 cursor-pointer border border-white shadow-sm min-w-[110px] flex flex-col items-center space-y-1">
          <div className="bg-sky-100 w-8 h-8 rounded-xl flex items-center justify-center text-xl">🔬</div>
          <h3 className="font-semibold text-slate-800 text-xs leading-tight text-center truncate">Investigation</h3>
        </div>

        <div className="bg-blue-50 hover:bg-blue-100 rounded-2xl p-2 cursor-pointer border border-white shadow-sm min-w-[110px] flex flex-col items-center space-y-1">
          <div className="bg-blue-100 w-8 h-8 rounded-xl flex items-center justify-center text-xl">💊</div>
          <h3 className="font-semibold text-slate-800 text-xs leading-tight text-center truncate">Pharmacy</h3>
        </div>
      </div>
    </div>
  );
};

export default Bigyan;
