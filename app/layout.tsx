import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Revo',
  description: 'Coffee store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-nunito">{children}</body>
    </html>
  )
}
