import logo from './logo.svg';
import './App.css';
import Header  from './components/Header'; 
import data from './data.json';
import Content from './components/Content';

function App() {
  return (
    <>
      {/* add a new component header  */}
      <Header fName="israa" lName="othman" color="blue" />
      
      {/* add a new component content   */}
     <Content data={data}/>
    </>
  );
}

export default App;
