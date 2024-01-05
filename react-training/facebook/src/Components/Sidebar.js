import React from 'react';
import '../style.css';

function Sidebar() {
    let arr = ['Home','Product','Careers','Contact US'];
    let res = arr.map((ele) => {
        return(<ul><li>{ele}</li></ul>)
    })
    return (<aside className='asideClass'>{res}</aside>)
}

export default Sidebar;