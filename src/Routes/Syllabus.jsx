import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import url from "../assets/sample.pdf"
import InputField from '../Components/InputField';
const { Header, Content, Footer } = Layout;

const Syllabus = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="home" >
              <Link to="/">Home</Link>  
            </Menu.Item>
            <Menu.Item key="articles">
              <Link to="/articles">Articles</Link>  
            </Menu.Item>
            <Menu.Item key="uploads">
              <Link to = "/upload">Uploads</Link>
            </Menu.Item>
            <Menu.Item key="syllabus" style={{backgroundColor:"#1677ff"}}>
              <Link to = "/syllabus" >Syllabus</Link>
            </Menu.Item>
        </Menu>

      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >

        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          
        <InputField
          formItems={
            [
              {label:"Subject",placeholder:"Maths"},
              {label:"Semester",placeholder:"8"},
            ]
          }
        />
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>          
          <iframe src={url} style={{width:"85%",height:"975px",display:"block"}}></iframe>
        </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <span style={{color:"#1677ff",fontWeight:"bold"}}>Student-Sphere ©2023</span>
      </Footer>
    </Layout>
  );
};
export default Syllabus;