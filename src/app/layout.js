import '@/styles/app.scss';
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plantswap',
  description: 'Generated by create next app',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={inter.className}>
        <header>
            <h1>{metadata.title}</h1>
        </header>
        <main>
            {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
