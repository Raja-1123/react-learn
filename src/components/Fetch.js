import React,{useState,useEffect} from 'react'


const Fetch = () => {
    const [data,setData] = useState([]);
    useEffect(() => {fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(json => setData(json))},[]);
  return (
    <div>
      <p>Hello World</p>
      {data.map(items => <li key={items.id}>{items.title}</li>)}
    </div>
  )
}

export default Fetch