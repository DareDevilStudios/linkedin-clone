import React from 'react'
import Feedtop from './Feedtop'
import Feeder from './Feeder'

function Feed() {
  return (
    <div className="m-4 d-flex flex-column">
      <Feedtop/>
      <Feeder title="Masdar City" followers="6,364 followers" promo="Promoted"/>
    </div>
  )
}

export default Feed