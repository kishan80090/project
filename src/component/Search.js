import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);

  const imgurl = queryParams.get("productname");
  const price = queryParams.get("price");

  return (
    <div>
      
      
      
      <img src={imgurl} alt="Product" style={{ width: '200px', height: '200px' }} />
      
      <h2>Price: ₹{price}</h2>
    </div>
  );
}

export default SearchPage;
