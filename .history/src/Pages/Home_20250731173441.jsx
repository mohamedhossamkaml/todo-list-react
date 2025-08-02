import Hero from "../components/Hero"
import Todos from "./Todos"

export default function Home() {
  return (
    <main className="pt-28">
      <Hero />
      <Todos />
    </main>
  )
}
