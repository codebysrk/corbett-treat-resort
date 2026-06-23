const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],

  images: {
    formats: ["image/avif", "image/webp"],

    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  experimental: {
    optimizeCss: false,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
        ]
      }
    ];
  },
};

export default nextConfig;
