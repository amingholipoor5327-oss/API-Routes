"use client";
import { useEffect, useState } from "react";
import "./style.css"
export default function Pageproducts(){

const [data , setData] = useState([]);
const [namevalue , setNamevalue] = useState("");
const [price , setPrice] = useState("");

 function Goapiaddres(){
    fetch("http://localhost:3000/api/products")
    .then((res)=>res.json())
    .then((data)=>setData(data))
    .catch((error)=>console.error(error))
}

function HandelMethod(){
    fetch("http://localhost:3000/api/products" , {
        method : "POST", 
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({name : namevalue , price : price})
    }
    )
    .then( Goapiaddres)
    .catch((error)=>console.error(error))
}

useEffect(
    ()=>{
        Goapiaddres()
    }
,[])


return (<div>

   <ul>
        {
            data.map(
                (value , index)=>(
                   <li key={index}>{value.name} - {value.price}</li>
                )
            )
        }
     </ul>


     <div>

        <input 
        type="text"
        placeholder="write your name..."
        value={namevalue}
        onChange={(e)=>setNamevalue(e.target.value)}
        ></input>
         
          <input 
        type="text"
        placeholder="write your price..."
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        ></input>

        <button onClick={()=>{
            HandelMethod()
            setNamevalue("")
            setPrice("")
        }}>Add</button>
     </div>
</div>)
}
