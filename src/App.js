import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './component/Home';
import SearchPage from './component/Search';
import Product from './component/Product';
// import Apicall from './component/Apicall';


function App() {
  return (
    <Router>

      

      <Routes>
      
       <Route path="/" element={<Home />} />
       <Route path="/search" element={<SearchPage/>}/>
       <Route path="/product" element={<Product/>}/>
       
      
      </Routes>
     </Router>
  );
}

export default App;