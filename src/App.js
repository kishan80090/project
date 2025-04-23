import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Facebook from './component/Facebook';

import Login from './component/Login';

// import Forget from './component/Forget';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        
          <Route path="/" element={<Facebook/>}/>
          
          
          <Route path='/login' element={<Login/>}/>/

          {/* <Route path='/forget' element={<Forget/>}/> */}

          
        </Routes>
      </Router>

      </div>
    
  );
}
export default App;
