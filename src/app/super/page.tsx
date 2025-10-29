"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Moon,
  Sun,
  Users,
  Grid,
  TrendingUp,
  Calendar,
  DollarSign,
  Activity,
  Home,
  UserCog,
  Layers,
  Settings,
  LogOut,
  ChevronDown,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Plus,
  X,
  Check,
  Menu,
} from "lucide-react";

// Simulated data
const generateMonthlyData = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months.map((month, index) => ({
    month,
    tenants: Math.floor(Math.random() * 20) + 5,
    fields: Math.floor(Math.random() * 50) + 10,
  }));
};

const generateTenants = () => {
  return Array.from({ length: 15 }, (_, i) => ({
    id: `tenant-${i + 1}`,
    name: `Tenant ${i + 1}`,
    email: `tenant${i + 1}@example.com`,
    phone: `0812345678${i.toString().padStart(2, "0")}`,
    city: ["Medan", "Jakarta", "Bandung", "Surabaya"][
      Math.floor(Math.random() * 4)
    ],
    isActive: Math.random() > 0.2,
    createdAt: new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ).toISOString(),
  }));
};

const generateFields = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: `field-${i + 1}`,
    name: `Lapangan ${i + 1}`,
    tenant: `Tenant ${Math.floor(Math.random() * 15) + 1}`,
    sportType: ["Futsal", "Basketball", "Badminton", "Volleyball"][
      Math.floor(Math.random() * 4)
    ],
    pricePerHour: (Math.floor(Math.random() * 15) + 5) * 10000,
    isAvailable: Math.random() > 0.3,
    createdAt: new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ).toISOString(),
  }));
};

const generateBookings = () => {
  return Array.from({ length: 25 }, (_, i) => ({
    id: `booking-${i + 1}`,
    tenant: `Tenant ${Math.floor(Math.random() * 15) + 1}`,
    field: `Lapangan ${Math.floor(Math.random() * 20) + 1}`,
    user: `User ${Math.floor(Math.random() * 50) + 1}`,
    bookingDate: new Date(
      2025,
      0,
      Math.floor(Math.random() * 28) + 1
    ).toISOString(),
    startAt: `${(Math.floor(Math.random() * 16) + 6)
      .toString()
      .padStart(2, "0")}:00`,
    endAt: `${(Math.floor(Math.random() * 16) + 8)
      .toString()
      .padStart(2, "0")}:00`,
    totalPrice: (Math.floor(Math.random() * 20) + 5) * 50000,
    status: ["pending", "confirmed", "completed", "canceled"][
      Math.floor(Math.random() * 4)
    ],
  }));
};

const generateUsers = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    id: `user-${i + 1}`,
    fullName: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `0812345678${i.toString().padStart(2, "0")}`,
    role: ["customer", "tenant_admin", "super_admin"][
      Math.floor(Math.random() * 3)
    ],
    createdAt: new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ).toISOString(),
  }));
};

const SuperAdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [monthlyData, setMonthlyData] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [fields, setFields] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const [stats, setStats] = useState({
    totalTenants: 0,
    totalFields: 0,
    activeBookings: 0,
    monthlyRevenue: 0,
    growthRate: 0,
  });

  const [currentUser, setCurrentUser] = useState({
    fullName: "Admin User",
    email: "admin@example.com",
    role: "Super Admin",
    avatar: null,
  });

  useEffect(() => {
    const data = generateMonthlyData();
    setMonthlyData(data);
    setTenants(generateTenants());
    setFields(generateFields());
    setBookings(generateBookings());
    setUsers(generateUsers());

    const totalTenants = data.reduce((sum, item) => sum + item.tenants, 0);
    const totalFields = data.reduce((sum, item) => sum + item.fields, 0);

    setStats({
      totalTenants,
      totalFields,
      activeBookings: Math.floor(Math.random() * 500) + 200,
      monthlyRevenue: Math.floor(Math.random() * 50000000) + 10000000,
      growthRate: (Math.random() * 30 + 10).toFixed(1),
    });
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, color }) => (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } rounded-xl p-6 shadow-lg border ${
        darkMode ? "border-gray-700" : "border-gray-200"
      } hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 rounded-lg ${color} transform transition-transform duration-300 hover:scale-110 hover:rotate-6`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span
          className={`text-sm font-medium ${
            darkMode ? "text-green-400" : "text-green-600"
          } animate-pulse`}
        >
          {subtitle}
        </span>
      </div>
      <h3
        className={`text-2xl font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        } transition-colors duration-300`}
      >
        {value}
      </h3>
      <p
        className={`text-sm mt-1 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {title}
      </p>
    </div>
  );

  const Sidebar = () => {
    const menuItems = [
      { id: "dashboard", icon: Home, label: "Dashboard" },
      { id: "tenants", icon: Users, label: "Tenants" },
      { id: "fields", icon: Grid, label: "Fields" },
      { id: "bookings", icon: Calendar, label: "Bookings" },
      { id: "users", icon: UserCog, label: "Users" },
      { id: "settings", icon: Settings, label: "Settings" },
    ];

    return (
      <>
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          } border-r w-64 min-h-screen fixed left-0 top-0 z-50 transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1
                    className={`text-lg font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Admin Panel
                  </h1>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Super Admin
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden"
              >
                <X
                  className={`w-6 h-6 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                />
              </button>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : `${
                        darkMode
                          ? "text-gray-300 hover:bg-gray-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <button
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                darkMode
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors duration-200`}
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>
      </>
    );
  };

  const Header = () => (
    <header
      className={`${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-b sticky top-0 z-10 backdrop-blur-sm bg-opacity-90 lg:ml-64`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu
                className={`w-6 h-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              />
            </button>
            <h2
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              } capitalize`}
            >
              {currentPage}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition-colors duration-200`}
              >
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  {currentUser.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                {/* User Info - Hidden on mobile */}
                <div className="hidden md:block text-left">
                  <p
                    className={`text-sm font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {currentUser.fullName}
                  </p>
                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {currentUser.role}
                  </p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } transition-transform duration-200 ${
                    profileDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {profileDropdown && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setProfileDropdown(false)}
                  />

                  {/* Menu */}
                  <div
                    className={`absolute right-0 mt-2 w-64 ${
                      darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    } border rounded-xl shadow-xl z-20 overflow-hidden`}
                  >
                    {/* User Info Section */}
                    <div
                      className={`px-4 py-3 border-b ${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <p
                        className={`text-sm font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {currentUser.fullName}
                      </p>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        } mt-0.5`}
                      >
                        {currentUser.email}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full">
                        {currentUser.role}
                      </span>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setCurrentPage("settings");
                          setProfileDropdown(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm ${
                          darkMode
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                        } transition-colors`}
                      >
                        <UserCog className="w-4 h-4" />
                        <span>Profile Settings</span>
                      </button>
                      <button
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm ${
                          darkMode
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                        } transition-colors`}
                      >
                        <Settings className="w-4 h-4" />
                        <span>Account Settings</span>
                      </button>
                    </div>

                    {/* Logout */}
                    <div
                      className={`border-t ${
                        darkMode ? "border-gray-700" : "border-gray-200"
                      } py-2`}
                    >
                      <button
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors`}
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  const DashboardPage = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Total Tenants"
          value={stats.totalTenants}
          subtitle={`+${stats.growthRate}%`}
          color="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <StatCard
          icon={Grid}
          title="Total Fields"
          value={stats.totalFields}
          subtitle={`+${(stats.growthRate * 1.2).toFixed(1)}%`}
          color="bg-gradient-to-br from-purple-500 to-purple-600"
        />
        <StatCard
          icon={Calendar}
          title="Active Bookings"
          value={stats.activeBookings}
          subtitle="This month"
          color="bg-gradient-to-br from-green-500 to-green-600"
        />
        <StatCard
          icon={DollarSign}
          title="Monthly Revenue"
          value={formatCurrency(stats.monthlyRevenue)}
          subtitle={`+${(stats.growthRate * 0.8).toFixed(1)}%`}
          color="bg-gradient-to-br from-orange-500 to-orange-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl p-6 shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Tenant Growth
              </h2>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Monthly tenant registrations
              </p>
            </div>
            <TrendingUp
              className={`w-5 h-5 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={darkMode ? "#374151" : "#e5e7eb"}
              />
              <XAxis
                dataKey="month"
                stroke={darkMode ? "#9ca3af" : "#6b7280"}
                style={{ fontSize: "12px" }}
              />
              <YAxis
                stroke={darkMode ? "#9ca3af" : "#6b7280"}
                style={{ fontSize: "12px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                  border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="tenants"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 4 }}
                name="Tenants"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl p-6 shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Field Additions
              </h2>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                New fields added monthly
              </p>
            </div>
            <Grid
              className={`w-5 h-5 ${
                darkMode ? "text-purple-400" : "text-purple-600"
              }`}
            />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={darkMode ? "#374151" : "#e5e7eb"}
              />
              <XAxis
                dataKey="month"
                stroke={darkMode ? "#9ca3af" : "#6b7280"}
                style={{ fontSize: "12px" }}
              />
              <YAxis
                stroke={darkMode ? "#9ca3af" : "#6b7280"}
                style={{ fontSize: "12px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: darkMode ? "#1f2937" : "#ffffff",
                  border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="fields"
                fill="#8b5cf6"
                radius={[8, 8, 0, 0]}
                name="Fields"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const DataTable = ({ data, columns, onEdit, onDelete, onView }) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className={`${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className={`px-6 py-3 text-left text-xs font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-500"
                } uppercase tracking-wider`}
              >
                {col.label}
              </th>
            ))}
            <th
              className={`px-6 py-3 text-right text-xs font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              } uppercase tracking-wider`}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody
          className={`${darkMode ? "bg-gray-800" : "bg-white"} divide-y ${
            darkMode ? "divide-gray-700" : "divide-gray-200"
          }`}
        >
          {data.map((item, idx) => (
            <tr
              key={idx}
              className={`${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
              } transition-colors`}
            >
              {columns.map((col, colIdx) => (
                <td
                  key={colIdx}
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  {col.render ? col.render(item) : item[col.key]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                {onView && (
                  <button
                    onClick={() => onView(item)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Eye className="w-4 h-4 inline" />
                  </button>
                )}
                {onEdit && (
                  <button
                    onClick={() => onEdit(item)}
                    className="text-yellow-600 hover:text-yellow-900"
                  >
                    <Edit className="w-4 h-4 inline" />
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={() => onDelete(item)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TenantsPage = () => {
    const filteredTenants = tenants.filter(
      (t) =>
        (filterStatus === "all" ||
          (filterStatus === "active" ? t.isActive : !t.isActive)) &&
        (t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const columns = [
      { key: "name", label: "Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      { key: "city", label: "City" },
      {
        key: "isActive",
        label: "Status",
        render: (item) => (
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              item.isActive
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {item.isActive ? "Active" : "Inactive"}
          </span>
        ),
      },
      {
        key: "createdAt",
        label: "Created",
        render: (item) => formatDate(item.createdAt),
      },
    ];

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search tenants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`px-4 py-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <DataTable
            data={filteredTenants}
            columns={columns}
            onView={(item) => alert(`View ${item.name}`)}
            onEdit={(item) => alert(`Edit ${item.name}`)}
            onDelete={(item) => confirm(`Delete ${item.name}?`)}
          />
        </div>
      </div>
    );
  };

  const FieldsPage = () => {
    const filteredFields = fields.filter(
      (f) =>
        (filterStatus === "all" ||
          (filterStatus === "available" ? f.isAvailable : !f.isAvailable)) &&
        f.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
      { key: "name", label: "Field Name" },
      { key: "tenant", label: "Tenant" },
      { key: "sportType", label: "Sport Type" },
      {
        key: "pricePerHour",
        label: "Price/Hour",
        render: (item) => formatCurrency(item.pricePerHour),
      },
      {
        key: "isAvailable",
        label: "Status",
        render: (item) => (
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              item.isAvailable
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {item.isAvailable ? "Available" : "Unavailable"}
          </span>
        ),
      },
    ];

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search fields..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={`px-4 py-2 rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300"
            }`}
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <DataTable
            data={filteredFields}
            columns={columns}
            onView={(item) => alert(`View ${item.name}`)}
            onEdit={(item) => alert(`Edit ${item.name}`)}
            onDelete={(item) => confirm(`Delete ${item.name}?`)}
          />
        </div>
      </div>
    );
  };

  const BookingsPage = () => {
    const filteredBookings = bookings.filter(
      (b) =>
        (filterStatus === "all" || b.status === filterStatus) &&
        (b.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.field.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const columns = [
      { key: "tenant", label: "Tenant" },
      { key: "field", label: "Field" },
      { key: "user", label: "User" },
      {
        key: "bookingDate",
        label: "Date",
        render: (item) => formatDate(item.bookingDate),
      },
      { key: "startAt", label: "Start" },
      { key: "endAt", label: "End" },
      {
        key: "totalPrice",
        label: "Price",
        render: (item) => formatCurrency(item.totalPrice),
      },
      {
        key: "status",
        label: "Status",
        render: (item) => {
          const colors = {
            pending: "bg-yellow-100 text-yellow-800",
            confirmed: "bg-blue-100 text-blue-800",
            completed: "bg-green-100 text-green-800",
            canceled: "bg-red-100 text-red-800",
          };
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                colors[item.status]
              }`}
            >
              {item.status}
            </span>
          );
        },
      },
    ];

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={`px-4 py-2 rounded-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300"
            }`}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>

        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <DataTable
            data={filteredBookings}
            columns={columns}
            onView={(item) => alert(`View booking ${item.id}`)}
          />
        </div>
      </div>
    );
  };

  const UsersPage = () => {
    const filteredUsers = users.filter(
      (u) =>
        (filterStatus === "all" || u.role === filterStatus) &&
        (u.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const columns = [
      { key: "fullName", label: "Full Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Phone" },
      {
        key: "role",
        label: "Role",
        render: (item) => {
          const colors = {
            customer: "bg-blue-100 text-blue-800",
            tenant_admin: "bg-purple-100 text-purple-800",
            super_admin: "bg-red-100 text-red-800",
          };
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                colors[item.role]
              }`}
            >
              {item.role.replace("_", " ")}
            </span>
          );
        },
      },
      {
        key: "createdAt",
        label: "Joined",
        render: (item) => formatDate(item.createdAt),
      },
    ];

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`px-4 py-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              <option value="all">All Roles</option>
              <option value="customer">Customer</option>
              <option value="tenant_admin">Tenant Admin</option>
              <option value="super_admin">Super Admin</option>
            </select>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <DataTable
            data={filteredUsers}
            columns={columns}
            onView={(item) => alert(`View ${item.fullName}`)}
            onEdit={(item) => alert(`Edit ${item.fullName}`)}
            onDelete={(item) => confirm(`Delete ${item.fullName}?`)}
          />
        </div>
      </div>
    );
  };

  const SettingsPage = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl p-6 shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Profile Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Phone
              </label>
              <input
                type="tel"
                placeholder="081234567890"
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
              Update Profile
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl p-6 shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Security Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`w-full px-4 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                }`}
              />
            </div>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
              Change Password
            </button>
          </div>
        </div>

        {/* System Settings */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl p-6 shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            System Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Email Notifications
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Receive email updates
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Auto Backup
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Daily database backup
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-xl p-6 shadow-lg border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Subscription Plans
          </h3>
          <div className="space-y-3">
            <div
              className={`p-4 rounded-lg border ${
                darkMode
                  ? "border-gray-700 bg-gray-700"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Basic Plan
                  </p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Rp 100,000 / month
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
            <div
              className={`p-4 rounded-lg border ${
                darkMode
                  ? "border-gray-700 bg-gray-700"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Premium Plan
                  </p>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Rp 500,000 / month
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Edit
                </button>
              </div>
            </div>
            <button className="w-full px-4 py-2 border-2 border-dashed border-gray-400 rounded-lg hover:border-blue-500 transition-colors text-gray-500 hover:text-blue-500">
              + Add New Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />;
      case "tenants":
        return <TenantsPage />;
      case "fields":
        return <FieldsPage />;
      case "bookings":
        return <BookingsPage />;
      case "users":
        return <UsersPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="px-4 sm:px-6 lg:px-8 py-8">{renderPage()}</main>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
