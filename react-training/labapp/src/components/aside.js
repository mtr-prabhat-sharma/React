import './style.css';

export function Aside() {
    let arr = ['Home','Product','Careers','Contact US'];
    let res = arr.map((ele) => {
        return(<ul><li>{ele}</li></ul>)
    })
    return (<aside className='asideClass'>{res}</aside>)
}