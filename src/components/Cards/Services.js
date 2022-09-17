import React from "react"

import "./styles.css"

import { BiChevronRight } from "react-icons/bi"

import { IoWallet } from "react-icons/io5"

import {
  BsFillFilePersonFill,
  BsFileEarmarkArrowDownFill,
} from "react-icons/bs"

import { FaQrcode, FaFileSignature, FaSearch } from "react-icons/fa"

export default function Services() {
  return (
    <>
      <div className="card">
        <p>Serviços</p>

        <hr />

        <div>
          <FaSearch size={24} color="navy" />

          <p>Buscar serviços</p>

          <BiChevronRight size={24} color="navy" />
        </div>

        <hr />

        <div>
          <IoWallet size={24} color="navy" />

          <p>Carteira de documentos</p>

          <BiChevronRight size={24} color="navy" />
        </div>

        <hr />

        <div>
          <FaFileSignature size={24} color="navy" />

          <p>Assinar documentos digitalmente</p>

          <BiChevronRight size={24} color="navy" />
        </div>

        <hr />

        <div>
          <BsFileEarmarkArrowDownFill size={24} color="navy" />

          <p>Baixar certidões</p>

          <BiChevronRight size={24} color="navy" />
        </div>

        <hr />

        <div>
          <FaQrcode size={24} color="navy" />

          <p>Login sem senha (Qr code)</p>

          <BiChevronRight size={24} color="navy" />
        </div>

        <hr />

        <div>
          <BsFillFilePersonFill size={24} color="navy" />

          <p>Prova de vida</p>

          <BiChevronRight size={24} color="navy" />
        </div>
      </div>
    </>
  )
}
