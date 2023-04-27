import React from 'react'
import { useNavigate } from 'react-router-dom'

import img1 from "../assets/upload.png"
import img2 from "../assets/syllabus.png"
import img3 from "../assets/article.png"



const CircleButtons = ({ index, name }) => {
    // const size = "700px";
    const navigate = useNavigate()
    var images = [img1, img2, img3]
    // console.log(images[0])
    // const {index}=props;
    // console.log(index)
    function goTo() {
        switch (index) {
            case 0:
                navigate("/upload");
                break;
            case 1:
                navigate("/syllabus");
                break;
            case 2:
                navigate("/articles");
                break;
            default:
                console.log("bad gateway");
        }
    }

    return (
        <>
            <button style={{ backgroundColor: "white", fontSize: "10px", margin: "20px", padding: "30px", borderRadius: "50%", cursor: "pointer", position: 'relative' }} onClick={goTo}>
                <img src={images[index]} style={{ height: "100px" }} alt={index}></img>
                <p style={{ position: 'absolute', bottom: '0px', fontSize: '16px', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, textAlign: 'center' }}>{name}</p>
            </button>
            {/* <br></br> */}
            {/* <div>UPLOAD</div> */}

        </>
    )
}

export default CircleButtons