import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './Login';
import App from '../App';


// export let Hierarchy = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/profile/' element={<><App /></>} />
//             </Routes>
//         </BrowserRouter>
//     );

// }


export let Container = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/profile/' element={localStorage.getItem('token') === undefined ? <Navigate to="/login" /> : <><App /></>} />
                <Route path='/login' element={<Login />} />
               
            </Routes>
        </BrowserRouter>
    );
}