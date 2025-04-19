'use client'

import React, { useState } from 'react'
import PropertyDetails from '@/components/location/PropertyDetails'
import LocationMap from '@/components/location/LocationMap'
import NeighborhoodDetail from '@/components/location/NeighborhoodDetail'

const PropertyPage = ({ params }: { params: { id: string } }) => {
  // In a real app, you would fetch property data based on the ID
  const propertyId = params.id
  const [activeTab, setActiveTab] = useState<'property' | 'location' | 'neighborhood'>('property')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="mb-6 bg-white rounded-lg border border-gray-100 p-2 flex space-x-1">
          <button
            onClick={() => setActiveTab('property')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'property' 
                ? 'bg-blue-50 text-blue-700' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            Property Details
          </button>
          <button
            onClick={() => setActiveTab('location')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'location' 
                ? 'bg-blue-50 text-blue-700' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            Location & Amenities
          </button>
          <button
            onClick={() => setActiveTab('neighborhood')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'neighborhood' 
                ? 'bg-blue-50 text-blue-700' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            Neighborhood
          </button>
        </div>
        
        {/* Tab Content */}
        <div>
          {activeTab === 'property' && <PropertyDetails />}
          {activeTab === 'location' && <LocationMap />}
          {activeTab === 'neighborhood' && <NeighborhoodDetail />}
        </div>
      </div>
    </div>
  )
}

export default PropertyPage 