import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar'
import getCurrentUser from './actions/getCurrentUser'
import ToasterProvider from './providers/ToasterProvider'

export const metadata = {
  title: 'Crypto Trading Games',
  description: 'Generated by create next app',
}

const font = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <main className="pt-[6rem] px-[1rem]">
          {children}
        </main>
      </body>
    </html>
  )
}