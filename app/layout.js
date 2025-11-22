
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'CRESTVISTA PROPERTIES LTD',
  description: 'Crestvista Properties LTD — Real estate listings and property management in Nairobi.',
  openGraph: {
    title: 'CRESTVISTA PROPERTIES LTD',
    description: 'Real estate listings in Nairobi — Crestvista Properties LTD',
    images: ['/logo.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
