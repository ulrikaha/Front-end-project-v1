import { AuthProvider } from './Providers'
import { SearchProvider } from '../context/SearchContext'
import type { Metadata } from 'next'
import './globals.css'



export const metadata: Metadata = {
  title: 'NorthernNest Retreat',
  description: 'Cabin rentals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <SearchProvider>
            {children}
            </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
