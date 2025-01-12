import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plugin",
  description:
    "Plugin — a dynamic B2C/B2B platform, weaving seamless connections, empowering individuals, products and service providers, and businesses across Africa.",
  openGraph: {
    title: "Plugin",
    description:
      "Plugin — a dynamic B2C/B2B platform, weaving seamless connections, empowering individuals, products and service providers, and businesses across Africa.",
    url: "https://app.pluginafrica.org",
    siteName: "Plugin",
    images: [
      {
        url: "/assets/icons/pluginLogo.svg",
        width: 800,
        height: 600,
        alt: "Plugin Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plugin",
    description:
      "Plugin — a dynamic B2C/B2B platform, weaving seamless connections, empowering individuals, products and service providers, and businesses across Africa.",
    images: "/assets/icons/pluginLogo.svg",
    creator: "@plugin_creator",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#28282C" />
        <link
          rel="icon"
          href="/assets/icons/pluginLogo.svg"
          sizes="any"
          type="image/svg"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/icons/pluginLogo.svg"
          sizes="180x180"
        />
        <meta property="og:title" content="Plugin" />
        <meta
          property="og:description"
          content={metadata?.description?.toString()}
        />
        <meta
          property="og:url"
          content={metadata?.openGraph?.url?.toString()}
        />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta property="og:image" content="/assets/icons/pluginLogo.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={metadata?.twitter?.title?.toString()}
        />
        <meta
          name="twitter:description"
          content={metadata.twitter?.description}
        />
        <meta name="twitter:image" content={"/assets/icons/pluginLogo.svg"} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: metadata.openGraph?.siteName,
              url: metadata.openGraph?.url,
            }),
          }}
        />
      </head>
      <body className="font-outfit font-regular dark text-white antialiased">{children}</body>
    </html>
  );
}
