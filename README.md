# Location Analysis

A Next.js application for analyzing and visualizing location data for real estate properties. The application helps users evaluate properties based on various metrics including local amenities, demographic trends, nearby schools, and more.

## Features

- **Property Details**: View detailed information about properties, including images, features, and descriptions
- **Local Amenities**: Explore nearby dining, shopping, groceries, and entertainment options
- **Neighborhood Information**: Access demographic data, walkability scores, and transit options
- **Market Trends**: Analyze supply pipeline, land comparables, and market insights
- **School Information**: Review nearby schools with ratings and educational metrics

## Tech Stack

- **Frontend**: React, Next.js 14, TypeScript
- **Styling**: Tailwind CSS
- **Data Visualization**: Chart.js
- **Images**: Next.js Image Optimization

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
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

The project is ready to be deployed on Vercel. Simply connect your GitHub repository to Vercel and deploy.

## License

This project is licensed under the MIT License. 