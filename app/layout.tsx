import { AuthProvider } from './Providers'
import { SearchProvider } from '../context/SearchContext'
import { BookingDetailsContextProvider } from '@/context/BookingDetailsContext'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import NavbarGreen from '@/components/NavbarGreen'



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
          <BookingDetailsContextProvider>
          <NavbarGreen />
            {children}
            <Footer />
          </BookingDetailsContextProvider>
            </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
