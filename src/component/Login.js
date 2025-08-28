import { Link } from 'react-router-dom';
import './Logindesign.css';

function Login() {
    return (
        <div className="main" style={{background:" rgb(221, 209, 209)"}} >
            <h1 style={{color:"blue"}} >facebook</h1>
            <h3>Log in to Facebook</h3>
            <input type="text" style={{width:"90%",height:"35px",fontSize:"16px"}} placeholder="Email address or phone number" className="input-box" />
            <br/><br/>
            <input type="password" style={{width:"90%",height:"35px",fontSize:"16px"}} placeholder="Password" className="input-box" />
            <br/><br/>
            <button className="login-button" style={{width:"23%",height:"30px",background:"green"}} >Log in</button>
            <p className="links">
              <a href="#">Forgotten account?</a> · <Link to="/"><a href="#">Sign up for Facebook</a></Link>
            </p>
        </div>
    );
}
export default Login;