import React from "react"

import "./styles.css"

import { FaQrcode } from "react-icons/fa"

import { BiChevronRight } from "react-icons/bi"

import { BsFillFilePersonFill } from "react-icons/bs"

export default function MyAccount() {
  return (
    <>
      <div className="card">
        <p>Minha conta</p>

        <hr />

        <div>
          <FaQrcode size={24} color="navy" />

          <p>Dados pessoais</p>

          <BiChevronRight size={24} color="navy" />
        </div>

        <hr />

        <div>
          <BsFillFilePersonFill size={24} color="navy" />

          <p>Privacidade</p>

          <BiChevronRight size={24} color="navy" />
        </div>
      </div>
    </>
  )
}
