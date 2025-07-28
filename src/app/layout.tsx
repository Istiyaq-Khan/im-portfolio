// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import ClientLayout from '@/components/ClientLayout'
export const metadata = {
  title: 'Istiyaq Khan Razin - Portfolio',
  description: '15yo Fullstack Dev & Digital Designer Portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
