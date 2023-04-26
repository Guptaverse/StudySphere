import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/upload.css'
import FileUploader from '../Components/FileUploader';
const { Header, Content, Footer } = Layout;

const Upload = () => {
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
          <FileUploader/>
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
export default Upload;