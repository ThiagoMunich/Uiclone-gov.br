import React from "react"

import "./App.css"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SubHeader from "./components/SubHeader/SubHeader"
import Services from "./components/Cards/Services"
import MyAccount from "./components/Cards/MyAccount"

function App() {
  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>

        <section>
          <SubHeader />
        </section>

        <main>
          <input placeholder="Encontre serviços do Governo..." readOnly />

          <Services />

          <MyAccount />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
