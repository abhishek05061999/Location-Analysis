'use client'

import React from 'react'
import Image from 'next/image'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Pie, Bar } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

// Mock data for nearby developments
const NEARBY_DEVELOPMENTS = [
  { 
    id: 1, 
    address: '400 Columbia', 
    image: 'https://images.unsplash.com/photo-1554435493-93422e8d1c46?w=80&h=60&auto=format&fit=crop',
    submarket: 'Brooklyn, NY', 
    date: 'Jun-23', 
    deliverySize: '120,000 sf', 
    type: 'Industrial',
    owner: 'CBRE',
    tenant: 'FedEx',
    psf: '$420',
    capRate: '5.1%',
  },
  { 
    id: 2, 
    address: '98 Mason', 
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=80&h=60&auto=format&fit=crop',
    submarket: 'Brooklyn, NY', 
    date: 'May-23', 
    deliverySize: '85,000 sf', 
    type: 'Warehouse',
    owner: 'JLL',
    tenant: 'DHL',
    psf: '$405',
    capRate: '5.3%',
  },
  { 
    id: 3, 
    address: '1 Harbor Road', 
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=80&h=60&auto=format&fit=crop',
    submarket: 'Brooklyn, NY', 
    date: 'Jun-24', 
    deliverySize: '95,000 sf', 
    type: 'Industrial',
    owner: 'Cushman',
    tenant: 'Berry Plastics',
    psf: '$415',
    capRate: '5.0%',
  },
]

// Property type mix data for pie chart
const propertyTypeData = {
  labels: ['Industrial', 'Multifamily', 'Office', 'Retail'],
  datasets: [
    {
      label: 'Property Types in Pipeline',
      data: [45, 25, 20, 10],
      backgroundColor: [
        'rgba(15, 82, 186, 0.8)', // primary
        'rgba(46, 139, 87, 0.8)', // accent
        'rgba(255, 165, 0, 0.8)', // warning
        'rgba(220, 20, 60, 0.8)', // danger
      ],
      borderWidth: 1,
    },
  ],
}

const SupplyPipeline: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">In Construction</h4>
          <div className="text-2xl font-semibold">250,000 SF</div>
          <div className="text-sm text-gray-500">Within 3 miles</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Planned</h4>
          <div className="text-2xl font-semibold">170,000 SF</div>
          <div className="text-sm text-gray-500">Within 3 miles</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Delivery Timeline</h4>
          <div className="text-2xl font-semibold">12-24 Months</div>
          <div className="text-sm text-gray-500">Average construction time</div>
        </div>
      </div>
      
      {/* Property Type Mix */}
      <div className="bg-white rounded-lg border border-gray-100 p-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Property Type Mix</h4>
        <div className="h-64">
          <Pie 
            data={propertyTypeData} 
            options={{ 
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    boxWidth: 15,
                    padding: 15,
                    font: {
                      size: 12
                    }
                  }
                }
              }
            }} 
          />
        </div>
      </div>
      
      {/* Nearby Developments */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Nearby Developments</h4>
        <div className="space-y-4">
          {NEARBY_DEVELOPMENTS.map((dev) => (
            <div key={dev.id} className="flex items-start bg-white rounded-lg border border-gray-100 overflow-hidden">
              <div className="w-20 h-16 bg-gray-200 flex-shrink-0 relative">
                <Image 
                  src={dev.image} 
                  alt={dev.address}
                  fill
                  sizes="80px"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    // Fall back to a colored div on error
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.style.display = 'none';
                  }}
                />
                <div className={`absolute inset-0 flex items-center justify-center text-white font-bold bg-gray-500 hidden image-fallback`}>
                  {dev.address.charAt(0)}
                </div>
              </div>
              <div className="p-3 flex-grow">
                <div className="flex justify-between">
                  <h5 className="font-medium text-gray-900">{dev.address}</h5>
                  <span className="text-sm text-gray-500">Delivery: {dev.date}</span>
                </div>
                <div className="text-sm text-gray-500">Submarket: {dev.submarket}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                    {dev.deliverySize}
                  </span>
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                    {dev.type}
                  </span>
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                    {dev.tenant}
                  </span>
                </div>
              </div>
            </div>
          ))}
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
          <li>The Brooklyn industrial market added <span className="font-medium text-primary">1.2 million sq ft</span> of new supply in the past two years</li>
          <li>Despite new supply, vacancy remains at a record low of <span className="font-medium text-primary">1.3%</span></li>
          <li>New developments are commanding <span className="font-medium text-primary">15-20%</span> premium over existing inventory</li>
        </ul>
      </div>
    </div>
  )
}

export default SupplyPipeline 