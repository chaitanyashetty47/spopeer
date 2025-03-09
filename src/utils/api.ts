export const getApiUrl = () => {
  // In production, use relative URLs which will be handled by Vercel's rewrites
  if (process.env.NODE_ENV === 'production') {
    return '/api';
  }
  // In development, use the local server
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
}; 