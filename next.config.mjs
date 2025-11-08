import createMDX from '@next/mdx'

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'Shivashanthveer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',
  trailingSlash: true,
}

const withMDX = createMDX({
  // Add markdown plugins here, as needed
})

export default withMDX(nextConfig)


