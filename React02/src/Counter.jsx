import {useState} from 'react';

function Counter(){
    const[x,setX]=useState(0);
    return(
        <>
        <div className="text-3xl text-white  flex items-center justify-center md:font-bold mt-72 pb-40">
            {x}
        </div>
        <div className="container1">
        
        <button className="container" onClick={()=>setX(x+1)}>Increment</button>
        <button className="container2" onClick={()=>setX(x-1)}>Decrement</button>
        </div>
        
        </>
        
    )
}
export default Counter;