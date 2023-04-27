import React from 'react'
import TriangleButton from './TriangleButton'
import Searchbar from './Searchbar'
import TriangleCard from './TriangleCard'

const HomeContent = () => {
  return (
    <div>
      <div className='topSection'>
        <div className='logo'>
          <div className='sphere'></div>
          <h2>
            StudentSphere
          </h2>
        </div>
        <Searchbar />
      </div>
      <br></br>
      <div className="explanation">

      </div>
      <div className='triangleContainer'>
        <TriangleButton />
        <TriangleCard />
      </div>
    </div>
  )
}

export default HomeContent