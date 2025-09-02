import React, { useState, useMemo, useEffect } from "react";
import {
  SettingFilled,
  SaveOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import data from "./laboratory_services.json";

//  MODAL COMPONENT

const SetupModal = ({ isOpen, onClose, labData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    department: "",
    test: "",
    priority: "",
    isPositive: false,
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        department: editingItem.department,
        test: editingItem.Test,
        priority: editingItem.No || "",
        isPositive: editingItem.isPositiveCount || false,
      });
    } else {
      setFormData({
        department: "",
        test: "",
        priority: "",
        isPositive: false,
      });
    }
  }, [editingItem]);

  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const departmentOptions = useMemo(() => {
    const departments = labData.map((item) => item.department);
    return [...new Set(departments)];
  }, [labData]);

  const filteredData = labData.filter(
    (item) =>
      item.Test.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-gray-100 rounded-lg shadow-xl w-full max-w-5xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <SettingFilled className="mr-2" /> Setup
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-3xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6 items-end">
          <div>
            <label className="block text-xs font-medium text-gray-700">
              Department
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleFormChange}
              className="mt-1 block w-full py-2 px-3 border border-black bg-white rounded-md shadow-xs"
            >
              <option value="">Department Select</option>
              {departmentOptions.map((dep) => (
                <option key={dep} value={dep}>
                  {dep}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              * Test
            </label>
            <input
              type="text"
              name="test"
              value={formData.test}
              onChange={handleFormChange}
              className="mt-1 block w-full py-2 px-3 border border-black rounded-md shadow-xs"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">
              * Priority
            </label>
            <input
              type="number"
              name="priority"
              value={formData.priority}
              onChange={handleFormChange}
              placeholder="Priority"
              className="mt-1 block w-full py-2 px-3 border border-black rounded-md shadow-xs"
            />
          </div>
          <div className="flex items-center pb-2">
            <input
              name="isPositive"
              type="checkbox"
              checked={formData.isPositive}
              onChange={handleFormChange}
              className="h-6 w-4 text-indigo-600 border-black rounded"
            />
            <label className="ml-2 block text-xs text-gray-900">
              Is Positive Count
            </label>
          </div>
          <div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
              <SaveOutlined className="mr-2" /> Save
            </button>
          </div>
        </div>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Search by Keyword"
            className="w-full py-2 px-3 border border-black rounded-md shadow-xs"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="mt-4 max-h-64 overflow-y-auto border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Test
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Priority (No.)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Is Positive Count
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item, index) => (
                  <tr
                    key={`${item.DE}-${index}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-900">
                      {item.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-900">
                      {item.Test}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {item.No || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={item.isPositiveCount}
                        readOnly
                        className="h-6 w-4 text-indigo-600 border-black rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-medium">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="p-1 text-indigo-600 hover:text-indigo-900"
                      >
                        <EditOutlined />
                      </button>
                      <button className="p-1 text-red-600 hover:text-red-900">
                        <DeleteOutlined />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

//  HELPER COMPONENT for the main table grid

const TestRow = ({ item }) => {
  const bgColor = "bg-[#ffeda4]";
  const hasSubTests = item.SubTests && item.SubTests.length > 0;

  if (!hasSubTests) {
    return (
      <div className={`flex text-xs border-t border-black ${bgColor}`}>
        <div className="w-8 px-2 py-1 border-r h-6 border-black text-center flex items-center justify-center">
          {item.DE}
        </div>
        <div className="flex-grow h-6 px-2 py-1 border-r border-black flex items-center">
          {item.Test}
        </div>
        <div className="w-8 px-2 h-6 py-1 text-center bg-white text-black flex items-center justify-center">
          {item.No}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex text-xs border-t border-black ${bgColor}`}>
      <div className="w-8 px-2 py-1 border-r border-black text-center flex items-center justify-center">
        {item.DE}
      </div>
      <div className="flex-grow px-2 py-1 border-r border-black flex items-center">
        {item.Test}
      </div>
      <div className="w-[6rem] flex-shrink-0">
        {item.SubTests.map((subTest, index) => (
          <div
            key={index}
            className="flex border-t border-black first:border-t-0"
          >
            <div className="flex-grow h-6 w-10 px-2 py-1 border-r border-black">
              {subTest.name}
            </div>
            <div className="w-8 px-2  py-1 text-center bg-white text-black">{subTest.No}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

//  MAIN COMPONENT that renders the table and the modal

const LabTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const flatLabData = useMemo(() => {
    const allLabItems = [];
    const services = data["Laboratory Services"];
    Object.entries(services).forEach(([category, tests]) => {
      tests.forEach((test) => {
        // Add department and a default (or random) isPositiveCount property to each test
        allLabItems.push({
          ...test,
          department: category.toUpperCase(),
          isPositiveCount: Math.random() < 0.2, //  about 20% of them true demo purposes
        });
      });
    });
    return allLabItems;
  }, []);

  const MAX_ITEMS_PER_COLUMN = 31;
  const allItems = [];
  const services = data["Laboratory Services"];
  Object.entries(services).forEach(([category, tests]) => {
    allItems.push({ type: "header", name: category.toUpperCase() });
    tests.forEach((test) => allItems.push({ type: "test", ...test }));
  });

  const columns = [];
  if (allItems.length > 0) {
    let currentColumn = [];
    let currentItemCount = 0;
    allItems.forEach((item) => {
      const itemHeight =
        item.type === "test" && item.SubTests?.length > 1
          ? item.SubTests.length
          : 1;
      if (
        currentItemCount + itemHeight > MAX_ITEMS_PER_COLUMN &&
        currentColumn.length > 0
      ) {
        columns.push(currentColumn);
        currentColumn = [];
        currentItemCount = 0;
      }
      currentColumn.push(item);
      currentItemCount += itemHeight;
    });
    if (currentColumn.length > 0) {
      columns.push(currentColumn);
    }
  }

  return (
    <>
      <div className="p-4 bg-gray-200 font-sans">
        <div className="w-full flex justify-end mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
          >
            <SettingFilled className="mr-2" />
            Setup
          </button>
        </div>

        <div className="w-max mx-auto border-2 border-black bg-white shadow-lg">
          <div className="text-center text-black  flex items-center justify-between py-2 px-4">
            <p className="font-thin italic text-xs">last updated on: 2025/08/24 </p>
            <h2 className="text-lg font-bold">प्रयोगशाला सेवा (Laboratory Services)</h2>
          <p></p>

          </div>
          <div className="overflow-x-auto">
            <div className="flex">
              {columns.map((columnItems, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 border-r border-black last:border-r-0"
                >
                  <div className="sticky top-0 flex bg-[#e8bb8e] text-black font-bold text-xs z-10 border-b-1 border-black">
                    <div className="w-8 px-2 py-1 border-r border-black text-center">
                      DE
                    </div>
                    <div className="flex-grow px-2 py-1 border-r border-black text-center">
                      Test
                    </div>
                    <div className="w-[2rem] px-2 py-1 text-center">No.</div>
                  </div>
                  <div>
                    {columnItems.map((item) => {
                      const key = item.type === "header" ? item.name : item.DE;
                      if (item.type === "header") {
                        return (
                          <div
                            key={key}
                            className="bg-[#d9a978] font-bold text-black text-left px-1 py-1 text-xs border-t border-black"
                          >
                            {item.name}
                          </div>
                        );
                      }
                      return <TestRow key={key} item={item} />;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SetupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        labData={flatLabData}
      />
    </>
  );
};

export default LabTable;
