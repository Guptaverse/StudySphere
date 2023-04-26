import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import TriangleButton from '../Components/TriangleButton';
import Searchbar from '../Components/Searchbar';
const { Header, Content, Footer } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="home" style={{backgroundColor:"#1677ff"}}>
              <Link to="/">Home</Link>  
            </Menu.Item>
            <Menu.Item key="articles">
              <Link to="/articles">Articles</Link>  
            </Menu.Item>
            <Menu.Item key="uploads">
              <Link to = "/upload">Uploads</Link>
            </Menu.Item>
        </Menu>

      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {/* Content */}
          
          <div className='sphere'></div>
          <Searchbar/><br></br>
          <div className="explanation">

          </div>
          <TriangleButton/>
          {/* <TriangleButton/>
          <TriangleButton/> */}

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
export default Home;