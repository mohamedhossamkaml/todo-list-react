import Hero from "../components/Hero"
import Todos from "./Todos"

export default function Home() {
  return (
    <main className="flex items-center py-16 px-6  justify-center text-center pt-10">
      <Hero />
      <Todos />
    </main>
  )
}
