import React from 'react'
import {
    Button,
    Space,
    Form,
    Input,
  } from 'antd';
const InputField = ({formItems}) => {
    // const {formItems}=props;
    return (
    // <Space>
    <div>
        <Form
            className='Form'
            labelCol={{
            span: 7,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="inline"
            style={{
                maxWidth: 1000,
            }}
            >
            <Space>
             {
                formItems.map((item)=>(
                    <Form.Item label={item.label} ><Input placeholder={item.placeholder}/></Form.Item>
                    ))
                }      
                <Button type="primary">Search</Button>
            </Space>
        
        </Form>
        <br></br>
    </div>

  )
}

export default InputField