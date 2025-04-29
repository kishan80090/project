
import { Link } from 'react-router-dom';
import Product from './Product';
import SearchPage from './Search';
function Home() {

    return (
    
        <div className="container">
    
              <Product productname="Rose" sname="Rose" pic="/pic/red.jpg "price={20} />

                <Product productname="Boll" sname="Boll" pic="/pic/Boll.jpg"price={50} />
                  
                <Product productname="Fan" sname="Fan" pic="/pic/Fan.jpg"price={1500} />
                                
                <Product productname="Note book" sname="Note book" pic="/pic/Notbook.jpg"price={80} />
                  
                <Product productname="Oil" sname="Oil" pic="/pic/Oil.jpg"price={150} />
                  
                <Product productname="Pen" sname="Pen" pic="/pic/Pen.jpg"price={85} />
                
                <Product productname="Face wash" sname="Face wash" pic="/pic/Facewash.jpg"price={170} />
                
                <Product productname="Phone" sname="Phone" pic="/pic/Phone.jpg"price={1350} />
                
                <Product productname="Pensil" sname="Pensil" pic="/pic/Pensil.jpg"price={35} />
                
                <Product productname="Rose" sname="Rose" pic="/pic/blue.jpg"price={15} />
              
              </div>
        
        );
   }
export default Home;
