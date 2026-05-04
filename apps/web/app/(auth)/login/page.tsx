"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
export default function LoginPage() {
  const router = useRouter()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();setLoading(true);setError("")
    const supabase = createClient()
    const {error} = await supabase.auth.signInWithPassword({email,password})
    if(error){setError(error.message);setLoading(false)}
    else{router.push("/dashboard");router.refresh()}
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f9f5] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#166534] to-[#16a34a] flex items-center justify-center text-white text-sm font-bold">LF</div>
            <span className="text-xl font-bold">LeadFlow <span className="text-[#15803d]">Pro</span></span>
          </div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
        </div>
        <div className="bg-white rounded-2xl border border-[#d0e8d4] shadow-sm p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div><label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-lg border border-[#d0e8d4] bg-[#f5f9f5] text-sm focus:outline-none focus:border-[#166534]"/></div>
            <div><label className="block text-sm font-semibold mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="••••••••" className="w-full px-4 py-2.5 rounded-lg border border-[#d0e8d4] bg-[#f5f9f5] text-sm focus:outline-none focus:border-[#166534]"/></div>
            {error&&<div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">{error}</div>}
            <button type="submit" disabled={loading} className="w-full py-2.5 rounded-lg bg-[#166534] text-white font-bold text-sm hover:bg-[#14532d] transition disabled:opacity-60">{loading?"Signing in...":"Sign in"}</button>
          </form>
          <div className="mt-6 pt-5 border-t border-[#d0e8d4] text-center text-sm text-gray-500">
            No account? <Link href="/signup" className="text-[#166534] font-semibold hover:underline">Create one free</Link>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">Admin? <Link href="/admin/login" className="text-[#15803d] hover:underline">Admin login ?</Link></p>
      </div>
    </div>
  )
}
