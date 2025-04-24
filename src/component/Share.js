import { useLocation } from 'react-router-dom';

function SearchPage() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  return (

    <div>
        
      <h1>{queryParams}</h1>

    </div>

  );
}

export default SearchPage;