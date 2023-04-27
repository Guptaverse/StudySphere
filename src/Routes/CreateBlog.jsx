import React from 'react'
// import EditorTool from '../Components/EditorTool'
import JoditEditor from "jodit-react"
import { useRef,useState } from 'react'
import { Button, Form, Input } from 'antd'
import { async } from 'q'
import axios from 'axios'

const CreateBlog = () => {
    const editor = useRef(null);
    const [title, setTitle] = useState("")
    const [content,setContent] = useState(' ')
    const add = async() => {
        const response =  await axios.post('http://localhost:5000/subjects/article/add', {subjectName:"english",title:title, description:content})
        console.log(response.data)
    }
    return (
        <div>
            <Form>
                <h3>Title of your Article</h3>
                <div>
                    <Input onChange={(e)=>{setTitle(e.target.value)}} value={title} type='text'></Input>
                </div>
                <br></br>
            </Form>
            <div>
                <JoditEditor
                    ref={editor}
                    value = {content}
                    onChange = {newContent=>setContent(newContent)}
                />
                {/* <button onClick={()=>{console.log(content)}}> see what is inside</button> */}        
            </div>
            {/* <EditorTool/>    */}
            <Button type="primary" onClick={add} >Publish</Button>     

            <div id='postResult'>{content}</div>
        </div>
    )
}

export default CreateBlog