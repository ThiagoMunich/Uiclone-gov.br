import React from "react"

import "./styles.css"

import { FaBell } from "react-icons/fa"

export default function Header() {
  return (
    <>
      <img src="/assets/images/govLogo.png" alt="gov.br logo" />

      <div style={{ display: "flex", marginLeft: "auto" }}>
        <FaBell size={26} color="#7E7E7E" className="bell" />

        <i className="bellBadge" />
      </div>

      <img src="/assets/images/profilePicture.jpg" alt="profile" />
    </>
  )
}
