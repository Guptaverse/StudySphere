import React from 'react'
import './App.css';
// import {Routes,Route} from 'react-router-dom'
import Home from './Routes/Home'
// import Articles from './Routes/Articles'
// import Upload from './Routes/Upload'
// import Syllabus from './Routes/Syllabus'
// import Search from './Routes/Search'
// import InputField from './Components/InputField';

// import CircleButtons from './Components/CircleButtons';
// import TriangleButton from './Components/TriangleButton';

function App() {
  return (
    <>
{/*     
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/upload' element={<Upload/>}></Route>
      <Route path='/articles' element={<Articles/>}></Route>
      <Route path='/syllabus' element={<Syllabus/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/input' element={<InputField/>}></Route>
    </Routes> */}
      {/* <Route path='/circle' element={<TriangleButton/>}></Route> */}
    <Home/>
    
    </>
  );
}

export default App;
