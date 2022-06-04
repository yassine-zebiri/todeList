import './App.css';
import { useState } from 'react';



function App() {
  const[arr,setArr]=useState([])
  const[text,setText]=useState('');
  const date=new Date();

  const add=(data)=>{
    if(data.length>0){
      arr.push({data:data,date:date.toDateString()});
    setArr([...arr]);
    setText('')
    }
    
  }

  const remove=(index)=>{
    arr.splice(index,1)
    setArr([...arr]);
  }
  
  return (
    <div className="App">
      <h1>todo list </h1>
      <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  />
        <button onClick={()=>{add(text)}} >+</button>
      </div>
      <div className='list'> 
      {        arr.length==0?<h2>...TODO LIST ...</h2>:""}
        {
        arr.map((i,index)=>

        <h4 className='item' key={index}>{i.data} <span>{i.date}</span> <button onClick={()=>remove(index)}>done</button> </h4>
        )}
      </div>
    </div>
  );
}

export default App;
