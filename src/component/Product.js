import './Product.css';
 import React, { useState } from 'react';
 import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 function Product(props) {
     
     const [count, setCount] = useState(0); 
     
     const add = (() =>{
     setCount(count*1 + 1)
     });
 
     const negative = (() =>{         
        if (count > 0) 
        {

        setCount(count*1 - 1);

        }
     });
     let productlink=`product/?productname=${props.productname}`;
     
     return(
     
     <div className='col1'>

           <Link to="/search"><img className='col3' src={props.pic}></img></Link>   

            <center><h2 className='name'>{props.sname}</h2></center>

            <div className='col2'>
 
             <Link className='border' to={productlink}>{props.sname}</Link>

                <div className="text">
 
                 <button onClick={negative}>−</button>

                 <span>{count}</span>

                 <button onClick={add}>+</button>
 
                </div>
             </div>
 
             <p>{props.children}</p>
 
         </div>
     )
 };
 export default Product;