
import './App.css';
import { Routes, Route } from "react-router-dom"
 import { LandingPage } from './LandingPage/LandingPage';
 import { Home } from './Home/Home.jsx'
 import { Register } from './Register/Register.jsx'
 import { Modal } from './Modal/Modal.jsx'
 import {AllTaskModal} from './Modal/allTaskModal.jsx'
function App() {


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <LandingPage/> } />
      <Route path= '/projects' element= { <Home />} />
      <Route path ='/register' element={  <Register/> } />
      <Route path='/modal' element= {<AllTaskModal />} /> 

      </Routes>
  
  
    </div>
  );
}

export default App;
