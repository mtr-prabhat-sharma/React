import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Greetings from './JsxComponent';
import Likes from './Likes';
import { A1, A2, A3 } from './C2C';
import { createContext } from 'react';
import { Params } from './PassingParams';
import { LoginRoute } from './RouteRedirect';
import { Provider } from 'react-redux';
import { MyShop } from './ReduxIntegeration'; 
import { shop } from '../Store/Store'; 

const CommonShare = createContext();
let styles = { color: 'green' };
export let Hierarchy = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/fb/walls/' element={<><Greetings /><Likes /></>} />
                <Route path='/use/context/' element={<CommonShare.Provider value={styles}>
                    <A1 />
                    <A2 />
                    <div style={styles}>
                        <A3 />
                        {styles.color}
                    </div>
                </CommonShare.Provider>} />
            </Routes>
        </BrowserRouter>
    );

}

let ReduxComponent = () => {
    return(
        <Provider store={shop}>
            <MyShop />
        </Provider>
    );
}

export let Container = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/fb/walls/' element={localStorage.getItem('token') === undefined ? <Navigate to="/login" /> : <><Greetings /><Likes /></>} />
                <Route path='/use/context/' element={<Hierarchy />}/>
                <Route path='/passing/params/:name/:place/:animal/:thing' element={<Params />} />
                <Route path='/login' element={<LoginRoute />} />
                <Route path='/redux' element={<ReduxComponent />} />
            </Routes>
        </BrowserRouter>
    );
}