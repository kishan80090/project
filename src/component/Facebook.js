
import { Link } from 'react-router-dom';
import './Facedesign.css';
function Facebook() {
    return(
        <div  className='main' >
            <h1 className='color' >facebook</h1>
            <h3>Create a new account</h3>
            <p>Its`s quick and easy</p>
            <p className='color1' >___________________________________________________________________________</p>
            <input className='input' type="text" placeholder='First name' ></input>
            <input className='input' type="text" placeholder='Surname' ></input>
            <h5 className='dob' >Date of birth❓</h5>
            <input list="input" className='option' placeholder='Date' type='text' ></input>
            <input list='input1' className='option' placeholder='Month' type='text' ></input>
            <input list="input2" className='option' placeholder='Year' type='text' ></input>
            <datalist id="input">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
            </datalist>
            <datalist id="input1" >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>Octumber</option>
                <option>November</option>
                <option>December</option>
            </datalist>
            <datalist id="input2">
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
            </datalist>
            <h5 className='dob' >Gender❓</h5>
            <button className='radio'  >Female<input   type='radio' name='c' ></input></button>
            <button className='radio' >Male<input    type='radio' name='c' ></input></button>
            <button className='radio' >Custom<input   type='radio' name="c" ></input></button>
            <input className='email' type='text' placeholder='Mobile number or email address'></input>
            <input className='email' type='text' placeholder='New password'></input>
            <p className='font' >People who use our Service may have uploaded your contact information to<br/></p>
            <p className='font1' >Facebook.  <a href="https://www.facebook.com/help/637205020878504">Learn more</a></p>
            <p className='font2' >By clicking Sign Up you agree to our<a href="https://www.facebook.com/legal/terms/update">Terms  </a>
            <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"> Privacy Policy </a> and
            <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"> Cokies Policy</a></p>
            <p className='font3' >You may receive SMS notifications from us and can opt out at any time</p>
            <button className='botton' ><b>Sign Up</b></button>
            <Link to="/login"><h5 className='link' ><a href="#">Already have an account?</a></h5></Link> 
            

        </div>
    )
}
export default Facebook;