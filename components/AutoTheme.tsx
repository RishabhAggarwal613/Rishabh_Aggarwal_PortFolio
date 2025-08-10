"use client"
import { useEffect } from "react"
const THEMES = ["cosmic","aurora","sunset","neon"] as const
export default function AutoTheme(){
  useEffect(()=>{
    const current = document.documentElement.getAttribute("data-theme") as typeof THEMES[number] | null
    let i = current ? Math.max(0, THEMES.indexOf(current)) : 0
    document.documentElement.setAttribute("data-theme", THEMES[i])
    const id = setInterval(()=>{ i=(i+1)%THEMES.length; document.documentElement.setAttribute("data-theme", THEMES[i]) }, 7000)
    return ()=> clearInterval(id)
  },[])
  return null
}
