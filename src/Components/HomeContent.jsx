import React from 'react'
import TriangleButton from './TriangleButton'
import Searchbar from './Searchbar'

const HomeContent = () => {
  return (
    <div>
      <div className='topSection'>
        <div className='logo'>
          <div className='sphere'></div>
          <h3>
            <span className='s'>S</span>
            <span className='t'>t</span>
            <span className='u'>u</span>
            <span className='d'>d</span>
            <span className='e'>e</span>
            <span className='n'>n</span>
            <span className='t1'>t</span>
            <span className='s1'>S</span>
            <span className='p'>p</span>
            <span className='h'>h</span>
            <span className='e1'>e</span>
            <span className='r'>r</span>
            <span className='s2'>e</span>
          </h3>
        </div>
        <Searchbar />
      </div>
      <br></br>
      <div className="explanation">

      </div>
      <div>
      
      <TriangleButton />
      </div>
    </div>
  )
}

export default HomeContent