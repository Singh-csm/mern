import React, {useMemeo} from "react";
const Mycomponent =({a,b})=>{
    const sum = useMemo(()=>{
        return a+b;
    },[a,b])
    return <div>{sum}</div>;
}