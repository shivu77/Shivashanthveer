import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    domains: [],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as needed
})

export default withMDX(nextConfig)


