"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
const ADMIN_EMAIL = "tsaleem033@gmail.com"
export default function AdminLoginPage() {
  const router = useRouter()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();setLoading(true);setError("")
    if(email !== ADMIN_EMAIL){setError("Access denied");setLoading(false);return}
    const supabase = createClient()
    const {error} = await supabase.auth.signInWithPassword({email,password})
    if(error){setError(error.message);setLoading(false)}
    else{router.push("/admin/dashboard")}
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071209] px-4">
      <div className="w-full max-w-md bg-[#0d1f0f] rounded-2xl border border-green-900 p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
        <p className="text-green-600 text-sm mb-6">Restricted access</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-green-400 mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="admin@email.com" className="w-full px-4 py-2.5 rounded-lg bg-[#071209] border border-green-900 text-white text-sm focus:outline-none focus:border-green-600"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-green-400 mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="password" className="w-full px-4 py-2.5 rounded-lg bg-[#071209] border border-green-900 text-white text-sm focus:outline-none focus:border-green-600"/>
          </div>
          {error&&<p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="w-full py-2.5 rounded-lg bg-green-800 text-white font-bold text-sm hover:bg-green-700 transition">{loading?"Signing in...":"Sign in"}</button>
        </form>
      </div>
    </div>
  )
}
