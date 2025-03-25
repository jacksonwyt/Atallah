// Environment Configuration
const config = {
  // Site information
  SITE_URL: 'attalah.vercel.app',
  
  // API endpoints
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
  
  // Feature flags
  ENABLE_AI_HELPER: process.env.NEXT_PUBLIC_ENABLE_AI_HELPER === 'true' || true,
  
  // Analytics
  ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID || '',
  
  // Other configuration
  MAX_SEARCH_RESULTS: parseInt(process.env.NEXT_PUBLIC_MAX_SEARCH_RESULTS || '20', 10),
  DEFAULT_LOCATION: process.env.NEXT_PUBLIC_DEFAULT_LOCATION || 'Mountain View, CA'
};

// Prevent modifications to the config object
Object.freeze(config);

// Make config available globally
window.APP_CONFIG = config;

// For ES modules
export default config; 