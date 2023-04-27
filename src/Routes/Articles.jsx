import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/upload.css'
import FileUploader from '../Components/FileUploader';
import InputField from '../Components/InputField';
const { Header, Content, Footer } = Layout;

const Articles = () => {

  return (

          <InputField

            formItems={
              [
                {label:"Subject",placeholder:"Maths"},
                {label:"Semester",placeholder:"8"},
                // {label:"subject",placeholder:"Math"},
                // {label:"semester",placeholder:"7th"},
              ]
            }

          />

  );
};
export default Articles;