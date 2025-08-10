import { useState } from "react";
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Target,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  Building,
  ChevronDown,
  LayoutDashboard,
  ShoppingCart,
  Package,
  MessageSquare,
  FileText,
  LogIn,
  UserPlus
} from 'lucide-react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
    { 
      icon: ShoppingCart, 
      label: 'E-commerce', 
      hasDropdown: true,
      dropdownId: 'ecommerce',
      dropdownItems: [
        { label: 'Products', href: '#' },
        { label: 'Orders', href: '#' },
        { label: 'Billing', href: '#' }
      ]
    },
    { icon: Package, label: 'Products', href: '#' },
    { icon: Users, label: 'Customers', href: '#' },
    { icon: MessageSquare, label: 'Messages', href: '#', badge: '3' },
    { icon: FileText, label: 'Reports', href: '#' },
    { icon: LogIn, label: 'Sign In', href: '#' },
    { icon: UserPlus, label: 'Sign Up', href: '#' }
  ];

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-900 bg-opacity-50 sm:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } sm:translate-x-0`}>
        <div className="h-full pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            {/* Logo Section */}
            <div className="flex items-center mb-6 px-3 py-4 border-b border-gray-200 dark:border-gray-700">
                <img 
                src="/logo/light.png" 
                alt="Company Logo" 
                className="w-8 mr-3"
                />
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                ClarityCRM
                </span>
            </div>
            <ul className="space-y-2 font-medium">
                {menuItems.map((item, index) => (
                <li key={index}>
                    {item.hasDropdown ? (
                    <>
                        <button
                        onClick={() => toggleDropdown(item.dropdownId)}
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                        <item.icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <span className="flex-1 ml-3 text-left whitespace-nowrap">{item.label}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.dropdownId ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === item.dropdownId && (
                        <ul className="py-2 space-y-2">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex}>
                                <a
                                href={dropdownItem.href}
                                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                {dropdownItem.label}
                                </a>
                            </li>
                            ))}
                        </ul>
                        )}
                    </>
                    ) : (
                    <a
                        href={item.href}
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                        <item.icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <span className="ml-3">{item.label}</span>
                        {item.badge && (
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            {item.badge}
                        </span>
                        )}
                    </a>
                    )}
                </li>
                ))}
            </ul>
        </div>
      </aside>
    </>
  );
};

// Dashboard Content Component
const DashboardContent = () => {
  const stats = [
    {
      title: 'Total Customers',
      value: '2,847',
      change: '+12.5%',
      isPositive: true,
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Revenue',
      value: '$124,592',
      change: '+8.2%',
      isPositive: true,
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '-0.4%',
      isPositive: false,
      icon: Target,
      color: 'bg-purple-500'
    },
    {
      title: 'Growth Rate',
      value: '24.8%',
      change: '+4.1%',
      isPositive: true,
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  const recentCustomers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      company: 'Tech Solutions Inc',
      status: 'Active',
      value: '$12,500',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'mchen@startup.io',
      company: 'StartupFlow',
      status: 'Pending',
      value: '$8,200',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily@design.co',
      company: 'Creative Design Co',
      status: 'Active',
      value: '$15,800',
      avatar: 'ER'
    }
  ];

  return (
    <div className="p-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.isPositive ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm ml-1 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Customers Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Customers</h2>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentCustomers.map((customer) => (
              <div key={customer.id} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-300">{customer.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{customer.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{customer.email}</p>
                    <div className="flex items-center mt-1">
                      <Building className="h-3 w-3 text-gray-400 mr-1" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">{customer.company}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">{customer.value}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                    customer.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {customer.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;