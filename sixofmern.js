import React,{useCallback, useState} from "react";
const Mycomp =()=>{
    const [count, setcount] = useState(0);
    const Increment = useCallback(()=>{
        setcount((prev)=>prev+1);
    },[]);

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={Increment}>Increment</button>
        </div>
    );
};