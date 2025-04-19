'use client'

import React, { useState } from 'react'
import Card from '../ui/Card'

// Mock zoning data
const ZONING_DATA = {
  primaryZone: {
    code: 'MU-2',
    name: 'Mixed-Use Medium Density',
    description: 'Allows for medium density mixed-use development with retail, office, and residential uses.',
    allowed: ['Residential', 'Commercial', 'Retail', 'Office', 'Hotel'],
    restricted: ['Industrial', 'Manufacturing', 'Warehousing'],
    maxHeight: '200 feet',
    maxFAR: '6.0',
    maxLotCoverage: '70%',
    minSetbacks: { front: '10 ft', sides: '15 ft', rear: '20 ft' },
  },
  overlays: [
    {
      code: 'WFD',
      name: 'Waterfront Development',
      description: 'Special overlay for properties adjacent to water bodies, requiring public access and view corridors.',
      requirements: [
        'Public waterfront access along 75% of water frontage',
        'View corridors at minimum of every 200 feet',
        'Ground floor activation requirements',
        'Special environmental reviews',
      ],
    },
    {
      code: 'HCD',
      name: 'Historic Character District',
      description: 'Overlay requiring design compatibility with area historic character.',
      requirements: [
        'Design review for architectural compatibility',
        'Materials restrictions',
        'Special signage regulations',
        'Adaptive reuse incentives',
      ],
    },
  ],
}

// Municipal links
const MUNICIPAL_LINKS = [
  { name: 'City Zoning Code', url: 'https://www.cityplanning.gov/zoning' },
  { name: 'Development Guide', url: 'https://www.cityplanning.gov/development' },
  { name: 'Building Permit Portal', url: 'https://www.cityplanning.gov/permits' },
  { name: 'Environmental Regulations', url: 'https://www.cityplanning.gov/environment' },
  { name: 'Zoning Map', url: 'https://www.cityplanning.gov/map' },
]

type TabType = 'primary' | 'overlays';

const ZoningOverlays: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('primary')

  return (
    <Card title="Zoning Information">
      <div className="space-y-4">
        {/* Zoning Navigation */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              className={`py-3 px-1 font-medium text-sm ${
                activeTab === 'primary' ? 'tab-active' : 'tab-inactive'
              }`}
              onClick={() => setActiveTab('primary')}
            >
              Primary Zoning
            </button>
            <button
              className={`py-3 px-1 font-medium text-sm ${
                activeTab === 'overlays' ? 'tab-active' : 'tab-inactive'
              }`}
              onClick={() => setActiveTab('overlays')}
            >
              Overlay Districts
            </button>
          </nav>
        </div>

        {/* Primary Zoning Content */}
        {activeTab === 'primary' && (
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-primary text-white text-xl font-bold px-3 py-2 rounded-md mr-3">
                {ZONING_DATA.primaryZone.code}
              </div>
              <div className="text-lg font-medium text-gray-800">
                {ZONING_DATA.primaryZone.name}
              </div>
            </div>

            <p className="text-sm text-gray-600">{ZONING_DATA.primaryZone.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Allowed Uses</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {ZONING_DATA.primaryZone.allowed.map((use, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="text-accent">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Restricted Uses</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {ZONING_DATA.primaryZone.restricted.map((use, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="text-danger">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 uppercase">Max Height</div>
                <div className="font-semibold text-gray-900">{ZONING_DATA.primaryZone.maxHeight}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 uppercase">Max FAR</div>
                <div className="font-semibold text-gray-900">{ZONING_DATA.primaryZone.maxFAR}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 uppercase">Lot Coverage</div>
                <div className="font-semibold text-gray-900">{ZONING_DATA.primaryZone.maxLotCoverage}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-xs text-gray-500 uppercase">Min Setbacks</div>
                <div className="font-semibold text-gray-900">
                  {ZONING_DATA.primaryZone.minSetbacks.front}/{ZONING_DATA.primaryZone.minSetbacks.sides}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overlay Districts Content */}
        {activeTab === 'overlays' && (
          <div className="space-y-6">
            {ZONING_DATA.overlays.map((overlay, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-gray-100 text-primary text-lg font-bold px-3 py-2 rounded-md mr-3">
                    {overlay.code}
                  </div>
                  <div className="text-md font-medium text-gray-800">
                    {overlay.name}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">{overlay.description}</p>

                <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Requirements</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {overlay.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Municipal Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase text-gray-500 mb-3">Municipal References</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {MUNICIPAL_LINKS.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-2 text-sm text-primary hover:bg-gray-50 rounded"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Zoning Insights */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Key Considerations</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>Development potential of <span className="font-medium">up to 480,000 SF</span> based on site size and FAR</li>
            <li>Waterfront overlay <span className="font-medium">increases costs but adds value</span> through premium amenities</li>
            <li>Historic overlay <span className="font-medium">requires special design consideration</span> but may qualify for tax incentives</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default ZoningOverlays 