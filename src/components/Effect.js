import React,{useEffect, useState} from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
    useEffect(() => console.log(count), [count]);
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Click</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Effect