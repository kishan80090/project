
import { Link } from 'react-router-dom';
import Product from './Product';
import SearchPage from './Search';
function Home() {

    return (
    
        <div className="container">
            
            <Link to="/search?price=50">rose
        
              <Product productname="Rose" sname="Rose" pic="/pic/red.jpg" />

              </Link>
            
                <Product productname="Boll" sname="Boll" pic="/pic/Boll.jpg" />
                  
                <Product productname="Fan" sname="Fan" pic="/pic/Fan.jpg" />
                  
                <Product productname="Note book" sname="Note book" pic="/pic/Notbook.jpg" />
                
                <Product productname="Oil" sname="Oil" pic="/pic/Oil.jpg" />
                    
                <Product productname="Pen" sname="Pen" pic="/pic/Pen.jpg" />
                  
                <Product productname="Face wash" sname="Face wash" pic="/pic/Facewash.jpg" />
        
                <Product productname="Phone" sname="Phone" pic="/pic/Phone.jpg" />
        
                <Product productname="Pensil" sname="Pensil" pic="/pic/Pensil.jpg" />
        
                <Product productname="Rose" sname="Rose" pic="/pic/blue.jpg" />

                <SearchPage></SearchPage>
         
              </div>
        
        );
}
export default Home;
