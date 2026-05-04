import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
export async function middleware(request: NextRequest) {
  let res = NextResponse.next({ request })
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{cookies:{getAll(){return request.cookies.getAll()},setAll(c){c.forEach(({name,value})=>request.cookies.set(name,value));res=NextResponse.next({request});c.forEach(({name,value,options})=>res.cookies.set(name,value,options))}}})
  const {data:{user}} = await supabase.auth.getUser()
  const path = request.nextUrl.pathname
  if(path.startsWith('/dashboard')&&!user) return NextResponse.redirect(new URL('/login',request.url))
  if(path.startsWith('/admin/dashboard')&&!user) return NextResponse.redirect(new URL('/admin/login',request.url))
  if(user&&(path==='/login'||path==='/signup')) return NextResponse.redirect(new URL('/dashboard',request.url))
  return res
}
export const config={matcher:['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']};
