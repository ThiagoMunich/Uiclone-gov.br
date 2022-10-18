import React from "react"

import Swal from "sweetalert2"

import "./styles.css"

import { FaBell } from "react-icons/fa"

export default function Header() {
  return (
    <>
      <img src="/assets/images/govLogo.png" alt="gov.br logo" />

      <div
        style={{ display: "flex", marginLeft: "auto" }}
        onClick={() =>
          Swal.fire({
            icon: "info",
            title: "Hi there!",
            text: "This is just an UI clone and this alert is the only interaction within the page.",
            confirmButtonText: "Ok, got it",
          })
        }
      >
        <FaBell size={26} color="#7E7E7E" className="bell" />

        <i className="bellBadge" />
      </div>

      <img src="/assets/images/profilePicture.jpg" alt="profile" />
    </>
  )
}
