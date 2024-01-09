import {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 


export let LoginRoute = () => {
    let [user, setuser] = useState('');
    let [pwd, setpwd] = useState('');
    let navigate = useNavigate();
    function handleClick(){
        if(user=='admin' && pwd =='nimda') {
            localStorage.setItem('token',`${user}-${Date.now()}-CY-BLR`)
             ///navigate('/fb/wall')
             window.location.href = '/fb/wall';
        }else {
            alert('Invalid credentials');

        }
    }
    return(<>
    <div>Enter Username: <input type='text' onChange={(e)=>setuser(e.target.value)}/></div>
    <div>Enter Password: <input type='password' onChange={(e)=>setpwd(e.target.value)}/></div>
    <div><button onClick={()=>handleClick()}>Login</button></div>
    </>);
}