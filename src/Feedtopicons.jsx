import React from 'react'

function Feedtopicons({Icon, title}) {
  return (
    <div className="d-flex justify-content-center align-items-center">
        {Icon && <Icon className="fs-7"/>}
        <p className="ms-3">{title}</p>
    </div>
  )
}

export default Feedtopicons