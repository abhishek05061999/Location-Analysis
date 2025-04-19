'use client'

import React from 'react'
import Image from 'next/image'

// Neighborhood metrics data
const NEIGHBORHOOD_METRICS = [
  {
    label: 'Crime Rate',
    value: '12%',
    change: '-3%',
    trend: 'down',
    description: 'Lower than city average',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm1-3a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: 'Property Value',
    value: '$720K',
    change: '+5.8%',
    trend: 'up',
    description: 'Yearly appreciation',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    )
  },
  {
    label: 'Air Quality',
    value: '42 AQI',
    change: '+3',
    trend: 'up',
    description: 'Good air quality',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
      </svg>
    )
  },
  {
    label: 'Noise Level',
    value: '45 dB',
    change: '-2 dB',
    trend: 'down',
    description: 'Lower than city average',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
      </svg>
    )
  }
]

// Demographics data
const DEMOGRAPHICS_DATA = {
  age: [
    { label: 'Under 18', value: 14 },
    { label: '18-34', value: 32 },
    { label: '35-54', value: 30 },
    { label: '55+', value: 24 }
  ],
  education: [
    { label: 'High School', value: 12 },
    { label: 'Some College', value: 24 },
    { label: 'Bachelor\'s', value: 38 },
    { label: 'Graduate', value: 26 }
  ],
  income: [
    { label: '<$50k', value: 18 },
    { label: '$50-100k', value: 34 },
    { label: '$100-150k', value: 28 },
    { label: '$150k+', value: 20 }
  ]
}

// Neighborhood images
const NEIGHBORHOOD_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=600&h=400&auto=format&fit=crop',
    alt: 'Local park with walking trails and playground',
    caption: 'Central Park'
  },
  {
    src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=600&h=400&auto=format&fit=crop',
    alt: 'Tree-lined residential street with historic homes',
    caption: 'Oak Avenue'
  },
  {
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&auto=format&fit=crop',
    alt: 'Downtown shopping district with boutique stores',
    caption: 'Main Street Shopping'
  },
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&auto=format&fit=crop',
    alt: 'Community center hosting local events',
    caption: 'Community Center'
  }
]

const NeighborhoodDetail: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Neighborhood Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {NEIGHBORHOOD_METRICS.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 flex items-start">
            <div className="mr-3 p-2 bg-blue-50 rounded-md text-blue-600">
              {metric.icon}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500">{metric.label}</h4>
              <div className="flex items-center">
                <span className="text-lg font-semibold">{metric.value}</span>
                <div className={`ml-2 px-1.5 py-0.5 rounded text-xs font-medium flex items-center ${
                  metric.trend === 'up' 
                    ? 'bg-green-50 text-green-600' 
                    : 'bg-red-50 text-red-600'
                }`}>
                  {metric.trend === 'up' ? (
                    <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  {metric.change}
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{metric.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Neighborhood Description */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-3">About Bellevue Heights</h3>
        <p className="text-gray-700 mb-4">
          Bellevue Heights is a vibrant, family-friendly neighborhood known for its tree-lined streets, historic architecture, and strong sense of community. Established in the 1920s, this area has evolved into one of the city's most desirable locations, offering a perfect balance between urban convenience and suburban tranquility.
        </p>
        <p className="text-gray-700 mb-4">
          Residents enjoy access to excellent schools, well-maintained parks, and a diverse array of local businesses. The neighborhood hosts various community events throughout the year, including summer concerts in the park, a farmer's market, and seasonal festivals that bring neighbors together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {NEIGHBORHOOD_IMAGES.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 600px"
                  onError={(e) => {
                    // Fall back to a colored div on error
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.style.display = 'none';
                  }}
                />
                <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-gray-500 hidden image-fallback`}>
                  {image.caption.charAt(0)}
                </div>
              </div>
              <div className="bg-gray-50 p-2 text-sm text-center font-medium text-gray-700">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demographics */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Demographics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Age Distribution */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Age Distribution</h4>
            <div className="space-y-3">
              {DEMOGRAPHICS_DATA.age.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.label}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Education Level</h4>
            <div className="space-y-3">
              {DEMOGRAPHICS_DATA.education.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.label}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Income */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Household Income</h4>
            <div className="space-y-3">
              {DEMOGRAPHICS_DATA.income.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.label}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Neighborhood Highlights */}
      <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Neighborhood Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-100">
            <h4 className="font-medium text-primary flex items-center mb-3">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Location & Accessibility
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                10 minutes to downtown by public transit
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Walking distance to parks and recreation areas
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Easy highway access for commuters
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Bike-friendly streets with dedicated lanes
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-100">
            <h4 className="font-medium text-primary flex items-center mb-3">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 17v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z" />
              </svg>
              Community & Lifestyle
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Active neighborhood association
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Regular community events and gatherings
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Family-friendly with excellent parks
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Diverse local businesses and dining options
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NeighborhoodDetail 