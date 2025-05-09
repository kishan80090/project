import { useEffect, useState } from "react";
import Product from "./Product";

function Shopping() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("products");
    if (data) {
      setProducts(JSON.parse(data));
    }
  }, []);

  return (
    <div className="margin">
      <div className="show">
      </div>
      {products.map((product, index) => (
        <Product
          key={index}
          sname={product.name}
          price={product.price}
          pic={product.image}
          json={JSON.stringify(product)}
        />
      ))}
    </div>
  );
}

export default Shopping;
