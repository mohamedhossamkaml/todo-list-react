import Hero from "../components/Hero"
import Todos from "./Todos"

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Todos />
    </main>
  )
}
