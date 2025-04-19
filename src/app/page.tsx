'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import LocationAnalysis from '@/components/LocationAnalysis'

// Mock navigation tabs for the deal screening
const TABS = [
  { id: 'overview', label: 'Deal Overview' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'location', label: 'Location' },
  { id: 'settings', label: 'Settings' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('location') // Default to location tab for this demo

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-primary font-display text-xl font-semibold">STARBOARD</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary text-sm font-medium">Dashboard</a>
              <a href="#" className="text-primary font-medium text-sm">Deals</a>
              <a href="#" className="text-gray-600 hover:text-primary text-sm font-medium">Analytics</a>
              <a href="#" className="text-gray-600 hover:text-primary text-sm font-medium">Models</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask me anything!"
                className="bg-gray-100 text-sm rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <div className="absolute left-3 top-2.5">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium text-sm">
              AD
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 w-16 h-16 rounded-md flex-shrink-0 mr-4 relative">
              <Image 
                src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=200&h=200&auto=format&fit=crop"
                alt="280 Richards Property" 
                fill
                sizes="64px"
                style={{ objectFit: "cover" }}
                className="rounded-md"
                onError={(e) => {
                  // Fall back to a colored div on error
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.style.display = 'none';
                }}
              />
              <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-gray-500 hidden image-fallback rounded-md`}>
                P
              </div>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900">280 Richards, Brooklyn, NY</h1>
              <p className="text-sm text-gray-500">Industrial Warehouse</p>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="btn btn-primary">Export to Model</button>
              <button className="btn btn-secondary">Generate Report</button>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-7 gap-6 mt-4">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">SF</span>
              <span className="font-semibold">357,151</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">Purchase Price PSF</span>
              <span className="font-semibold">$413.85</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">Cap Rate</span>
              <span className="font-semibold">5.0%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">Property Type</span>
              <span className="font-semibold">Industrial</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">Year Built</span>
              <span className="font-semibold">2021</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">Occupancy</span>
              <span className="font-semibold">100%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">Tenant</span>
              <span className="font-semibold">Amazon</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex px-6">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-4 px-4 font-medium text-sm ${
                    activeTab === tab.id ? 'tab-active' : 'tab-inactive'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'location' && <LocationAnalysis />}
            {activeTab !== 'location' && (
              <div className="p-6 bg-gray-100 rounded-lg text-gray-500 text-center border border-gray-200">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} tab content would appear here
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 