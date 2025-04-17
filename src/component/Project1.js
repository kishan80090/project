import React, { useState } from 'react';
import './Design1.css';

function Project1() {
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
            default: x = "Invalid";
        }

        setResult(x);
    }

    return (
        <div className="container">
            <h2 className="title">Simple Calculator</h2>
            <input className="boxsize" placeholder="N1" value={N1} onChange={(e) => setN1(e.target.value)} type="number" />
            <input className="boxsize" placeholder="N2" value={N2} onChange={(e) => setN2(e.target.value)} type="number" />
            <input className="boxsize" placeholder="Result" value={Result} readOnly />

            <div className="operations">
                <label><input type="radio" name="op" value="add" checked={operation === "add"} onChange={(e) => setOperation(e.target.value)} /> Add</label>
                <label><input type="radio" name="op" value="subtract" checked={operation === "subtract"} onChange={(e) => setOperation(e.target.value)} /> Subtract</label>
                <label><input type="radio" name="op" value="multiply" checked={operation === "multiply"} onChange={(e) => setOperation(e.target.value)} /> Multiply</label>
                <label><input type="radio" name="op" value="divide" checked={operation === "divide"} onChange={(e) => setOperation(e.target.value)} /> Divide</label>
                <label><input type="radio" name="op" value="remainder" checked={operation === "remainder"} onChange={(e) => setOperation(e.target.value)} /> Remainder</label>
            </div>

            <button className="submit" onClick={handleAdd}>Calculate</button>
        </div>
    );
}

export default Project1;
