import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Topslice HQ | Building & Operating Digital Businesses",
  description:
    "Topslice is a privately held holding company based in New York City. We build and operate SaaS platforms, business formation services, and media properties. All in-house.",
  metadataBase: new URL("https://topslice.io"),
  openGraph: {
    title: "Topslice HQ | Building Digital Businesses",
    description:
      "A privately held holding company building SaaS products, business services, and media properties.",
    url: "https://topslice.io",
    siteName: "Topslice HQ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topslice HQ",
    description:
      "A privately held holding company building digital businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          async
          src="https://plausible.io/js/pa-dxCRCFL0fNk6lWJd2FcQK.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init()
            `,
          }}
        />
      </head>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
