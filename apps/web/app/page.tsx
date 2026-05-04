"use client"
import Link from "next/link"
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071209] via-[#0d1f0f] to-[#071209]">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-green-900">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#166534] to-[#16a34a] flex items-center justify-center text-white font-bold text-sm">LF</div>
          <span className="text-white font-bold text-xl">LeadFlow <span className="text-green-400">Pro</span></span>
        </div>
        <div className="flex gap-3">
          <Link href="/login" className="px-5 py-2 text-green-400 border border-green-700 rounded-lg text-sm font-semibold hover:bg-green-900 transition">Login</Link>
          <Link href="/signup" className="px-5 py-2 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition">Get Started Free</Link>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center text-center px-4 py-24">
        <div className="inline-block bg-green-900 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">B2B Lead Generation Platform</div>
        <h1 className="text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">Find Leads, Close Deals <span className="text-green-400">Faster</span></h1>
        <p className="text-green-300 text-lg mb-10 max-w-xl">Scrape verified business leads from Google Maps, generate AI pitch emails, and grow your agency revenue.</p>
        <div className="flex gap-4">
          <Link href="/signup" className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-500 transition text-sm">Start Free Trial</Link>
          <Link href="/login" className="px-8 py-3.5 border border-green-700 text-green-400 font-bold rounded-xl hover:bg-green-900 transition text-sm">Sign In</Link>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-20 max-w-2xl w-full">
          <div className="bg-[#0d1f0f] border border-green-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-green-400 mb-1">10x</p>
            <p className="text-green-600 text-sm">Faster Lead Gen</p>
          </div>
          <div className="bg-[#0d1f0f] border border-green-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-green-400 mb-1">500+</p>
            <p className="text-green-600 text-sm">Leads Per Search</p>
          </div>
          <div className="bg-[#0d1f0f] border border-green-900 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-green-400 mb-1">AI</p>
            <p className="text-green-600 text-sm">Pitch Generator</p>
          </div>
        </div>
      </div>
    </div>
  )
}
