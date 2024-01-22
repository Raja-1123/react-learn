import React,{useState} from 'react'

const Change = () => {
    const [user,setUser] = useState('');
    const Handler = e => {
        setUser(e.target.value)
    }
  return (
    <div>
        <center>
            <input type="text" placeholder='UserName' name='user' onChange={Handler} />
            <h1>{user}</h1>
        </center>
    </div>
  )
}

export default Change
