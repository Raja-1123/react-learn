import React,{useState} from 'react'
import axios from 'axios';

const Firebase = () => {
    const [data,setData] = useState({user:'',email:'',password:'',confirmPassword:''})
    const {user,email,password,confirmPassword} = data;


const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
}

const submitHandler = e =>{
    e.preventDefault();
    if(user[0].length <= 5){
        alert(user[0].length);
    }
    else if (password[0] !== confirmPassword[0]){
        alert("Passwords doesn't Matched")
        
    }
    else{axios.post('https://react-learn-3da35-default-rtdb.firebaseio.com/register.json',data).then(() => alert('Submitted Sucessfully'))}

}

  return (
    <div>
        <center>
            <form autoComplete='off' onSubmit={submitHandler}>
                <input type="text" name='user' value={user} placeholder='UserName' onChange={changeHandler} />
                <input type="email" name='email' value={email} placeholder='Email' onChange={changeHandler} />
                <input type="password" name='password' value={password} placeholder='Password' onChange={changeHandler} />
                <input type="password" name='confirmPassword' value={confirmPassword} placeholder='ConfrimPassword' onChange={changeHandler} />
                <button type='submit'>submit</button>
            </form>
        </center>
    </div>
  )
}

export default Firebase