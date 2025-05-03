
import { useState } from "react";

import axios from 'axios';

function Read() {

  const [products, setProducts] = useState([]);
  const showData = () => {
    const data = localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
    }
  };
  const add =(() => {
    setProducts(products*1+1)
  });
  return (
    <div>
        <table border="1" >
            <tbody>
      <tr>  
      <td><button onClick={showData}>Show Data</button></td>
      </tr>
      </tbody>
      </table>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px',color:" 2px solid black",margin:"50px",marginLeft:"70px" }}>
  {products.map((product) => ( 
      <li style={ {listStyle: 'none', border: '4px solid blue', padding: '10px', width: '200px' }}>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <br/>
      <img src={product.image} width="100"/>
    </li>
  ))}
</div>
    </div> 
  );
}
export default Read;