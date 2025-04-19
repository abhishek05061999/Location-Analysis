'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// Nearby places data
const NEARBY_PLACES = [
  {
    id: 1,
    name: 'Central Park Elementary',
    category: 'school',
    distance: '0.4 miles',
    minutes: '8 min walk',
    rating: 4.3,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Westside High School',
    category: 'school',
    distance: '0.8 miles',
    minutes: '16 min walk',
    rating: 4.1,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Maple Street Cafe',
    category: 'restaurant',
    distance: '0.2 miles',
    minutes: '4 min walk',
    rating: 4.7,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Fresh Market Grocery',
    category: 'shopping',
    distance: '0.5 miles',
    minutes: '10 min walk',
    rating: 4.5,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    )
  },
  {
    id: 5,
    name: 'Community Park',
    category: 'park',
    distance: '0.3 miles',
    minutes: '6 min walk',
    rating: 4.8,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 6,
    name: 'Metro Bus Station',
    category: 'transportation',
    distance: '0.3 miles',
    minutes: '6 min walk',
    rating: 4.0,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a2.5 2.5 0 014.9 0H20a1 1 0 001-1V9a3 3 0 00-3-3h-.17a.995.995 0 01-.77-.376l-1.13-1.353A2 2 0 0014.23 3H6a3 3 0 00-3 1z" />
      </svg>
    )
  },
  {
    id: 7,
    name: 'Downtown Medical Center',
    category: 'health',
    distance: '0.9 miles',
    minutes: '18 min walk',
    rating: 4.6,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 8,
    name: 'City Library',
    category: 'education',
    distance: '0.7 miles',
    minutes: '14 min walk',
    rating: 4.9,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    )
  }
]

// Categories for filtering
const PLACE_CATEGORIES = [
  { id: 'all', name: 'All Places' },
  { id: 'school', name: 'Schools' },
  { id: 'restaurant', name: 'Restaurants' },
  { id: 'shopping', name: 'Shopping' },
  { id: 'park', name: 'Parks' },
  { id: 'transportation', name: 'Transportation' },
  { id: 'health', name: 'Healthcare' }
]

const LocationMap: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredPlaces = selectedCategory === 'all' 
    ? NEARBY_PLACES 
    : NEARBY_PLACES.filter(place => place.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Map Section */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Location Map</h3>
        <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
          {/* Map Placeholder - in a real app this would be integrated with Google Maps or a similar service */}
          <div className="absolute inset-0 bg-blue-50">
            <Image 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=800&auto=format&fit=crop"
              alt="Location Map"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={true}
              onError={(e) => {
                // Fall back to a colored div on error
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                target.style.display = 'none';
              }}
            />
            <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-blue-300 hidden image-fallback`}>
              Map View
            </div>
            
            {/* Property pin marker */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Places */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h3 className="text-lg font-semibold mb-2 sm:mb-0">Nearby Places</h3>
          
          {/* Category filter */}
          <div className="flex overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
            {PLACE_CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap px-3 py-1 rounded-full text-sm mr-2 ${
                  selectedCategory === category.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Places list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPlaces.map(place => (
            <div key={place.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mr-3">
                  {place.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{place.name}</h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="mr-2">{place.distance}</span>
                    <span className="mr-2">•</span>
                    <span>{place.minutes}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(place.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-600">{place.rating.toFixed(1)}</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Walk Score Section */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Location Scores</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Walk Score */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              <h4 className="font-medium">Walk Score</h4>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-blue-700">92</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Walker's Paradise</p>
                <p className="text-sm text-gray-500">Daily errands do not require a car</p>
              </div>
            </div>
          </div>
          
          {/* Transit Score */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.5a2.5 2.5 0 014.9 0H20a1 1 0 001-1V9a3 3 0 00-3-3h-.17a.995.995 0 01-.77-.376l-1.13-1.353A2 2 0 0014.23 3H6a3 3 0 00-3 1z" />
              </svg>
              <h4 className="font-medium">Transit Score</h4>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-blue-700">78</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Excellent Transit</p>
                <p className="text-sm text-gray-500">Transit is convenient for most trips</p>
              </div>
            </div>
          </div>
          
          {/* Bike Score */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <h4 className="font-medium">Bike Score</h4>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-blue-700">85</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Very Bikeable</p>
                <p className="text-sm text-gray-500">Biking is convenient for most trips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationMap 