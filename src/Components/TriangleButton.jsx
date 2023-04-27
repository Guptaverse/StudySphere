import React from 'react'
import CircleButtons from './CircleButtons'
import "../styles/triangle.css"



const TriangleButton = () => {
  return (
    <div className='Triangle-Grandpa'>
      <div className='Triangle_Parent'>
        <div className="item item1">
          <CircleButtons name="Upload"  index = {0} />
        </div>
        <div className="item item2">
          <CircleButtons name="Syllabus"  index = {1} />
        </div>
        <div className="item item3">
          <CircleButtons name="Article"  index = {2} />
        </div>

      </div>


    </div>
  )
}

export default TriangleButton