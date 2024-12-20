const { hostname } = require('os')

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'atiendo.ec',
      port: '',
      pathname: '/black/**'
    }]
  },
})




module.exports = withNextra()
