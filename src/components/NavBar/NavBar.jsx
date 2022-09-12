import './index.scss';
import { NavLink } from "react-router-dom";

export const NavBar = () => {

    return (
        <div className="nav">
            <h1 className='nav-title'>Lorem</h1>
            <ul className='nav-list'>
                <li>
                    <NavLink
                    to='/'
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/catalog'
                    >
                    Catalog
                    </NavLink>
                </li>
            </ul>  
        </div>
    )
}

export default NavBar;