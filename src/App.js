import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Facebook from './component/Facebook';

import Login from './component/Login';



function App() {
  return (
        <Router>
        <Routes>
        
          <Route path="/" element={<Facebook/>}/>
          
          
          <Route path='/login' element={<Login/>}/>

          

          
        </Routes>
      </Router>
  );
}
export default App;

