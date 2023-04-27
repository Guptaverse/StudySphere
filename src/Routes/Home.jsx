import {Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/home.css'


// routes
import {Routes,Route} from 'react-router-dom'
import Articles from './Articles'
import Upload from './Upload'
import Syllabus from './Syllabus'
import Search from './Search'
import InputField from '../Components/InputField';
import HomeContent from '../Components/HomeContent';
import CreateBlog from './CreateBlog';

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
            <Menu.Item key="home" >
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
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
        

        <Routes>
          <Route path='/' element={<HomeContent/>}></Route>
          <Route path='/upload' element={<Upload/>}></Route>
          <Route path='/articles' element={<Articles/>}></Route>
          <Route path='/syllabus' element={<Syllabus/>}></Route>
          <Route path='/search/:name' element={<Search/>}></Route>
          <Route path='/input' element={<InputField/>}></Route>
          <Route path='/create' element={<CreateBlog/>}></Route>
          {/* <Route path='/circle' element={<TriangleButton/>}></Route> */}
        </Routes>
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