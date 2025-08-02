import Hero from "../components/Hero"
import Todos from "./Todos"

export default function Home() {
  return (
    <main className=" mt-6">
      <Hero />
      <Todos />
    </main>
  )
}
