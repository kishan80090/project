import React, { useState } from 'react';
import './Product.css';
function Product(props) {
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
    };
    const negative = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    let productlink = `/?productname=${props.sname}`;
    const jsonproduct = JSON.parse(props.json);
    console.log(props.json);
    return (
        <div className="col1"> 
            <a href={productlink} target="_blank" rel="noopener noreferrer">
                <img className="col3" alt={jsonproduct.name} src={props.pic} />
            </a>
            <center><h2 className="name">{jsonproduct.name}</h2></center>
            <h3 className='price'>Price ₹{props.price}</h3>
            <div className="col2">
                <div className="text">
                    <button onClick={negative}>−</button>
                    <span>{count}</span>
                    <button onClick={add}>+</button>
                </div>
            </div>
            <p>{props.children}</p>
        </div>
    );
}
export default Product;