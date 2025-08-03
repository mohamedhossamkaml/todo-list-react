import Hero from "../components/Hero"
import Todos from "./Todos"

export default function Home() {
  return (
    <main className=" mt-6 pt-10">
      <Hero />
      <Todos />
    </main>
  )
}
