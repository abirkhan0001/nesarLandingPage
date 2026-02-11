"use client";

import Image from "next/image";
import { useState } from "react";

const sidebarMenu = [
  { icon: "📊", label: "All Projects", active: true },
  { icon: "📈", label: "Dashboard" },
  { icon: "🔍", label: "Insights" },
];

const discoveryMenu = [
  { icon: "📦", label: "Datastores" },
  { icon: "📁", label: "Data" },
  { icon: "👤", label: "Identities" },
];

const managementMenu = [
  { icon: "📋", label: "Policies" },
  { icon: "📊", label: "Reports" },
  { icon: "🔔", label: "Alerts" },
  { icon: "👥", label: "Accounts" },
  { icon: "🔍", label: "Scan Center" },
  { icon: "🔗", label: "Integrations" },
  { icon: "⚙️", label: "Automations" },
  { icon: "🛠️", label: "Data Configurations" },
  { icon: "🔧", label: "Developer Tools" },
  { icon: "📝", label: "User Log" },
  { icon: "📜", label: "Licenses" },
];

const identityData = [
  {
    id: 1,
    name: "Data Analyzer",
    email: "analyzer-148745",
    type: "App",
    provider: "Azure",
    account: "azure-5f3c9c6b-9c6b-5f3c9c6b",
    role: "App",
    trustLevel: "External",
    sensitivity: "RESTRICTED",
  },
  {
    id: 2,
    name: "prod@mymail.com",
    email: "",
    type: "User",
    provider: "gmail.com",
    role: "User",
    trustLevel: "External",
    sensitivity: "CONFIDENTIAL",
  },
  {
    id: 3,
    name: "DEV-02-CloudServiceRole",
    email: "dev-azure-672d038484",
    type: "Role",
    provider: "DEV",
    account: "Organization",
    role: "Role",
    trustLevel: "Organizational",
    sensitivity: "RESTRICTED",
  },
  {
    id: 4,
    name: "awsRedshiftExecutiveReader",
    email: "arn:aws:iam::672d038484",
    type: "Role",
    provider: "DEV",
    account: "Organization",
    role: "Role",
    trustLevel: "Organizational",
    sensitivity: "RESTRICTED",
  },
  {
    id: 5,
    name: "joseph.dev@databiz.com",
    email: "joseph.dev@databiz.com",
    type: "User",
    provider: "databiz.com",
    role: "User",
    trustLevel: "External (Tenant)",
    sensitivity: "CONFIDENTIAL",
  },
  {
    id: 6,
    name: "Data Service",
    tags: ["New", "Public Read"],
    type: "Managed Identity",
    provider: "Azure",
    account: "azure-5f3c9c6b-9c6b-5f3c9c6b",
    role: "Managed Identity",
    trustLevel: "Organizational",
    sensitivity: "RESTRICTED",
  },
  {
    id: 7,
    name: "Everyone in Account",
    email: "",
    type: "Account",
    provider: "S3",
    account: "Organization",
    role: "Account",
    trustLevel: "Organizational",
    sensitivity: "INTERNAL",
  },
  {
    id: 8,
    name: "Everyone",
    email: "",
    type: "Group",
    provider: "None",
    role: "Group",
    trustLevel: "Public",
    sensitivity: "INTERNAL",
  },
];

const DashboardLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState("Identities");

  const getSensitivityColor = (sensitivity) => {
    const colors = {
      RESTRICTED: "bg-red-100 text-red-700",
      CONFIDENTIAL: "bg-orange-100 text-orange-700",
      INTERNAL: "bg-yellow-100 text-yellow-700",
    };
    return colors[sensitivity] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="flex bg-gray-50  h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {/* <div className="w-6 h-6 bg-black rounded"></div> */}
            <Image src="/images/Cyra_Logo.svg" alt="Logo" width={24} height={24} />
            <span className="font-bold text-lg">CYERA</span>
          </div>
        </div>

        {/* Main Menu */}
        <div className="p-4 space-y-1">
          {sidebarMenu.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                item.active
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-[#88C19C]"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Discovery Section */}
        <div className="px-4 pt-6">
          <div className="text-xs font-semibold text-gray-400 mb-2">DISCOVERY</div>
          <div className="space-y-1">
            {discoveryMenu.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedMenu(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  selectedMenu === item.label
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-600 hover:bg-[#88C19C]"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Management Section */}
        <div className="px-4 pt-6 flex-1 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-400 mb-2">MANAGEMENT</div>
          <div className="space-y-1">
            {managementMenu.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-[#88C19C]"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600">←</button>
            <h1 className="text-lg font-semibold">Identity Explorer</h1>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            Learn about identities
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200 px-6">
          <div className="flex gap-8">
            <button className="px-1 py-3 text-sm font-medium border-b-2 border-gray-900">
              External Identities
            </button>
            <button className="px-1 py-3 text-sm text-gray-500 hover:text-gray-700">
              Public Access to Customer Data
            </button>
            <button className="px-1 py-3 text-sm text-gray-500 hover:text-gray-700">
              MFA Disabled
            </button>
            <button className="px-1 py-3 text-sm text-gray-500 hover:text-gray-700">
              Stale Identities
            </button>
          </div>
        </div>

        {/* Sub Header */}
        <div className="bg-white px-6 py-3 border-b border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">Showing 1,582 Identities</div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
              <span>🔍</span> Filters
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
              <span>⬇️</span> Sort by Records
            </button>
            <button className="px-3 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">
              Columns
            </button>
            <button className="px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700">
              Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto bg-white">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Identity Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Trust Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Identity Provider
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Sensitivity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {identityData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">👤</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                          {item.tags && (
                            <span className="ml-2">
                              {item.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="ml-1 px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </span>
                          )}
                        </div>
                        {item.email && (
                          <div className="text-xs text-gray-500">{item.email}</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.trustLevel}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
                        {item.provider.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-900">{item.provider}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.account}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getSensitivityColor(
                        item.sensitivity
                      )}`}
                    >
                      {item.sensitivity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;


