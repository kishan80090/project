import React, { useState } from 'react';
import Design2 from './Design2.css';
function Project2(Props) {
    const [N1, setN1] = useState("");
    const [N2, setN2] = useState("");
    const [Result, setResult] = useState("");
    const [operation, setOperation] = useState("add"); 

    function handleAdd(e) {
        e.preventDefault();
        const num1 = Number(N1);
        const num2 = Number(N2);
        let x;
        
        switch (operation) {
            case "add":
                x = num1 + num2;
                break;
            case "subtract":
                x = num1 - num2;
                break;
        }
        setResult(x);
    }
    return (
        <div className='all' >
            <input className='col' placeholder='N1' value={N1} onChange={(e) => setN1(e.target.value)} type="number" /><br />
            <input className='col' placeholder='N2' value={N2} onChange={(e) => setN2(e.target.value)} type="number" /><br />
            <input className='col' placeholder='Result' value={Result} readOnly /><br></br><br></br>
            <input className='submit' type="submit" onClick={handleAdd} />
            <p className='col1'>Add</p>
            <input className='col1'  type="radio" name="c" value="add" checked={operation == "add"} onChange={(e) => setOperation(e.target.value)}></input>
            <p  className='col2'>Minus</p>
            <input className='col2'  type="radio" name="c" value="subtract" checked={operation == "subtract"} onChange={(e) => setOperation(e.target.value)}></input>
        </div>
    );
}
export default Project2;