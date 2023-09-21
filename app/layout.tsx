import 'styles/Home.module.css'
import 'styles/globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Nogi Ragil Triwardana Portfolio</title>
        <link rel="icon" href="/assets/icon/fav-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
