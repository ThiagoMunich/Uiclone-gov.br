import React from "react"

import "./styles.css"

import { FaLock, FaClipboardList } from "react-icons/fa"

import { BiChevronRight } from "react-icons/bi"

const myAccount = [
  { name: "Dados pessoais", icon: <FaClipboardList size={24} color="navy" /> },
  { name: "Privacidade", icon: <FaLock size={24} color="navy" /> },
]

export default function MyAccount() {
  return (
    <>
      <div className="card">
        <p>Minha conta</p>

        <hr />

        {myAccount?.map((account) => (
          <React.Fragment key={account.name}>
            <div>
              {account.icon}

              <p>{account.name}</p>

              <BiChevronRight size={24} color="navy" />
            </div>

            <hr className="divider" />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}
