import React from "react"; 
import {useState} from "react";
import Thought from "./Thought";
import { v4 as uuidv4 } from 'uuid';

function Form() {
  // why [] ? 
  const [thought, setThought] = useState("");
  const [results, setResults] = useState([]);
  // 2 state ?? 
  console.log(thought);
  console.log(results);
 


  // how to write the function ? 
  const onChange = (e) => {
    e.preventDefault();
    // don't use return statement
    setThought(e.target.value);
  }

  const addThought = (e) => {
    e.preventDefault();
    setResults([...results, {id: uuidv4(), text: thought}])
  }

  
  return (
    <>
    <form>
      {/* input value ?  */}
      <input id="thought" value={thought} onChange={onChange}></input>
      <button onClick={addThought}>New thought</button>
    </form>
      <ul className="results">
        {results.map(thought => (
          <li key={thought.id}>
            <Thought thought={thought.text }/>
          </li>
        ))} 
      </ul>
    </>
  )
}

export default Form 