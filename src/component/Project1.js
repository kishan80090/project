import React, { useState } from 'react';
import Design1 from './Design1.css';
function Project1(Props) {
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
            case "multiply":
                x = num1 * num2;
                break;
            case "divide":
                x = num2 !== 0 ? num1 / num2 : "Error"; 
                break;
            case "remainder":
                x = num2 !== 0 ? num1 % num2 : "Error";
                break;
            default:
                x = "Invalid";
        }
        setResult(x);
    }
    return (
        <div className='col'>
            <input className='boxsize' placeholder='N1' value={N1} onChange={(e) => setN1(e.target.value)} type="number" /><br />
            <input className='boxsize' placeholder='N2' value={N2} onChange={(e) => setN2(e.target.value)} type="number" /><br />
            <input className='boxsize' placeholder='Result' value={Result} readOnly /><br></br><br></br>
            <input className='submit' type="submit" onClick={handleAdd} />
             <h2 className='calculate' >Calculate</h2>
            <p className='col1'>Add</p>
            <input className='col1' type="radio" name="c" value="add" checked={operation == "add"} onChange={(e) => setOperation(e.target.value)}></input>

            <p className='col1'>Minus</p>
            <input className='col1' type="radio" name="c" value="subtract" checked={operation == "subtract"} onChange={(e) => setOperation(e.target.value)}></input>

            <p className='col2'>Multiply</p>
            <input className='col2' type="radio" name="c" value="multiply" checked={operation == "multiply"} onChange={(e) => setOperation(e.target.value)}></input>

            <p className='col3'>Divide</p>
            <input className='col3'  type="radio" name="c" value="divide" checked={operation == "divide"} onChange={(e) => setOperation(e.target.value)}></input>

            <p className='col4'>Remainder</p>
            <input className='col4' type="radio" name="c" value="remainder" checked={operation == "remainder"} onChange={(e) => setOperation(e.target.value)}></input>
        </div>
    );
}
export default Project1;