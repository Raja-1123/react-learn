import React,{useState} from 'react'

const Click = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <center>
      <button onClick={() => setCount(count+1)}>Click Here</button>
      <h1>{count}</h1>
      </center>
    </div>
  )
}

export default Click