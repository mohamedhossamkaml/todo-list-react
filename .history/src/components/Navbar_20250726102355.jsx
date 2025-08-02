import { useState, useEffect } from "react"

const Navbar = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-baseLight dark:bg-baseDark text-textLight dark:text-textDark shadow-md">
      <h1 className="text-xl font-bold tracking-wide">محمد - Portfolio</h1>
      <button
        onClick={() => setIsDark(!isDark)}
        className="px-4 py-2 border border-accent text-accent rounded transition duration-200 hover:bg-accent hover:text-white"
      >
        {isDark ? "☀️ الوضع الفاتح" : "🌙 الوضع الداكن"}
      </button>
    </nav>
  )
}

export default Navbar
