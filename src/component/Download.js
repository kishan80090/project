import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Download() {

    const navigate = useNavigate();

    useEffect(() => {
        const baseURL =`https://kishan80090.github.io/jsondata/products.json`;

        axios.get(baseURL).then((response) => 
            {
                localStorage.setItem("products", JSON.stringify(response.data));
                console.log("Data stored successfully");
                // navigate("/shopping"); 
            })
            .catch((error) => {
            console.error("Error storing data", error);
            
            });
    });

    return (
        <div>

            <p><b>Storing product data...</b></p>
            
        </div>
    );
}

export default Download;