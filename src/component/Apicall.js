import { useState } from "react";
import axios from 'axios';

function Apicall() {
  const [products, setProducts] = useState([]);

  const show = () => {
    axios.get("https://kishan80090.github.io/jsondata/products.json")
      .then(response => {
        localStorage.setItem("products", JSON.stringify(response.data));
      })
      .catch(error => {
        alert("Error fetching data");
      });
  };

  const showData = () => {
    const data = localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
    }
  };

  const clearData = () => {
    localStorage.removeItem("products");
  };

  return (
    <div>
        <table border="1" >
            <tbody>
      <tr>  
      <td><button onClick={show}>Store</button></td>
      <td><button onClick={showData}>Show Data</button></td>
      <td><button onClick={clearData}>Clear Data</button></td>
      </tr>

      </tbody>
      </table>
     
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px',color:"red",margin:"50px",marginLeft:"60px" }}>
  {products.map((product) => ( 
    <li style={{ listStyle: 'none', border: '2px solid black', padding: '10px', width: '200px' }}>
      {product.name}
      <p>Price: {product.price}</p>
      <img src={product.image} width="100"/>
    </li>
  ))}
</div>

    </div>
  );
}

export default Apicall;

