import React from "react"

import "./App.css"
import { FaBell } from "react-icons/fa"

function App() {
  return (
    <>
      <div className="container">
        <header>
          <img src="/assets/images/govLogo.png" alt="gov.br logo" />

          <FaBell size={32} color="#7E7E7E" style={{ marginLeft: "auto" }} />

          <img src="/assets/images/profilePicture.jpg" alt="profile" />
        </header>

        <section>
          <h3>Olá, Thiago</h3>
          <p>
            SUA CONTA É NÍVEL <strong>OURO</strong>
          </p>
          <div style={{ display: "flex", margin: 8 }}>
            <span className="teste"></span>
            <span className="teste"></span>
            <span className="teste"></span>
          </div>
        </section>

        <main>main</main>

        <footer>footer</footer>
      </div>
    </>
  )
}

export default App
