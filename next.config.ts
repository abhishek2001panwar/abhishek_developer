/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint warnings during production builds
    '@typescript-eslint/no-explicit-any': 'off', // Example rule to disable
  },
  images: {
    domains: ['images.unsplash.com' ,'assets.aceternity.com' ,'plus.unsplash.com'], // Add allowed image domains here
  },
};
