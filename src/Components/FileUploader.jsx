import { PlusOutlined } from '@ant-design/icons';
import "../styles/upload.css"
import {
  Button,
  DatePicker,
  Form,
  Input,
  Upload,
} from 'antd';


const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FileUploader = () => {
  return (
    <>
    <div className='Form_parent'>
      <Form
        className='Form'
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="College">
          <Input />
        </Form.Item>
        <Form.Item label="Subject">
          <Input />
        </Form.Item>
        
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item className="Form_submit" label="">
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </div>
    </>
  );
};
export default FileUploader ;