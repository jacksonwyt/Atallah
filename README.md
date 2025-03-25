# Atallah RV Dealer Website

## Environment Variables Setup

This project uses environment variables for configuration. Here's how to set them up:

### Local Development

1. Create a `.env.local` file in the root directory:

```
# API Configuration
NEXT_PUBLIC_API_URL=https://api.truervs.com

# Feature Flags
NEXT_PUBLIC_ENABLE_AI_HELPER=true

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXX-Y

# Other Configuration
NEXT_PUBLIC_MAX_SEARCH_RESULTS=24
NEXT_PUBLIC_DEFAULT_LOCATION=Denver, CO
```

2. Run the development server:

```bash
npm install
npm run dev
```

### Vercel Deployment

To set environment variables in Vercel:

1. In your Vercel dashboard, go to your project.
2. Navigate to Settings > Environment Variables.
3. Add each environment variable with the "NEXT_PUBLIC_" prefix for any variable that needs to be accessible in the browser:
   - NEXT_PUBLIC_API_URL
   - NEXT_PUBLIC_ENABLE_AI_HELPER
   - NEXT_PUBLIC_ANALYTICS_ID
   - NEXT_PUBLIC_MAX_SEARCH_RESULTS
   - NEXT_PUBLIC_DEFAULT_LOCATION

4. Click "Save" to apply the changes.
5. Redeploy your project for the changes to take effect:

```bash
npm run deploy
```

### Available Environment Variables

| Variable | Description | Default Value |
|----------|-------------|---------------|
| NEXT_PUBLIC_API_URL | API endpoint for backend services | https://api.example.com |
| NEXT_PUBLIC_ENABLE_AI_HELPER | Enable/disable AI helper feature | true |
| NEXT_PUBLIC_ANALYTICS_ID | Google Analytics or other tracking ID | (empty) |
| NEXT_PUBLIC_MAX_SEARCH_RESULTS | Maximum number of search results to display | 20 |
| NEXT_PUBLIC_DEFAULT_LOCATION | Default location for search | Mountain View, CA |

## Deployment

This project is deployed at [attalah.vercel.app](https://attalah.vercel.app). 