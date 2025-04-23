import { Link } from 'react-router-dom';
import './Logindesign.css';

function Login() {
    return (
        <div className="main">
            <h1>facebook</h1>
            <h2>Log in to Facebook</h2>
            <input type="text" placeholder="Email address or phone number" className="input-box" />
            <input type="password" placeholder="Password" className="input-box" />
            <button className="login-button">Log in</button>
            <p className="links">
              <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forgotten account?</a> · <Link to="/"><a href="#">Sign up for Facebook</a></Link>
            </p>
        </div>
    );
}

export default Login;