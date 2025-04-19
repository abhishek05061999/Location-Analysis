'use client'

import React, { useState } from 'react'
import Card from '../ui/Card'

// Mock data for different proximity categories
const PROXIMITY_DATA = {
  transportation: [
    { name: 'Interstate 95', type: 'Highway', distance: '0.5 miles', driveTime: '2 min' },
    { name: 'Central Station', type: 'Rail', distance: '1.2 miles', driveTime: '7 min' },
    { name: 'Bus Terminal', type: 'Public Transit', distance: '0.8 miles', driveTime: '5 min' },
    { name: 'International Airport', type: 'Airport', distance: '12.5 miles', driveTime: '22 min' },
    { name: 'Harbor Pier', type: 'Port', distance: '0.3 miles', driveTime: '3 min' },
  ],
  tenants: [
    { name: 'Microsoft Regional HQ', type: 'Tech', distance: '1.8 miles', driveTime: '8 min' },
    { name: 'University Medical Center', type: 'Healthcare', distance: '2.2 miles', driveTime: '10 min' },
    { name: 'Global Financial Services', type: 'Finance', distance: '0.7 miles', driveTime: '4 min' },
    { name: 'Oceanside Mall', type: 'Retail', distance: '3.5 miles', driveTime: '12 min' },
    { name: 'Tech Innovation Hub', type: 'Tech', distance: '1.1 miles', driveTime: '6 min' },
  ],
  amenities: [
    { name: 'Waterfront Park', type: 'Recreation', distance: '0.2 miles', driveTime: '2 min' },
    { name: 'Downtown Shopping District', type: 'Retail', distance: '1.3 miles', driveTime: '7 min' },
    { name: 'Central Library', type: 'Public', distance: '1.0 miles', driveTime: '5 min' },
    { name: 'Fine Arts Museum', type: 'Cultural', distance: '1.6 miles', driveTime: '9 min' },
    { name: 'Restaurant Row', type: 'Dining', distance: '0.8 miles', driveTime: '4 min' },
  ],
  services: [
    { name: 'City Hospital', type: 'Healthcare', distance: '2.5 miles', driveTime: '11 min' },
    { name: 'Police Headquarters', type: 'Security', distance: '1.5 miles', driveTime: '7 min' },
    { name: 'Fire Station', type: 'Emergency', distance: '0.9 miles', driveTime: '5 min' },
    { name: 'City Hall', type: 'Government', distance: '1.4 miles', driveTime: '8 min' },
    { name: 'Post Office', type: 'Services', distance: '1.1 miles', driveTime: '6 min' },
  ],
}

// Categories for tab navigation
const PROXIMITY_CATEGORIES = [
  { id: 'transportation', label: 'Transportation', icon: '🚆' },
  { id: 'tenants', label: 'Major Tenants', icon: '🏢' },
  { id: 'amenities', label: 'Amenities', icon: '🏝️' },
  { id: 'services', label: 'Services', icon: '🏥' },
]

const ProximityInsights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('transportation')

  const currentData = PROXIMITY_DATA[activeCategory as keyof typeof PROXIMITY_DATA] || []

  return (
    <Card title="Proximity Insights">
      <div className="space-y-4">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto space-x-4 pb-2">
          {PROXIMITY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Proximity Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drive Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((item, index) => (
                <tr key={index}>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{item.distance}</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{item.driveTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-xs text-gray-500 uppercase">Walk Score</div>
            <div className="flex items-center mt-1">
              <div className="text-xl font-semibold text-primary mr-2">87/100</div>
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Excellent</div>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <div className="text-xs text-gray-500 uppercase">Transit Score</div>
            <div className="flex items-center mt-1">
              <div className="text-xl font-semibold text-primary mr-2">92/100</div>
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Excellent</div>
            </div>
          </div>
        </div>

        {/* Proximity Insights */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Key Insights</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Property is <span className="font-medium">exceptionally well-connected</span> to transportation infrastructure</li>
            <li>Major employers within <span className="font-medium">2-mile radius</span> employ over 15,000 workers</li>
            <li><span className="font-medium">Waterfront adjacency</span> provides premium recreational amenity not available to competitors</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default ProximityInsights 