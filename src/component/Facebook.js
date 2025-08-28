import { Link } from 'react-router-dom';
import './Facedesign.css';

function Facebook() {
  return (
    <div className="main" role="main" aria-label="Facebook Sign Up Form">
      <h1 className="color">facebook</h1>
      <h3>Create a new account</h3>
      <p>It’s quick and easy</p>
      <hr />

      <div className="row">
        <input className="input" type="text" placeholder="First name" aria-label="First name" />
        <input className="input" type="text" placeholder="Surname" aria-label="Surname" />
      </div>

      <h5 className="dob">Date of birth <span aria-label="Information" title="Date of birth">❓</span></h5>
      <div className="row">
        <select className="option" aria-label="Day">
          {[...Array(31)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <select className="option" aria-label="Month">
          {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
            <option key={i} value={m}>{m}</option>
          ))}
        </select>
        <select className="option" aria-label="Year">
          {Array.from({ length: 100 }, (_, i) => 2025 - i).map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <h5 className="dob">Gender <span aria-label="Information" title="Gender">❓</span></h5>
      <div className="row">
        <label className="radio">
          Female
          <input type="radio" name="gender" value="female" aria-label="Female" />
        </label>
        <label className="radio">
          Male
          <input type="radio" name="gender" value="male" aria-label="Male" />
        </label>
        <label className="radio">
          Custom
          <input type="radio" name="gender" value="custom" aria-label="Custom" />
        </label>
      </div>

      <input
        className="email"
        type="text"
        placeholder="Mobile number or email address"
        aria-label="Mobile number or email address"
        style={{ width: "100%" }}
      />
      <input
        className="email"
        type="password"
        placeholder="New password"
        aria-label="New password"
      />

      <p className="font">
        People who use our Service may have uploaded your contact information to Facebook.
        <a href="#"> Learn more</a>
      </p>
      <p className="font">
        By clicking Sign Up you agree to our <a href="#">Terms</a>, 
        <a href="#"> Privacy Policy</a> and <a href="#"> Cookies Policy</a>.
      </p>
      <p className="font">
        You may receive SMS notifications from us and can opt out at any time.
      </p>

      <button className="button" type="submit"><b>Sign Up</b></button>
      <Link to="/login"><h5 className="link">Already have an account?</h5></Link>
    </div>
  );
}

export default Facebook;