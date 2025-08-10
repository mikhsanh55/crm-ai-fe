import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Phone, 
  Mail, 
  Calendar,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  User,
  Building
} from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

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
    },
    {
      id: 4,
      name: 'David Park',
      email: 'david.park@corp.com',
      company: 'Global Corp',
      status: 'Inactive',
      value: '$22,100',
      avatar: 'DP'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'call',
      description: 'Called Sarah Johnson about project requirements',
      time: '2 hours ago',
      icon: Phone
    },
    {
      id: 2,
      type: 'email',
      description: 'Sent proposal to Michael Chen',
      time: '4 hours ago',
      icon: Mail
    },
    {
      id: 3,
      type: 'meeting',
      description: 'Meeting scheduled with Emily Rodriguez',
      time: '1 day ago',
      icon: Calendar
    },
    {
      id: 4,
      type: 'call',
      description: 'Follow-up call with David Park',
      time: '2 days ago',
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your CRM.</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Customers */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Recent Customers</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentCustomers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">{customer.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{customer.name}</h3>
                      <p className="text-sm text-gray-500">{customer.email}</p>
                      <div className="flex items-center mt-1">
                        <Building className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">{customer.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{customer.value}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' :
                      customer.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <activity.icon className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
            <User className="h-5 w-5 mr-2" />
            Add Customer
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
            <Phone className="h-5 w-5 mr-2" />
            Make Call
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
            <Mail className="h-5 w-5 mr-2" />
            Send Email
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors">
            <Calendar className="h-5 w-5 mr-2" />
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;