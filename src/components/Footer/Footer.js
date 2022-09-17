import React from "react"

import "./styles.css"

import { IoWallet } from "react-icons/io5"
import { MdHome, MdMenu } from "react-icons/md"
import { FaClipboardList, FaQrcode } from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <div>
        <MdHome size={26} color="blue" />
        <p>Início</p>
      </div>

      <div>
        <FaClipboardList size={26} color="#7E7E7E" />
        <p>Dados</p>
      </div>

      <div>
        <span className="qrCode">
          <FaQrcode size={22} color="white" />
        </span>
        <p>QR Code</p>
      </div>

      <div>
        <IoWallet size={26} color="#7E7E7E" />
        <p>Carteira</p>
      </div>

      <div>
        <MdMenu size={26} color="#7E7E7E" />
        <p>Menu</p>
      </div>
    </>
  )
}
