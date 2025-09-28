import 'styles/Home.module.css';
import 'styles/globals.css';
import 'nprogress/nprogress.css';
import 'react-tooltip/dist/react-tooltip.css';

import { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import React from 'react';

export const metadata: Metadata = {
  title: 'Nogi Ragil Triwardana Portfolio',
  description:
    'Front End Developer with focus for performance, user experience and scalable interface development',
};

const mavenPro = Maven_Pro({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mavenPro.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          defer
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
      </head>
      <body>{children}</body>
    </html>
  );
}
