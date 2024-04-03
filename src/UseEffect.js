import React, { useEffect, useState } from "react";


const UseEffect = () =>{
 const [num,setNum] = useState(0);

useEffect(()=>{
    
    document.title = `Hello Tittle ${num}`;
 },[])

    return(
        <>
           <button onClick={()=>{setNum(num + 1)}}>
                click me {num}
           </button>
           <br/>
           
        </>
    );
}

export default UseEffect;