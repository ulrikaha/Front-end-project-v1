import { AuthProvider } from './Providers'
import { SearchProvider } from '../context/SearchContext'
import { BookingDetailsContextProvider } from '@/context/BookingDetailsContext'
import { BookingProvider } from '@/context/BookingConfirmContext';
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'






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
            <BookingProvider>
         {/*<NavbarGreen />*/}
          {children}
            <Footer />
            </BookingProvider>
          </BookingDetailsContextProvider>
            </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
