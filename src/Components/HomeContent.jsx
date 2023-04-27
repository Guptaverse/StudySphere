import React from 'react'
import TriangleButton from './TriangleButton'
import Searchbar from './Searchbar'

const HomeContent = () => {
  return (
    <div>
      <div>
        <div className='sphere'></div>
        <h3>StudentSphere</h3>
      </div>
      <Searchbar />
      <br></br>
      <div className="explanation">

      </div>
      <TriangleButton />
    </div>
  )
}

export default HomeContent