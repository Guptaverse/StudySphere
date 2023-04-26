import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/upload.css'
import FileUploader from '../Components/FileUploader';
import InputField from '../Components/InputField';
const { Header, Content, Footer } = Layout;

const Articles = () => {
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
            <Menu.Item key="articles" style={{backgroundColor:"#1677ff"}}>
              <Link to="/articles">Articles</Link>  
            </Menu.Item>
            <Menu.Item key="uploads" >
              <Link to = "/upload">Uploads</Link>
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
                // {label:"subject",placeholder:"Math"},
                // {label:"semester",placeholder:"7th"},
              ]
            }

          />
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
export default Articles;