import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Download from "./component/Download";
import Shopping from "./component/Shopping";
import Search from "./component/Search";
import './App.css';

function App() {
  return (
    <Router>
      <h1 className="fading-text">Shopping Market</h1>
      <div className="App">
                                                                   
        <Link to="/shopping" style={{marginRight:"10px"}}  >Show</Link>
        <Link to="/download" style={{marginLeft:"10px"}}  >Download</Link>

      </div>
      <Routes>
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/download" element={<Download />} />
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </Router>
  );
}
export default App;

