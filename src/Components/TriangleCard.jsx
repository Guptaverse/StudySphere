import React from 'react'
import img1 from "../assets/upload.png"
import img2 from "../assets/syllabus.png"
import img3 from "../assets/article.png"

export default function TriangleCard() {
    return (
        <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
            <div className='cardLay'>
                <div className='card-container'>
                    <div className='imgBox'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='card'>
                        <h3>Upload</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum eum quis veniam eius quibusdam architecto!</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='imgBox'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='card'>
                        <h3>Syllabus</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quod? Labore, perspiciatis! Quidem, nobis cupiditate!</p>
                    </div>
                </div>
            </div>
            <div className='card-container article'>
                <div className='imgBox'>
                    <img src={img3} alt="" />
                </div>
                <div className='card'>
                    <h3>Articles</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque vitae ea error explicabo consequatur.</p>
                </div>
            </div>
        </div>
    )
}
