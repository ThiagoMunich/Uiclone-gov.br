import React from "react"

import "./styles.css"

import { BiChevronRight } from "react-icons/bi"

import { IoWallet } from "react-icons/io5"

import {
  BsFillFilePersonFill,
  BsFileEarmarkArrowDownFill,
} from "react-icons/bs"

import { FaQrcode, FaFileSignature, FaSearch } from "react-icons/fa"

const services = [
  { name: "Buscar serviços", icon: <FaSearch size={24} color="navy" /> },
  {
    name: "Carteira de documentos",
    icon: <IoWallet size={24} color="navy" />,
  },
  {
    name: "Assinar documentos digitalmente",
    icon: <FaFileSignature size={24} color="navy" />,
  },
  {
    name: "Baixar certidões",
    icon: <BsFileEarmarkArrowDownFill size={24} color="navy" />,
  },
  {
    name: "Login sem senha (Qr code)",
    icon: <FaQrcode size={24} color="navy" />,
  },
  {
    name: "Prova de vida",
    icon: <BsFillFilePersonFill size={24} color="navy" />,
  },
]

export default function Services() {
  return (
    <>
      <div className="card">
        <p>Serviços</p>

        <hr />

        {services?.map((service) => (
          <React.Fragment key={service.name}>
            <div>
              {service.icon}

              <p>{service.name}</p>

              <BiChevronRight size={24} color="navy" />
            </div>

            <hr className="divider" />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}
