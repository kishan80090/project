import { useState } from "react";
import axios from "axios";

function Apicall(){
    const[error,setError]=useState('');
    const[image,setImage]=useState('');

    const Search =()=>{

        const baseURL=`https://kishan80090.github.io/project/Name.json`;

        axios.get(baseURL).then((response)=>{
            setImage(response.data);
        })

        .catch(error=> {
            console.log("Error",error);
            setError("API call is Error :");
        });
    }
    return(
        <div>
        <button onClick={Search}>SUBMIT</button>

        
   {image &&
   <pre>
    {JSON.stringify(image,null,2)};
   </pre>
}
        </div>
    )
};
export default Apicall;