import React from 'react'
import Links from '../Links/Links'
import logo from "../../assets/react.svg"

function HeaderContent() {
  return (
    <div id="header">
          <div>
            <img src={logo} />
          </div>
          <Links />
    </div>
  )
}

export default HeaderContent