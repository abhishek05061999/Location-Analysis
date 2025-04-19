'use client'

import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

// Demographic summary data
const DEMOGRAPHIC_SUMMARY = [
  { 
    label: 'Population', 
    value: '85,400', 
    change: '+3.2%',
    trend: 'up' 
  },
  { 
    label: 'Median Income', 
    value: '$82,300', 
    change: '+4.5%',
    trend: 'up' 
  },
  { 
    label: 'Median Age', 
    value: '35.2', 
    change: '-0.8',
    trend: 'down' 
  },
  { 
    label: 'College Educated', 
    value: '48.3%', 
    change: '+2.1%',
    trend: 'up' 
  }
]

// Population change data
const populationTrendData = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Trade Area',
      data: [79200, 80100, 81000, 82500, 84100, 85400],
      borderColor: 'rgba(15, 82, 186, 1)',
      backgroundColor: 'rgba(15, 82, 186, 0.1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
    },
    {
      label: 'New York MSA',
      data: [77100, 78400, 78900, 79800, 80500, 81200],
      borderColor: 'rgba(220, 20, 60, 0.8)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      borderDash: [5, 5],
      tension: 0.3,
    }
  ],
}

// Age distribution data
const ageDistributionData = {
  labels: ['0-14', '15-24', '25-34', '35-44', '45-54', '55-64', '65+'],
  datasets: [
    {
      label: 'Population %',
      data: [15, 12, 21, 18, 14, 11, 9],
      backgroundColor: [
        'rgba(15, 82, 186, 0.8)',
        'rgba(46, 139, 87, 0.8)',
        'rgba(255, 165, 0, 0.8)',
        'rgba(220, 20, 60, 0.8)',
        'rgba(75, 0, 130, 0.8)',
        'rgba(0, 128, 128, 0.8)',
        'rgba(30, 144, 255, 0.8)',
      ],
      borderWidth: 1,
    },
  ],
}

const DemographicTrends: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Demographic Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DEMOGRAPHIC_SUMMARY.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">{item.label}</h4>
            <div className="text-2xl font-semibold">{item.value}</div>
            <div className={`flex items-center text-xs mt-1 ${
              item.trend === 'up' ? 'text-accent' : 'text-danger'
            }`}>
              {item.trend === 'up' ? (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              {item.change} YoY
            </div>
          </div>
        ))}
      </div>
      
      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Population Trend Chart */}
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Population Trend</h4>
          <div className="h-64">
            <Line 
              data={populationTrendData} 
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                    grid: {
                      display: true,
                      color: 'rgba(0, 0, 0, 0.05)',
                    },
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      boxWidth: 12,
                      padding: 15,
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
                  }
                },
              }}  
            />
          </div>
        </div>
        
        {/* Age Distribution Chart */}
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Age Distribution</h4>
          <div className="h-64">
            <Bar 
              data={ageDistributionData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 25,
                    grid: {
                      display: true,
                      color: 'rgba(0, 0, 0, 0.05)',
                    },
                    ticks: {
                      callback: function(value) {
                        return value + '%'
                      }
                    }
                  },
                  x: {
                    grid: {
                      display: false,
                    }
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
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
          Demographic Insights
        </h4>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Trade area population is growing <span className="font-medium text-primary">1.4x faster</span> than the broader New York MSA</li>
          <li>Area has a <span className="font-medium text-primary">high concentration of young professionals</span> (25-44), supporting demand for services and retail</li>
          <li>Rising incomes indicate <span className="font-medium text-primary">strong market growth potential</span> for premium services and retail</li>
          <li>College-educated population suggests <span className="font-medium text-primary">workforce availability</span> for technical and professional roles</li>
        </ul>
      </div>
    </div>
  )
}

export default DemographicTrends 