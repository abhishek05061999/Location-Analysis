'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// Property features data
const PROPERTY_FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    name: 'Property Type',
    value: 'Single Family Home'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    name: 'Bedrooms',
    value: '4 Bedrooms'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
      </svg>
    ),
    name: 'Bathrooms',
    value: '2.5 Bathrooms'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
      </svg>
    ),
    name: 'Lot Size',
    value: '5,800 sq ft'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
        <path fillRule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
      </svg>
    ),
    name: 'Square Footage',
    value: '2,450 sq ft'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    name: 'Neighborhood',
    value: 'Bellevue Heights'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
      </svg>
    ),
    name: 'Year Built',
    value: '2018'
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
      </svg>
    ),
    name: 'Last Renovation',
    value: '2022'
  }
]

// Property images
const PROPERTY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&auto=format&fit=crop',
    alt: 'Property exterior front view',
    type: 'exterior'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=800&h=600&auto=format&fit=crop',
    alt: 'Spacious living room with fireplace',
    type: 'interior'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&auto=format&fit=crop',
    alt: 'Modern kitchen with island',
    type: 'interior'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=800&h=600&auto=format&fit=crop',
    alt: 'Master bedroom with ensuite bathroom',
    type: 'interior'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&h=600&auto=format&fit=crop',
    alt: 'Fenced backyard with patio',
    type: 'exterior'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&auto=format&fit=crop',
    alt: 'Updated bathroom with dual vanity',
    type: 'interior'
  }
]

// Property description
const PROPERTY_DESCRIPTION = {
  title: '123 Maple Avenue',
  description: 'This stunning contemporary home offers the perfect blend of modern design and comfortable living. Located in the sought-after Bellevue Heights neighborhood, this property features an open floor plan, high ceilings, and abundant natural light.',
  paragraph1: 'The main level showcases a gourmet kitchen with high-end stainless steel appliances, quartz countertops, and a large island perfect for entertaining. The adjacent living room features a gas fireplace and sliding doors that open to the beautifully landscaped backyard with a covered patio.',
  paragraph2: 'The upper level includes a spacious primary suite with a walk-in closet and a luxurious bathroom featuring a soaking tub and separate shower. Three additional bedrooms and a full bathroom complete this level.',
  paragraph3: 'Additional features include a two-car garage, energy-efficient windows, hardwood floors throughout the main level, and a partially finished basement that could serve as a home office or media room.',
  price: '$720,000',
  status: 'For Sale',
  listingAgent: 'Jane Smith',
  listingCompany: 'Premier Real Estate Group'
}

const PropertyDetails: React.FC = () => {
  const [activeImageId, setActiveImageId] = useState(PROPERTY_IMAGES[0].id)
  const [filterType, setFilterType] = useState<string | null>(null)

  const filteredImages = filterType
    ? PROPERTY_IMAGES.filter(image => image.type === filterType)
    : PROPERTY_IMAGES

  const activeImage = PROPERTY_IMAGES.find(image => image.id === activeImageId) || PROPERTY_IMAGES[0]

  return (
    <div className="space-y-6">
      {/* Property Header */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{PROPERTY_DESCRIPTION.title}</h2>
            <p className="text-gray-500">Bellevue Heights, Seattle, WA</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {PROPERTY_DESCRIPTION.status}
            </span>
            <div className="mt-2 text-xl font-bold text-primary">{PROPERTY_DESCRIPTION.price}</div>
          </div>
        </div>
      </div>

      {/* Property Gallery */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Property Gallery</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilterType(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                filterType === null 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType('interior')}
              className={`px-3 py-1 rounded-full text-sm ${
                filterType === 'interior' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setFilterType('exterior')}
              className={`px-3 py-1 rounded-full text-sm ${
                filterType === 'exterior' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Exterior
            </button>
          </div>
        </div>

        {/* Main image */}
        <div className="mb-4 relative h-80 rounded-lg overflow-hidden">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            priority={true}
            style={{ objectFit: 'cover' }}
            onError={(e) => {
              // Fall back to a colored div on error
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop
              target.style.display = 'none';
            }}
          />
          <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-2xl bg-gray-500 hidden image-fallback`}>
            {activeImage.alt.charAt(0)}
          </div>
        </div>

        {/* Thumbnail images */}
        <div className="grid grid-cols-6 gap-2">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setActiveImageId(image.id)}
              className={`relative rounded-md overflow-hidden h-20 ${
                image.id === activeImageId ? 'ring-2 ring-blue-500' : 'opacity-70'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 80px, 160px"
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  // Fall back to a colored div on error
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.style.display = 'none';
                }}
              />
              <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-lg bg-gray-500 hidden image-fallback`}>
                {image.alt.charAt(0)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Property Features */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Property Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PROPERTY_FEATURES.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mr-3">
                {feature.icon}
              </div>
              <div>
                <div className="text-xs text-gray-500">{feature.name}</div>
                <div className="font-medium">{feature.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Description */}
      <div className="bg-white rounded-lg p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-3">Property Description</h3>
        <p className="text-gray-700 mb-4 font-medium">
          {PROPERTY_DESCRIPTION.description}
        </p>
        <p className="text-gray-700 mb-4">
          {PROPERTY_DESCRIPTION.paragraph1}
        </p>
        <p className="text-gray-700 mb-4">
          {PROPERTY_DESCRIPTION.paragraph2}
        </p>
        <p className="text-gray-700">
          {PROPERTY_DESCRIPTION.paragraph3}
        </p>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&auto=format&fit=crop"
                alt={PROPERTY_DESCRIPTION.listingAgent}
                fill
                sizes="48px"
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  // Fall back to a colored div on error
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.style.display = 'none';
                }}
              />
              <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-lg bg-gray-500 hidden image-fallback`}>
                {PROPERTY_DESCRIPTION.listingAgent.charAt(0)}
              </div>
            </div>
            <div>
              <p className="font-medium">Listed by {PROPERTY_DESCRIPTION.listingAgent}</p>
              <p className="text-sm text-gray-500">{PROPERTY_DESCRIPTION.listingCompany}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails 