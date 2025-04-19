'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// Mock data for land comparables
const LAND_COMPS = [
  { 
    id: 1, 
    address: '280 Richards', 
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=80&h=60&auto=format&fit=crop',
    submarket: 'Brooklyn, NY', 
    date: 'Mar-23', 
    sf: '54,000', 
    price: '$12,500,000',
    pricePSF: '$231',
    capRate: '5.0%',
    tenant: 'Thor Equities',
    seller: 'JLL',
    type: 'Industrial',
  },
  { 
    id: 2, 
    address: '39 Eiglehart Road', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=60&auto=format&fit=crop',
    submarket: 'Hoboken, NJ', 
    date: 'Oct-23', 
    sf: '43,000', 
    price: '$9,800,000',
    pricePSF: '$228',
    capRate: '5.1%',
    tenant: 'FedEx',
    seller: 'Blackstone',
    type: 'Industrial',
  },
  { 
    id: 3, 
    address: '1 Division Road', 
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=80&h=60&auto=format&fit=crop',
    submarket: 'Queens, NY', 
    date: 'Jun-24', 
    sf: '65,000', 
    price: '$15,700,000',
    pricePSF: '$242',
    capRate: '5.0%',
    tenant: 'Berry Plastics',
    seller: 'Cushman',
    type: 'Warehouse',
  },
  { 
    id: 4, 
    address: 'Rayfer 455 Business Park', 
    image: 'https://images.unsplash.com/photo-1577538560486-5427c78df9d5?w=80&h=60&auto=format&fit=crop',
    submarket: 'Brooklyn, NY', 
    date: 'May-23', 
    sf: '35,000', 
    price: '$7,500,000',
    pricePSF: '$214',
    capRate: '5.1%',
    tenant: 'Dr. Pepper',
    seller: 'Creation Equity',
    type: 'Industrial',
  },
]

// Sorting options
const SORT_OPTIONS = [
  { value: 'date', label: 'Date (Newest)' },
  { value: 'pricePSF', label: 'Price PSF (Highest)' },
  { value: 'capRate', label: 'Cap Rate (Lowest)' },
]

// Market data
const MARKET_DATA = {
  avgPricePSF: '$226',
  avgCapRate: '5.05%',
  yearlyChange: '+8.4%',
  submarketPremium: '+12%'
}

const LandComparables: React.FC = () => {
  const [sortBy, setSortBy] = useState('date')
  
  return (
    <div className="space-y-6">
      {/* Market Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Avg Price PSF</h4>
          <div className="text-2xl font-semibold">{MARKET_DATA.avgPricePSF}</div>
          <div className="flex items-center text-xs text-accent mt-1">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            {MARKET_DATA.yearlyChange} YoY
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Avg Cap Rate</h4>
          <div className="text-2xl font-semibold">{MARKET_DATA.avgCapRate}</div>
          <div className="flex items-center text-xs text-danger mt-1">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
            </svg>
            -0.2% YoY
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Brooklyn Premium</h4>
          <div className="text-2xl font-semibold">{MARKET_DATA.submarketPremium}</div>
          <div className="text-xs text-gray-500 mt-1">vs. regional average</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Recent Sales</h4>
          <div className="text-2xl font-semibold">{LAND_COMPS.length}</div>
          <div className="text-xs text-gray-500 mt-1">within 5 miles</div>
        </div>
      </div>
      
      {/* Sort Controls */}
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-semibold text-gray-700">Sale Comparables</h4>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-200 rounded-md shadow-sm px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Comparables List */}
      <div className="space-y-4">
        {LAND_COMPS.map((comp) => (
          <div key={comp.id} className="flex items-start bg-white rounded-lg border border-gray-100 overflow-hidden">
            <div className="w-20 h-16 bg-gray-200 flex-shrink-0 relative">
              <Image 
                src={comp.image} 
                alt={comp.address}
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
                {comp.address.charAt(0)}
              </div>
            </div>
            <div className="p-3 flex-grow">
              <div className="flex justify-between">
                <h5 className="font-medium text-gray-900">{comp.address}</h5>
                <span className="text-sm text-gray-500">Date: {comp.date}</span>
              </div>
              <div className="text-sm text-gray-500">Submarket: {comp.submarket}</div>
              
              <div className="grid grid-cols-4 mt-2 gap-x-4 text-sm">
                <div>
                  <span className="text-gray-500">SF: </span>
                  <span className="font-medium">{comp.sf}</span>
                </div>
                <div>
                  <span className="text-gray-500">PSF: </span>
                  <span className="font-medium">{comp.pricePSF}</span>
                </div>
                <div>
                  <span className="text-gray-500">Cap: </span>
                  <span className="font-medium">{comp.capRate}</span>
                </div>
                <div>
                  <span className="text-gray-500">Tenant: </span>
                  <span className="font-medium">{comp.tenant}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
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
          <li>Subject property has a <span className="font-medium text-primary">+2.2% premium</span> to market average PSF due to location and tenant quality</li>
          <li>Brooklyn continues to outperform other boroughs with <span className="font-medium text-primary">12% higher values</span> for comparable industrial assets</li>
          <li>Limited comparable sales indicate <span className="font-medium text-primary">tight inventory</span> and high investor demand</li>
        </ul>
      </div>
    </div>
  )
}

export default LandComparables 