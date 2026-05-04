"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
export default function AdminDashboard() {
  const router = useRouter()
  const supabase = createClient()
  useEffect(()=>{
    supabase.auth.getUser().then(({data:{user}})=>{
      if(!user||user.email!=="tsaleem033@gmail.com") router.push("/admin/login")
    })
  },[])
  async function logout(){
    await supabase.auth.signOut()
    router.push("/admin/login")
  }
  return (
    <div className="min-h-screen bg-[#071209]">
      <nav className="bg-[#0d1f0f] border-b border-green-900 px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-green-400 text-lg">Admin Panel</span>
        <button onClick={logout} className="text-sm bg-green-900 text-green-300 px-4 py-2 rounded-lg hover:bg-green-800">Logout</button>
      </nav>
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-white mb-6">Platform Overview</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#0d1f0f] rounded-xl border border-green-900 p-6"><p className="text-sm text-green-600">Total Users</p><p className="text-3xl font-bold text-green-400">0</p></div>
          <div className="bg-[#0d1f0f] rounded-xl border border-green-900 p-6"><p className="text-sm text-green-600">Total Leads</p><p className="text-3xl font-bold text-green-400">0</p></div>
          <div className="bg-[#0d1f0f] rounded-xl border border-green-900 p-6"><p className="text-sm text-green-600">Revenue</p><p className="text-3xl font-bold text-green-400">$0</p></div>
        </div>
      </div>
    </div>
  )
}
