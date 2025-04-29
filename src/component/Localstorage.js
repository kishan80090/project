import { useState } from "react";

import axios from 'axios';

import Apicall from "./Apicall";

function Localstorage() {

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
 return(
  <div>
  <Apicall></Apicall>
  </div>
 )
}
export default Localstorage;