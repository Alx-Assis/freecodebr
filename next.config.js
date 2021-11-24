module.exports = {
    eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },

    images: {
    deviceSizes: [640, 750, 828, 1080, 1200,],
    formats: ['image/avif', 'image/webp'],
    domains:['src/']
  },
}
