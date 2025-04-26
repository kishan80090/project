import { useLocation } from 'react-router-dom';
function SearchPage() {
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const imgurl=queryParams.get("Productname");
  const price=queryParams.get("price");

  return (
    <div>

<h1>price</h1>
      <img src={imgurl} alt={imgurl}></img>
      <h2 >{price}</h2>
      

    </div>
  );
}

export default SearchPage;