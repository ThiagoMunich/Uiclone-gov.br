import React from "react"

import { FaBell } from "react-icons/fa"

export default function Header() {
  return (
    <>
      <img src="/assets/images/govLogo.png" alt="gov.br logo" />

      <FaBell size={26} color="#7E7E7E" style={{ marginLeft: "auto" }} />

      <img src="/assets/images/profilePicture.jpg" alt="profile" />
    </>
  )
}
