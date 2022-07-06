import {useEffect, useState} from "react"
import './App.css';
import axios from 'axios';
function App() {
  const [name,setname]=useState();

  useEffect(()=>{
     getNames();
  },[])

  const getNames=async ()=>{
    const {data}=await axios.get('/name');
    setname(data)

  }
  return (
    <div className="App">
     <h1>hello I am {name}</h1>
    </div>
  );
}

export default App;
