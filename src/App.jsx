import { useState } from "react"
import Hero from "./components/Hero"

import Home from "./pages/Home"
import Podcast from "./pages/Podcast"
import Contact from "./pages/Contact"

function App() {
  const [page, setPage] = useState("home")

  return (
    <>
      <Hero setPage={setPage} />

      {/* 🔥 yaha se content change hoga */}
      {page === "home" && <Home />}
      {page === "podcast" && <Podcast />}
      {page === "contact" && <Contact />}
    </>
  )
}

export default App