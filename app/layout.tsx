import { Metadata } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import CustomFooter from '@/components/footer'
import { SpheronLogo } from "@/components/icons/spheron-full";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    template: '%s | Spheron',
    default: 'Spheron',
  },
  description: "Power your dapp with Spheron's next-generation infrastructure.",
  metadataBase: new URL('https://docs.spheron.network'),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      template: '%s | Spheron',
      default: 'Spheron',
    },
    description: "Power your dapp with Spheron's next-generation infrastructure.",
    url: "https://docs.spheron.network/",
    images: "https://www.spheron.network/meta-og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: '%s | Spheron',
      default: 'Spheron',
    },
    description: "Power your dapp with Spheron's next-generation infrastructure.",
    images: "https://www.spheron.network/meta-og-image.png",
    site: "https://spheron.network",
  },
}

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<span className="flex items-center"><SpheronLogo /></span>}
    projectLink="https://github.com/spheron-core"
    chatLink="https://sphn.wiki/discord"
  />
)


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head faviconGlyph="✦">
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="slurp" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="duckduckbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="baiduspider" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="yandexbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="facebookbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="twitterbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="applebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="ia_archiver" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="wayback" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="ahrefsbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="semrushbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="mj12bot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="dotbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="gptbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="chatgpt-user" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="ccbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="anthropic-ai" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="claude-web" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="perplexitybot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="youbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="google-extended" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 600 }}>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={<CustomFooter />}
          navigation={{
            prev: true,
            next: true
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
        // search={<OramaSearch />}
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html >
  )
}