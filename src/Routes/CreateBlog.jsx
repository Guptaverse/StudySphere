import React from 'react'
// import EditorTool from '../Components/EditorTool'
import JoditEditor from "jodit-react"
import { useRef,useState } from 'react'
import { Button, Form, Input } from 'antd'

const CreateBlog = () => {
    const editor = useRef(null);
    const [content,setContent] = useState(' ')
    return (
        <div>
            <Form>
                <h3>Title of your Article</h3>
                <div>
                    <Input type='text'></Input>
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
            <Button type="primary" onClick={()=>{console.log(content)}} >Publish</Button>     
        </div>
    )
}

export default CreateBlog