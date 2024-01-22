
import './App.css';
// import Change from './components/Change';
// import Click from './components/Click';
// import Effect from './components/Effect';
// import Map from './components/useMap';
// import Fliter from './components/useFilter';
// import FormValidation from './components/FormValidation';
// import Fetch from './components/Fetch';
// import Firebase from './components/Firebase';
import Navbar from './components/router/Main';
import Home from './components/router/Home';
import Dashboard from './components/router/Dashboard';
import About from './components/router/About';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/dashboard' exact Component={Dashboard}/>
        <Route path='/about' exact Component={About}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
