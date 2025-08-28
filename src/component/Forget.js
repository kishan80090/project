import { Link } from 'react-router-dom';
import './Fordesign.css';

function Forget() {
    return (
        <div className="forget-container">
            <div className="forget-box">
                <h2 className="title">Find Your Account</h2>
                <p className="subtitle">
                    Please enter your email address or mobile number to search for your account.
                </p>
                <input 
                    type="text" 
                    placeholder="Email address or mobile number" 
                    className="input-box" 
                />
                <div className="button-group">
                    <button className="cancel-btn">Cancel</button>
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </div>
    );
}

export default Forget;
