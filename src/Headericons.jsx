import React from 'react'

function Headericons({ Icon , title}) {
  return (
    <div className="headeroption text-white d-flex flex-column justify-content-center align-items-center ms-5">
        {Icon && <Icon className="fs-7"/>}
        <p >{title}</p>
    </div>
  )
}

export default Headericons