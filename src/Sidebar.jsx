import React from 'react'
import './Sidebar.css'
import Sidebarbottom from './Sidebarbottom'
import Sidebartop from './Sidebartop'

function Sidebar() {
  return (
    <div className="sidebar m-4">
        <Sidebartop />
        <Sidebarbottom/>
    </div>
  )
}

export default Sidebar