import Hero from "../components/Hero"
import Todos from "./Todos"

export default function Home() {
  return (
    <main className="flex  text-center pt-10">
      <Hero />
      <Todos />
    </main>
  )
}
