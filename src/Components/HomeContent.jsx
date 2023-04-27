import React from 'react'
import TriangleButton from './TriangleButton'
import Searchbar from './Searchbar'

const HomeContent = () => {
  return (
    <div>
        <div className='sphere'></div>
        <Searchbar/>
        <br></br>
        <div className="explanation">

        </div>
        <TriangleButton/>
    </div>
  )
}

export default HomeContent