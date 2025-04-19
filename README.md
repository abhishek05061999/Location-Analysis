# Location Analysis

A comprehensive Next.js application for analyzing real estate properties and their surroundings. This tool helps investors and real estate professionals make data-driven decisions by providing detailed insights about property locations, neighborhood amenities, market trends, and more.

## Features

- **Property Details**: Comprehensive property information including specifications, images, and descriptions
- **Local Amenities**: Interactive map showing nearby dining, shopping, groceries, and entertainment options
- **Neighborhood Analysis**: Demographic data, walkability scores, transit options, and local insights
- **Market Intelligence**: 
  - Supply pipeline visualization
  - Land comparables with price analysis
  - Market trends and forecasts
- **Education**: Detailed information about nearby schools with ratings and performance metrics
- **Interactive Visualization**: Charts and graphs for better data comprehension
- **Responsive Design**: Optimized for both desktop and mobile viewing

## Technology Stack

- **Frontend Framework**: React with Next.js 14
- **Language**: TypeScript for type safety and better developer experience
- **Styling**: Tailwind CSS for responsive and utility-first styling
- **Data Visualization**: Chart.js with react-chartjs-2
- **Images**: Next.js Image component with optimization
- **State Management**: React Context API and Hooks
- **Development Tools**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhishek05061999/Location-Analysis.git
   cd Location-Analysis
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_API_URL=your_api_url_here
   ```

4. Run the development server:
   ```bash
   npm run dev -- -p 3005
   # or
   yarn dev -p 3005
   ```

5. Open [http://localhost:3005](http://localhost:3005) in your browser to see the application.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── location/     # Location-specific components
│   └── ui/           # Reusable UI components
├── styles/           # Global styles
└── types/            # TypeScript type definitions
```

