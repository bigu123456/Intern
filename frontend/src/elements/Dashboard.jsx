import React, { useState } from "react";
import { Card, Typography, Button } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  HomeOutlined,
  MedicineBoxOutlined,
  ExperimentOutlined,
  ShoppingCartOutlined,
  CalculatorOutlined,
  DeploymentUnitOutlined,
  StockOutlined,
  ReconciliationOutlined,
  ProfileOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  MonitorOutlined,
  SettingOutlined,
  RightOutlined,
} from "@ant-design/icons";

import Header from "./Header";
import Bigyan from "./Bigyan";

const { Text, Paragraph, Title } = Typography;

const modules = [
  {
    title: "User Management",
    description: "User Setup Setup Audit Logs",
    icon: <UserOutlined className="text-xl" />,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    color: "bg-red-500",
    subOptions: [
      { label: "User Setup", children: ["Role", "User"] },
      { label: "Setup", children: ["children", "baby"] },
      "Audit Logs",
    ],
  },
 
  
  
  {
    title: "Admission And Discharge",
    description: "Admission Admission &",
    icon: <HomeOutlined className="text-xl" />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    color: "bg-blue-500",
    subOptions: [
      {
        label: "Admission",
        children: ["Inpatient", "Outpatient"],
      },
      "Discharge",
      "Reports",
    ],
  },
  {
    title: "Patient Administration",
    description: "Dashboard Patient",
    icon: <TeamOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Records",
        children: ["Create Record", "View Records"],
      },
      "Appointments",
      "Insurance",
    ],
  },
  {
    title: "Investigation",
    description: "Dashboard Pathology Histology Ra",
    icon: <ExperimentOutlined className="text-xl" />,
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    color: "bg-cyan-500",
    subOptions: [
      {
        label: "Tests",
        children: ["Blood Test", "X-Ray"],
      },
      "Setup",
      "Reports",
    ],
  },
  {
    title: "Pharmacy",
    description: "Dashboard Sales Purchase Stock Is",
    icon: <MedicineBoxOutlined className="text-xl" />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    color: "bg-blue-600",
    subOptions: [
      {
        label: "Stock",
        children: ["Add Stock", "View Stock"],
      },
      "Sales",
      "Purchase",
    ],
  },
  {
    title: "Account",
    description: "Dashboard Account",
    icon: <CalculatorOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-600",
    subOptions: [
      {
        label: "Ledger",
        children: ["View Ledger", "Create Ledger"],
      },
      "Analysis",
      "Budget",
    ],
  },
  {
    title: "Agent Portal",
    description: "Dashboard Patient",
    icon: <DeploymentUnitOutlined className="text-xl" />,
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    color: "bg-slate-600",
    subOptions: [
      {
        label: "Agent List",
        children: ["Add Agent", "Manage Agent"],
      },
      "Setup",
      "Transactions",
    ],
  },
  {
    title: "Inventory",
    description: "Setup Dashboard Stock Issue Item",
    icon: <StockOutlined className="text-xl" />,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    color: "bg-green-500",
    subOptions: [
      {
        label: "Items",
        children: ["Add Item", "Issue Item"],
      },
      "Stock",
      "Purchase",
    ],
  },
  {
    title: "Clinical Management",
    description: "OPD List Of Last Ward List Medical",
    icon: <ReconciliationOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Ward",
        children: ["Admit", "Transfer"],
      },
      "OPD",
      "Setup",
    ],
  },
  {
    title: "Canteen Management",
    description: "Sales Setup",
    icon: <ShoppingCartOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Menu",
        children: ["Add Item", "Edit Item"],
      },
      "Sales",
      "Reports",
    ],
  },
  {
    title: "Dental",
    description: "Dashboard",
    icon: <ProfileOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Treatments",
        children: ["Fillings", "Cleanings"],
      },
      "Billing",
      "Appointments",
    ],
  },
  {
    title: "Claim Management",
    description: "Booking List Claim Management",
    icon: <FileTextOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Claims",
        children: ["New Claim", "Claim History"],
      },
      "Reports",
      "Setup",
    ],
  },
  {
    title: "Blood Bank",
    description: "Dashboard Donor Register Donor",
    icon: <FileTextOutlined className="text-xl" />,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    color: "bg-red-500",
    subOptions: [
      {
        label: "Donor",
        children: ["Add Donor", "View Donors"],
      },
      "Requests",
      "Reports",
    ],
  },
  {
    title: "My Profile",
    description: "My Profile",
    icon: <UserOutlined className="text-xl" />,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    color: "bg-green-600",
    subOptions: [
      {
        label: "Profile",
        children: ["View Profile", "Edit Profile"],
      },
      "Settings",
      "Logout",
    ],
  },
  {
    title: "MIS Reports",
    description: "Patient Administration",
    icon: <AppstoreOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Reports",
        children: ["Daily", "Monthly"],
      },
      "Export",
      "Print",
    ],
  },
  {
    title: "PIS",
    description: "Dashboard",
    icon: <MonitorOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Info",
        children: ["Personal", "Job"],
      },
      "Salary",
      "Leaves",
    ],
  },
  {
    title: "Mero Doctor",
    description: "Dashboard",
    icon: <MonitorOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Doctors",
        children: ["Consultation", "Schedule"],
      },
      "Ratings",
      "Appointments",
    ],
  },
  {
    title: "Assets Management",
    description: "Dashboard",
    icon: <MonitorOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Assets",
        children: ["Add Asset", "Track Asset"],
      },
      "Maintenance",
      "Disposals",
    ],
  },
  {
    title: "Form Settings",
    description: "Setup",
    icon: <SettingOutlined className="text-xl" />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    color: "bg-teal-500",
    subOptions: [
      {
        label: "Forms",
        children: ["Create Form", "Manage Forms"],
      },
      "Templates",
      "Access",
    ],
  },
];



function Dashboard() {
  const [hoveredModule, setHoveredModule] = useState(null);

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto p-6 pb-32 relative">
        <div className="flex justify-between items-center mb-6">
          <Title level={3} className="!mb-0">
            Modules
          </Title>
          <Button type="text" className="text-gray-600 hover:text-blue-600 flex items-center">
            All Modules <RightOutlined />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="relative"
              onMouseEnter={() => setHoveredModule(mod.title)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              <Card
                hoverable
                className={`!p-0 ${mod.bgColor} ${mod.borderColor} border rounded-lg cursor-pointer`}
                bodyStyle={{ padding: 16, display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <div
                  className={`${mod.color} rounded-lg p-2 flex-shrink-0 flex items-center justify-center`}
                  style={{ width: 40, height: 40 }}
                >
                  {mod.icon}
                </div>
                <div className="flex flex-col">
                  <Text strong className="text-gray-900 mb-1">
                    {mod.title}
                  </Text>
                  <Paragraph
                    type="secondary"
                    className="text-sm m-0"
                    ellipsis={{ rows: 2, expandable: false }}
                  >
                    {mod.description}
                  </Paragraph>
                </div>
              </Card>

              {hoveredModule === mod.title && mod.subOptions && (
                <ul
                  className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-50 text-sm text-gray-700"
                  style={{ userSelect: "none" }}
                >
                  {mod.subOptions.map((opt, i) => {
                    if (typeof opt === "string") {
                      return (
                        <li
                          key={i}
                          className="px-4 py-2 flex justify-between items-center hover:bg-blue-600 hover:text-white cursor-pointer whitespace-nowrap"
                        >
                          <span>{opt}</span>
                          <RightOutlined />
                        </li>
                      );
                    } else if (typeof opt === "object" && opt.label && opt.children) {
                      return (
                        <div key={i} className="group relative">
                          <li className="px-4 py-2 flex justify-between items-center hover:bg-blue-600 hover:text-white cursor-pointer whitespace-nowrap">
                            <span>{opt.label}</span>
                            <RightOutlined />
                          </li>
                          <ul className="absolute left-full top-0 mt-0 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-50 hidden group-hover:block">
                            {opt.children.map((child, idx) => (
                              <li
                                key={idx}
                                className="px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer whitespace-nowrap"
                              >
                                {child}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
        <Bigyan />
      </div>
    </>
  );
}

export default Dashboard;
