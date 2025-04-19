'use client'

import React from 'react'
import Image from 'next/image'

// Amenity categories and data
const AMENITY_CATEGORIES = [
  {
    id: 'dining',
    name: 'Dining',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
        <path fillRule="evenodd" d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
    color: 'text-orange-600 bg-orange-100'
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    ),
    color: 'text-blue-600 bg-blue-100'
  },
  {
    id: 'groceries',
    name: 'Groceries',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
      </svg>
    ),
    color: 'text-green-600 bg-green-100'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 17v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z" />
      </svg>
    ),
    color: 'text-purple-600 bg-purple-100'
  }
]

const NEARBY_PLACES = [
  {
    name: "Harbor Coffee Shop",
    category: "dining",
    distance: "0.3 miles",
    rating: 4.7,
    reviewCount: 236,
    description: "Local coffee shop with artisanal pastries and specialty drinks",
    imgSrc: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&auto=format&fit=crop"
  },
  {
    name: "Riverview Market",
    category: "groceries",
    distance: "0.4 miles",
    rating: 4.5,
    reviewCount: 182,
    description: "Organic grocery store with local produce and prepared foods",
    imgSrc: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&auto=format&fit=crop"
  },
  {
    name: "Oak Street Shopping Center",
    category: "shopping",
    distance: "0.7 miles",
    rating: 4.3,
    reviewCount: 412,
    description: "Outdoor mall with retail stores and restaurants",
    imgSrc: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&h=600&auto=format&fit=crop"
  },
  {
    name: "City Park & Recreation Center",
    category: "entertainment",
    distance: "0.8 miles",
    rating: 4.8,
    reviewCount: 328,
    description: "Public park with tennis courts, playground, and walking trails",
    imgSrc: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=800&h=600&auto=format&fit=crop"
  },
  {
    name: "Bistro Bellevue",
    category: "dining",
    distance: "0.9 miles",
    rating: 4.6,
    reviewCount: 275,
    description: "French bistro with seasonal menu and outdoor seating",
    imgSrc: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&auto=format&fit=crop"
  },
  {
    name: "Central Cinema",
    category: "entertainment",
    distance: "1.2 miles",
    rating: 4.4,
    reviewCount: 196,
    description: "Movie theater with reclining seats and in-theater dining",
    imgSrc: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&auto=format&fit=crop"
  }
]

// Walkability metrics
const WALKABILITY_METRICS = [
  { 
    label: 'Walk Score', 
    value: '86/100', 
    description: 'Very Walkable',
    icon: (
      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    label: 'Transit Score', 
    value: '78/100', 
    description: 'Excellent Transit',
    icon: (
      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z" />
        <path fillRule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    label: 'Bike Score', 
    value: '92/100', 
    description: 'Biker\'s Paradise',
    icon: (
      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    )
  }
]

const LocalAmenities: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all')
  
  const filteredPlaces = activeCategory === 'all' 
    ? NEARBY_PLACES 
    : NEARBY_PLACES.filter(place => place.category === activeCategory)

  return (
    <div className="space-y-6">
      {/* Walkability Score Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WALKABILITY_METRICS.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-gray-100 flex items-center">
            <div className="mr-4">
              {metric.icon}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500">{metric.label}</h4>
              <div className="text-lg font-semibold">{metric.value}</div>
              <div className="text-xs text-gray-500">{metric.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Filter */}
      <div className="bg-gray-50 rounded-lg p-2 flex overflow-x-auto">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
            activeCategory === 'all' ? 'bg-white shadow' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          All Amenities
        </button>
        {AMENITY_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ml-2 whitespace-nowrap ${
              activeCategory === category.id ? 'bg-white shadow' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span className={`p-1 rounded-md mr-2 ${category.color}`}>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPlaces.map((place, index) => {
          const category = AMENITY_CATEGORIES.find(cat => cat.id === place.category)
          
          return (
            <div key={index} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              <div className="h-40 relative">
                <Image
                  src={place.imgSrc}
                  alt={place.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  onError={(e) => {
                    // Fall back to a colored div on error
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.style.display = 'none';
                  }}
                />
                <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-gray-500 ${!place.imgSrc ? 'block' : 'hidden image-fallback'}`}>
                  {place.name.charAt(0)}
                </div>
                <div className={`absolute top-3 left-3 ${category?.color} px-3 py-1 rounded-full flex items-center text-xs font-medium`}>
                  <span className="mr-1">{category?.icon}</span>
                  {category?.name}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold text-primary">{place.name}</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 text-accent mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {place.rating} ({place.reviewCount} reviews)
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-2">{place.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  {place.distance} from property
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Amenity Insights */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Neighborhood Insights
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-sm font-medium mb-2">Daily Convenience</h5>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Most errands can be accomplished <span className="font-medium text-primary">on foot</span></li>
              <li><span className="font-medium text-primary">4 grocery stores</span> within a 1-mile radius</li>
              <li>Pharmacy and medical clinic <span className="font-medium text-primary">within 5 minutes</span></li>
              <li>Several banks and ATMs <span className="font-medium text-primary">nearby</span></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-medium mb-2">Dining & Entertainment</h5>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li><span className="font-medium text-primary">20+ restaurants</span> within walking distance</li>
              <li>Variety of cuisines from casual to <span className="font-medium text-primary">fine dining</span></li>
              <li>Weekend farmers market <span className="font-medium text-primary">2 blocks away</span></li>
              <li>Arts district with galleries and theaters <span className="font-medium text-primary">nearby</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Transit Options */}
      <div className="bg-white rounded-lg p-4 border border-gray-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Transit Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z" />
                <path fillRule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-medium">Bus Lines</h5>
              <p className="text-xs text-gray-700 mt-1">4 bus lines within 2 blocks (routes 7, 14, 32, 43)</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-medium">Light Rail</h5>
              <p className="text-xs text-gray-700 mt-1">Downtown station 0.7 miles away (Blue & Green lines)</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-4a1 1 0 00-.293-.707l-2-2A1 1 0 0017 5h-3V4a1 1 0 00-1-1H3z" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-medium">Ride Services</h5>
              <p className="text-xs text-gray-700 mt-1">High availability of rideshare services (avg. wait: 3-5 min)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocalAmenities 