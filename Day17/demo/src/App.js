import './App.css';
import Header  from './components/Header'; 
import data from './data.json';
import Content from './components/Content';
import Home from './components/Home';
import About from './components/About';
 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
       
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={ <About/> }/> 
         <Route path='/memes' element={ <Content data={data}/>}/> 
       </Routes>
    </>
  );
}

export default App;
