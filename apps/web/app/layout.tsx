import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'LeadFlow Pro', description: 'B2B Lead Generation Platform' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
