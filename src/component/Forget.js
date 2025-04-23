
import { Link } from 'react-router-dom';
import './Fordesign.css';

function Forget() {
    return (
        <div className='main'>
            <h2>Find Your Account</h2>
            <p>Please enter your email address or mobile number to search for your account.</p>
            <input type="text" placeholder="Email address or mobile number" className="input-box" />
            <div className="buttons">
                <button className="cancel-btn">Cancel</button>
                <button className="search-btn">Search</button>
            </div>
        </div>
    );
}

export default Forget;