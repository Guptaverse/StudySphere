import React from 'react'
import img1 from "../assets/upload.png"
import img2 from "../assets/syllabus.png"
import img3 from "../assets/article.png"

export default function TriangleCard() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className='cardLay'>
                <div className='card-container'>
                    <div className='imgBox'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='card'>
                        <h3>Upload</h3>
                        <p>Upload Notes, Syllabus, E-books and other study material.</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='imgBox'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='card'>
                        <h3>Syllabus</h3>
                        <p>Check out Syllabus of different subjects according to your semesters.</p>
                    </div>
                </div>
                <div className='card-container article'>
                    <div className='imgBox'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='card'>
                        <h3>Articles</h3>
                        <p>Upload and View articles. Write educational blogs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
