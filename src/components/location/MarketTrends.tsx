'use client'

import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import { Line } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

// Market metrics data
const MARKET_METRICS = [
  { 
    label: 'Asking Rent (PSF)', 
    value: '$28.75', 
    change: '+4.2%', 
    trend: 'up' 
  },
  { 
    label: 'Vacancy Rate', 
    value: '3.8%', 
    change: '-0.6%', 
    trend: 'down' 
  },
  { 
    label: 'Cap Rate', 
    value: '5.9%', 
    change: '-0.3%', 
    trend: 'down' 
  },
  { 
    label: 'Absorption Rate', 
    value: '92.4%', 
    change: '+2.1%', 
    trend: 'up' 
  }
]

// Rental rate data
const rentalRateData = {
  labels: ['Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'],
  datasets: [
    {
      label: 'Trade Area',
      data: [25.2, 25.8, 26.1, 26.5, 27.2, 27.8, 28.3, 28.75],
      borderColor: 'rgba(15, 82, 186, 1)',
      backgroundColor: 'rgba(15, 82, 186, 0.1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
    },
    {
      label: 'Metro Average',
      data: [23.4, 23.9, 24.2, 24.5, 24.9, 25.3, 25.7, 26.1],
      borderColor: 'rgba(220, 20, 60, 0.8)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      borderDash: [5, 5],
      tension: 0.3,
    }
  ],
}

// Vacancy rate data
const vacancyRateData = {
  labels: ['Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'],
  datasets: [
    {
      label: 'Trade Area',
      data: [5.2, 4.9, 4.6, 4.3, 4.1, 4.0, 3.9, 3.8],
      borderColor: 'rgba(15, 82, 186, 1)',
      backgroundColor: 'rgba(15, 82, 186, 0.1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
    },
    {
      label: 'Metro Average',
      data: [6.8, 6.5, 6.3, 6.1, 5.9, 5.7, 5.5, 5.3],
      borderColor: 'rgba(220, 20, 60, 0.8)',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2,
      borderDash: [5, 5],
      tension: 0.3,
    }
  ],
}

const MarketTrends: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Market Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {MARKET_METRICS.map((metric, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">{metric.label}</h4>
            <div className="text-2xl font-semibold">{metric.value}</div>
            <div className={`flex items-center text-xs mt-1 ${
              metric.trend === 'up' 
                ? metric.label.includes('Vacancy') || metric.label.includes('Cap Rate')
                  ? 'text-danger' 
                  : 'text-accent'
                : metric.label.includes('Vacancy') || metric.label.includes('Cap Rate')
                  ? 'text-accent'
                  : 'text-danger'
            }`}>
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
      
      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Rental Rate Chart */}
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Rental Rates ($/SF)</h4>
          <div className="h-64">
            <Line 
              data={rentalRateData} 
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                    grid: {
                      display: true,
                      color: 'rgba(0, 0, 0, 0.05)',
                    },
                    ticks: {
                      callback: function(value) {
                        return '$' + value
                      }
                    }
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
                    callbacks: {
                      label: function(context) {
                        return context.dataset.label + ': $' + context.parsed.y
                      }
                    }
                  }
                },
              }}  
            />
          </div>
        </div>
        
        {/* Vacancy Rate Chart */}
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Vacancy Rate (%)</h4>
          <div className="h-64">
            <Line 
              data={vacancyRateData} 
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
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
                    callbacks: {
                      label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y + '%'
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
          Market Insights
        </h4>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Trade area rents are <span className="font-medium text-primary">10.2% higher</span> than metro average, reflecting premium market positioning</li>
          <li>Vacancy rates continue to <span className="font-medium text-primary">decline more rapidly</span> than the broader market, signaling strong demand</li>
          <li>Low and falling vacancy rates indicate <span className="font-medium text-primary">limited supply and increased competition</span> for available space</li>
          <li>Strong absorption rates suggest <span className="font-medium text-primary">quick lease-up periods</span> for new projects</li>
        </ul>
      </div>
    </div>
  )
}

export default MarketTrends 