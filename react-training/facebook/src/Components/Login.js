import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    let [user, setuser] = useState('');
    let [pwd, setpwd] = useState('');
    let navigate = useNavigate();
    function handleClick(){
        if(user=='admin' && pwd =='nimda') {
            localStorage.setItem('token',`${user}-${Date.now()}-CY-BLR`)
             ///navigate('/fb/wall')
             window.location.href = '/profile';
        }else {
            alert('Invalid credentials');

        }
    }

    return (
        <form className="form">
            <input type='text' placeholder='Username' onChange={(e)=>setuser(e.target.value)}/>
            <input type='password' placeholder='Password' onChange={(e)=>setpwd(e.target.value)} />

            <button type="submit" onClick={()=>handleClick()}>Login</button>
        </form>
    );
}