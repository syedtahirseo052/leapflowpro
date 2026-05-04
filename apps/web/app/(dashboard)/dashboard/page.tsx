"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
export default function DashboardPage() {
  const router = useRouter()
  const [email,setEmail] = useState("")
  const supabase = createClient()
  useEffect(()=>{
    supabase.auth.getUser().then(({data:{user}})=>{
      if(!user) router.push("/login")
      else setEmail(user.email||"")
    })
  },[])
  async function logout(){
    await supabase.auth.signOut()
    router.push("/login")
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-green-800 text-lg">LeadFlow Pro</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{email}</span>
          <button onClick={logout} className="text-sm bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">Logout</button>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6"><p className="text-sm text-gray-500">Total Leads</p><p className="text-3xl font-bold text-green-800">0</p></div>
          <div className="bg-white rounded-xl border border-gray-200 p-6"><p className="text-sm text-gray-500">Searches</p><p className="text-3xl font-bold text-green-800">0</p></div>
          <div className="bg-white rounded-xl border border-gray-200 p-6"><p className="text-sm text-gray-500">Pitches Sent</p><p className="text-3xl font-bold text-green-800">0</p></div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-bold mb-4">Tools</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4"><p className="font-semibold">Lead Scraper</p><p className="text-sm text-gray-500">Find leads from Google Maps</p></div>
            <div className="border border-gray-200 rounded-lg p-4"><p className="font-semibold">Pitch Generator</p><p className="text-sm text-gray-500">AI-powered pitch emails</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
