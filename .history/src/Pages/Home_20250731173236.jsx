import Hero from "../components/Hero"
import Todos from "./Todos"

export default function Home() {
  return (
    <main className=" pt-30">
      <Hero />
      <Todos />
    </main>
  )
}
