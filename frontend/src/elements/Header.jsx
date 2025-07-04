import React from 'react';
import { Input, Avatar, Badge } from 'antd';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 w-full">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left: Logo and Grid */}
        <div className="flex items-center space-x-4">
          {/* Logo Box */}
          <div className="flex items-center space-x-2">
            <Avatar
              size="small"
              style={{
                background: 'linear-gradient(to right, #2563eb, #0d9488)',
                fontWeight: 'bold',
              }}
            >
              M
            </Avatar>
            <div className="mt-1"> {/* ⬅ Adjusted lower */}
              <h1 className="text-xl font-bold text-gray-900">MIDAS</h1>
              <p className="text-xs text-gray-500 -mt-1">HEALTH SERVICES</p>
            </div>
          </div>

          {/* App Grid */}
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
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search for modules, sub-modules, settings, etc. (ctrl+e)"
            className="w-full text-sm"
            allowClear
          />
        </div>

        {/* Right: User Info & Notifications */}
        <div className="flex items-center space-x-4">
          {/* Organization Name */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200">
            <Avatar
              size="small"
              style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)', fontSize: 10 }}
            >
              M
            </Avatar>
            <span className="text-gray-800 text-sm font-medium whitespace-nowrap">
              Nobel Medical College
            </span>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-200">
            <Avatar size="small" style={{ backgroundColor: '#1e3a8a', fontSize: 10 }}>SA</Avatar>
            <span className="text-gray-800 text-sm font-medium">superadmin</span>
          </div>

          {/* Notification Icon */}
          <Badge dot>
            <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600">
              <BellOutlined className="text-white text-sm" />
            </div>
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
