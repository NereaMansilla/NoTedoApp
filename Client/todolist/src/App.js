
import './App.css';
import { Routes, Route } from "react-router-dom"
 import { LandingPage } from './LandingPage/LandingPage';
 import { Home } from './Home/Home.jsx'
 import { Register } from './Register/Register.jsx'
 import { Task } from './Task/Task';
 import { CloseSesion } from './CloseSesion/CloseSesion';
 import { Verifiy } from './RecoverPassword/Verifiy';

function App() {


  return (
    <div className="App">
      <Routes>
      <Route path= '/projects' element= { <Home />} />
      <Route path ='/register' element={  <Register/> } />
      <Route path='/verify' element={<Verifiy/>} />
      <Route path='/Task/:name' element={<Task/>} />
      <Route path='/:username' element={<CloseSesion/>} />
      <Route path='/' element={ <LandingPage/> } />

      </Routes>
  
  
    </div>
  );
}

export default App;
