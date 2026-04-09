const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // GoDaddy ke liye: build se "out" folder aayega (static HTML), .next nahi use karna
  trailingSlash: true, // Static hosting refresh/direct route support
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Exclude src folder from webpack build
  webpack: (config, { isServer }) => {
    // Exclude src folder from being processed
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    
    // Ignore src directory completely in webpack
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        ...(Array.isArray(config.watchOptions?.ignored) ? config.watchOptions.ignored : []),
        '**/src/**',
      ],
    }
    
    // Modify module rules to exclude src
    config.module.rules.forEach((rule) => {
      if (rule.test && (rule.test.toString().includes('tsx') || rule.test.toString().includes('jsx'))) {
        if (!rule.exclude) {
          rule.exclude = []
        }
        if (Array.isArray(rule.exclude)) {
          rule.exclude.push(path.resolve(__dirname, 'src'))
        } else {
          rule.exclude = [rule.exclude, path.resolve(__dirname, 'src')]
        }
      }
    })
    
    return config
  },
}

module.exports = nextConfig

