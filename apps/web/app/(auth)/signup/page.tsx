"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
export default function SignupPage() {
  const router = useRouter()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false)
  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();setLoading(true);setError("")
    const supabase = createClient()
    const {error} = await supabase.auth.signUp({email,password})
    if(error){setError(error.message);setLoading(false)}
    else{router.push("/dashboard")}
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h1 className="text-2xl font-bold mb-6">Create account</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-green-700"/>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-green-700"/>
          </div>
          {error&&<p className="text-red-600 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="w-full py-2.5 rounded-lg bg-green-800 text-white font-bold text-sm hover:bg-green-900 transition">{loading?"Creating...":"Create account"}</button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have account? <Link href="/login" className="text-green-800 font-semibold">Sign in</Link>
        </div>
      </div>
    </div>
  )
}
