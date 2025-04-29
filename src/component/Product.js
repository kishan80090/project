import './Product.css';
 import React, { useState } from 'react';
 import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 function Product(props) {

     const [count, setCount] = useState(0); 
     
     const add = (() => {
     setCount(count*1 + 1)
     });
 
     const negative = (() => {         
        if (count > 0) 
        {

        setCount(count*1 - 1);

        }
     });
     let productlink=`/search?productname=${props.pic}&price=${props.price}`;
     
     return(
     
     <div className='col1'>
        <a href={productlink} target='a'>


        <img className='col3' alt={props.sname} src={props.pic}></img> 
        </a>

            <center><h2 className='name'>{props.sname}</h2></center>

            <div className='col2'>
 


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