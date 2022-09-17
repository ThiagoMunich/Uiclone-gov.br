import React from "react"

import "./styles.css"

import { FaEye } from "react-icons/fa"

export default function SubHeader() {
  return (
    <>
      <h3>
        Olá, <strong>Thiago</strong>
      </h3>

      <p>
        SUA CONTA É NÍVEL <strong>OURO</strong>
      </p>

      <div style={{ display: "flex", marginTop: 12 }}>
        <span className="currentLevel" />
        <span className="currentLevel" />
        <span className="currentLevel" />
      </div>

      <button>
        <FaEye size={16} color="blue" />

        <strong>VER NÍVEL</strong>
      </button>
    </>
  )
}
