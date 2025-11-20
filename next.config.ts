import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet, noimageindex, nocache',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
  // ... Other Next.js config options
})
