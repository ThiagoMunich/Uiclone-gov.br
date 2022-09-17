import React from "react"

import "./App.css"
import { FaEye, FaBell, FaWallet } from "react-icons/fa"
import { MdHome, MdMenu } from "react-icons/md"
import { IoWallet } from "react-icons/io5"

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
          <h3>
            Olá, <strong>Thiago</strong>
          </h3>

          <p>
            SUA CONTA É NÍVEL <strong>OURO</strong>
          </p>

          <div style={{ display: "flex", marginTop: 12 }}>
            <span className="teste"></span>
            <span className="teste"></span>
            <span className="teste"></span>
          </div>

          <button>
            <FaEye size={16} color="blue" />

            <strong>VER NÍVEL</strong>
          </button>
        </section>

        <main>main</main>

        <footer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MdHome size={26} color="blue" />
            <p>Início</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MdHome size={26} color="blue" />
            <p>Dados</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MdHome size={26} color="blue" />
            <p>QR Code</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IoWallet size={26} color="blue" />
            <p>Carteira</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MdMenu size={26} color="blue" />
            <p>Menu</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
