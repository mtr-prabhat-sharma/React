
import './style.css' ;
import logo from './logo.png';

export function Header() {
    return(
        
        <header className='headerClass'>
        <img src={logo} alt="LabApp Logo" />
        <div className="titleContainer">
            <span>Title: <strong>LabApp</strong></span>
        </div>
    </header>
       
    )
}