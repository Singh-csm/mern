import React, {useCallback, useState} from "react";
const Mycomponent = () =>{
    const [count,setcount]= useState(0);
    const Increment = useCallback(()=>{
        setcount((precount)=>precount+1);
    
    },[])
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};