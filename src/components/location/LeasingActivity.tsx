'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

// Lease data
const LEASE_METRICS = [
  { 
    label: 'New Leases (YTD)', 
    value: '28', 
    change: '+17.4%', 
    trend: 'up' 
  },
  { 
    label: 'Avg Lease Term', 
    value: '5.2 yrs', 
    change: '+0.4 yrs', 
    trend: 'up' 
  },
  { 
    label: 'Tenant Retention', 
    value: '76%', 
    change: '+3.2%', 
    trend: 'up' 
  },
  { 
    label: 'Avg TI Allowance', 
    value: '$45/SF', 
    change: '+$2/SF', 
    trend: 'up' 
  }
]

// Recent lease data
const RECENT_LEASES = [
  {
    tenant: 'Tech Solutions Inc.',
    size: '12,500 SF',
    floor: '14-15',
    term: '7 years',
    type: 'New Lease',
    date: 'Nov 2023'
  },
  {
    tenant: 'Legal Partners LLP',
    size: '8,200 SF',
    floor: '8',
    term: '5 years',
    type: 'Renewal',
    date: 'Oct 2023'
  },
  {
    tenant: 'Financial Advisors Group',
    size: '10,800 SF',
    floor: '22',
    term: '6 years',
    type: 'Expansion',
    date: 'Sep 2023'
  },
  {
    tenant: 'Creative Design Co.',
    size: '5,400 SF',
    floor: '7',
    term: '4 years',
    type: 'New Lease',
    date: 'Aug 2023'
  }
]

// Tenant industry data
const tenantIndustryData = {
  labels: ['Technology', 'Financial Services', 'Legal', 'Healthcare', 'Other'],
  datasets: [
    {
      data: [35, 25, 20, 12, 8],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(201, 203, 207, 0.8)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(201, 203, 207, 1)'
      ],
      borderWidth: 1,
    },
  ],
}

const LeasingActivity: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Leasing Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {LEASE_METRICS.map((metric, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">{metric.label}</h4>
            <div className="text-2xl font-semibold">{metric.value}</div>
            <div className={`flex items-center text-xs mt-1 ${metric.trend === 'up' ? 'text-accent' : 'text-danger'}`}>
              {metric.trend === 'up' ? (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              {metric.change} YoY
            </div>
          </div>
        ))}
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Recent Leases Table */}
        <div className="md:col-span-3 bg-white rounded-lg border border-gray-100 p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Leasing Activity</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">Tenant</th>
                  <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">Size</th>
                  <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">Floor</th>
                  <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">Term</th>
                  <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">Type</th>
                  <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECENT_LEASES.map((lease, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-3 py-2 text-xs text-gray-700">{lease.tenant}</td>
                    <td className="px-3 py-2 text-xs text-gray-700">{lease.size}</td>
                    <td className="px-3 py-2 text-xs text-gray-700">{lease.floor}</td>
                    <td className="px-3 py-2 text-xs text-gray-700">{lease.term}</td>
                    <td className="px-3 py-2 text-xs">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        lease.type === 'New Lease' 
                          ? 'bg-blue-100 text-blue-800' 
                          : lease.type === 'Renewal' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-purple-100 text-purple-800'
                      }`}>
                        {lease.type}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-700">{lease.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Tenant Industry Chart */}
        <div className="md:col-span-2 bg-white rounded-lg border border-gray-100 p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Tenant Industry Mix</h4>
          <div className="h-64 flex items-center justify-center">
            <Doughnut 
              data={tenantIndustryData} 
              options={{
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      boxWidth: 12,
                      padding: 15,
                      font: {
                        size: 11
                      }
                    }
                  },
                  tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#000',
                    bodyColor: '#000',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                      label: function(context) {
                        return context.label + ': ' + context.parsed + '%'
                      }
                    }
                  }
                },
              }}  
            />
          </div>
        </div>
      </div>
      
      {/* Key Insights */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Leasing Insights
        </h4>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li><span className="font-medium text-primary">Technology and financial services</span> account for 60% of leased space, aligning with the area's business profile</li>
          <li>Average lease terms have <span className="font-medium text-primary">increased by 0.4 years</span>, suggesting tenant confidence in the location</li>
          <li>High tenant retention rate of <span className="font-medium text-primary">76%</span> indicates strong satisfaction with property management and amenities</li>
          <li>Recent leasing activity shows <span className="font-medium text-primary">balanced mix</span> of new leases, renewals, and expansions</li>
        </ul>
      </div>
    </div>
  )
}

export default LeasingActivity 