'use client'

import React from 'react'
import Image from 'next/image'

// School data
const SCHOOLS = [
  {
    name: "Lincoln Elementary School",
    type: "Public Elementary",
    grades: "K-5",
    distance: "0.4 miles",
    rating: 9.2,
    students: 423,
    ratio: "18:1",
    imgSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&auto=format&fit=crop"
  },
  {
    name: "Washington Middle School",
    type: "Public Middle",
    grades: "6-8",
    distance: "0.8 miles",
    rating: 8.7,
    students: 682,
    ratio: "22:1",
    imgSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&auto=format&fit=crop"
  },
  {
    name: "Roosevelt High School",
    type: "Public High",
    grades: "9-12",
    distance: "1.2 miles",
    rating: 8.9,
    students: 1247,
    ratio: "24:1",
    imgSrc: "https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?w=800&h=600&auto=format&fit=crop"
  },
  {
    name: "Montessori Academy",
    type: "Private",
    grades: "K-8",
    distance: "0.9 miles",
    rating: 9.6,
    students: 215,
    ratio: "12:1",
    imgSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&auto=format&fit=crop"
  }
]

// Education metrics
const EDUCATION_METRICS = [
  { 
    label: 'District Rating', 
    value: '8.5/10', 
    change: '+0.3 pts', 
    trend: 'up' 
  },
  { 
    label: 'College Readiness', 
    value: '82%', 
    change: '+4%', 
    trend: 'up' 
  },
  { 
    label: 'Avg. Test Scores', 
    value: '76%', 
    change: '+2%', 
    trend: 'up' 
  },
  { 
    label: 'Graduation Rate', 
    value: '94%', 
    change: '+1%', 
    trend: 'up' 
  }
]

const NearbySchools: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Education Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {EDUCATION_METRICS.map((metric, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">{metric.label}</h4>
            <div className="text-2xl font-semibold">{metric.value}</div>
            <div className={`flex items-center text-xs mt-1 ${metric.trend === 'up' ? 'text-accent' : 'text-danger'}`}>
              {metric.trend === 'up' ? (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
              )}
              {metric.change} YoY
            </div>
          </div>
        ))}
      </div>

      {/* School Listings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-700">Nearby Schools</h3>
        {SCHOOLS.map((school, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-100 p-4 flex flex-col md:flex-row">
            <div className="w-full md:w-32 h-24 relative rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-4">
              <Image 
                src={school.imgSrc} 
                alt={school.name} 
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 128px"
                className="rounded-lg"
                onError={(e) => {
                  // Fall back to a colored div on error
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.style.display = 'none';
                }}
              />
              <div className={`absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-gray-500 hidden image-fallback`}>
                {school.name.charAt(0)}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-primary">{school.name}</h4>
                  <p className="text-sm text-gray-500">{school.type} • {school.grades} • {school.distance}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="flex items-center">
                    <div className="bg-primary-light rounded-full px-3 py-1 text-sm font-bold text-primary">
                      {school.rating}/10
                    </div>
                    <span className="text-xs ml-2 text-gray-500">GreatSchools</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 mt-3">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                  <span className="text-xs">{school.students} students</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-xs">{school.ratio} teacher ratio</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-xs">{school.distance}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Insights */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Education Insights
        </h4>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>The property is located in the <span className="font-medium text-primary">Lincoln School District</span>, which is ranked in the top 15% of districts statewide</li>
          <li>Lincoln Elementary School is <span className="font-medium text-primary">within walking distance</span> (0.4 miles) from the property</li>
          <li>The district has seen <span className="font-medium text-primary">consistent improvement</span> in test scores over the past 3 years</li>
          <li>Roosevelt High School has strong <span className="font-medium text-primary">college preparatory programs</span> with 86% of graduates pursuing higher education</li>
          <li>The area offers <span className="font-medium text-primary">diverse educational options</span> including public, private, and specialized schools</li>
        </ul>
      </div>

      {/* Educational Programs */}
      <div className="bg-white p-4 rounded-lg border border-gray-100">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Notable Educational Programs</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-medium">STEM Focus</h5>
              <p className="text-xs text-gray-700 mt-1">Advanced programs in science, technology, engineering and mathematics</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-medium">Arts & Music</h5>
              <p className="text-xs text-gray-700 mt-1">Award-winning visual and performing arts programs</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.20l-.31 1.242c-.412 1.65-1.646 2.958-3.213 3.662a7.34 7.34 0 00-1.22-1.79 5.34 5.34 0 012.421-1.845L7 8V7H4a1 1 0 110-2h3V3a1 1 0 011-1zm3 6a1 1 0 011-1h5a1 1 0 110 2h-1.566l.015.033c.093.21.18.422.256.636a8.01 8.01 0 11-15.41 0c.075-.214.163-.425.256-.636L10.566 8H9a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-medium">AP & IB Programs</h5>
              <p className="text-xs text-gray-700 mt-1">College-level curriculum and international baccalaureate options</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-orange-100 p-2 rounded-lg mr-3">
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h5 className="text-sm font-medium">Special Education</h5>
              <p className="text-xs text-gray-700 mt-1">Comprehensive support services for diverse learning needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NearbySchools 