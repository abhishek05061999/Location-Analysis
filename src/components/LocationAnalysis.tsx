'use client'

import React, { useState } from 'react'
import SupplyPipeline from './location/SupplyPipeline'
import LandComparables from './location/LandComparables'
import DemographicTrends from './location/DemographicTrends'
import ProximityInsights from './location/ProximityInsights'
import ZoningOverlays from './location/ZoningOverlays'
import LocalAmenities from './location/LocalAmenities'
import NeighborhoodDetail from './location/NeighborhoodDetail'
import PropertyDetails from './location/PropertyDetails'
import LocationMap from './location/LocationMap'
import NearbySchools from './location/NearbySchools'

// Icons for tabs
const IconSupply = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
  </svg>
)

const IconLand = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
  </svg>
)

const IconDemographics = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z"></path>
  </svg>
)

const IconProximity = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
  </svg>
)

const IconZoning = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path>
  </svg>
)

// Location sections
const LOCATION_SECTIONS = [
  { 
    id: 'property', 
    label: 'Property Details', 
    component: <PropertyDetails /> 
  },
  { 
    id: 'location', 
    label: 'Location & Amenities', 
    component: <LocationMap /> 
  },
  { 
    id: 'neighborhood', 
    label: 'Neighborhood', 
    component: <NeighborhoodDetail /> 
  },
  { 
    id: 'amenities', 
    label: 'Local Amenities', 
    component: <LocalAmenities /> 
  },
  { 
    id: 'schools', 
    label: 'Schools', 
    component: <NearbySchools /> 
  },
  { 
    id: 'supplyPipeline', 
    label: 'Supply Pipeline', 
    component: <SupplyPipeline /> 
  },
  { 
    id: 'saleComparables', 
    label: 'Sale Comparables', 
    component: <LandComparables /> 
  },
  { 
    id: 'demographics', 
    label: 'Demographics', 
    component: <DemographicTrends /> 
  },
  { 
    id: 'proximity', 
    label: 'Proximity', 
    component: <ProximityInsights /> 
  },
  { 
    id: 'zoning', 
    label: 'Zoning', 
    component: <ZoningOverlays /> 
  },
]

const LocationAnalysis: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['property', 'location', 'neighborhood'])

  const toggleSection = (sectionId: string) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId))
    } else {
      setExpandedSections([...expandedSections, sectionId])
    }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Location Analysis Summary */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Location Analysis</h2>
        <p className="text-gray-700 mb-4">
          280 Richards, located in Brooklyn, aligns with HOFPP's strategy of acquiring prime logistics assets in Brooklyn's high-demand final mile submarkets. With 13 years remaining on the lease and 13% annual rent escalation, it offers stable, long-term cash flow. While single-tenant exposure is a risk, Amazon's strong balance sheet is a strong mitigant.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              <h3 className="font-medium">Market Quality</h3>
            </div>
            <p className="text-sm text-gray-600">Brooklyn's industrial market continues to show exceptional performance with 1.3% vacancy and 9.4% YoY rent growth.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
              </svg>
              <h3 className="font-medium">Value Drivers</h3>
            </div>
            <p className="text-sm text-gray-600">Strong tenant covenant (Amazon), strategic location with exceptional access to Brooklyn, Queens, and Manhattan consumer base.</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-warning mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
              <h3 className="font-medium">Risk Factors</h3>
            </div>
            <p className="text-sm text-gray-600">Single tenant exposure, limited ability to re-lease at current rates if Amazon vacates due to specialized building features.</p>
          </div>
        </div>
      </div>
      
      {/* Location Sections */}
      <div className="space-y-4">
        {LOCATION_SECTIONS.map((section) => (
          <div key={section.id} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
            <button 
              className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleSection(section.id)}
            >
              <h3 className="text-lg font-medium text-gray-900">{section.label}</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.includes(section.id) && (
              <div className="px-6 pb-6">
                {section.component}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LocationAnalysis 