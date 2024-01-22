import React,{useState} from 'react'

const FormValidation = () => {
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
    else{console.log(data);}
    

}


  return (
    <div>
        <center>
            <form autoComplete='off' onSubmit={submitHandler}>
                <input type="text" name='user' value={user} placeholder='UserName' onChange={changeHandler} />
                <input type="email" name='email' value={email} placeholder='Email' onChange={changeHandler} />
                <input type="password" name='password' value={password} placeholder='Password' onChange={changeHandler} />
                <input type="password" name='confirmPassword' value={confirmPassword} placeholder='ConfrimPassword' onChange={changeHandler} />
                <input type='submit'name='Submit' />
            </form>
        </center>
    </div>
  )
}

export default FormValidation