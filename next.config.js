module.exports = {
    eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
    experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },

    images: {
    deviceSizes: [640, 750, 828, 1080, 1200,],
    formats: ['image/avif', 'image/webp'],
    domains:['src/']
  },
}
