import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sports Era - Personalized Nutrition and Motivation',
  description: 'Discover your ideal sport, get personalized meal plans, and stay motivated with Sports Era.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}