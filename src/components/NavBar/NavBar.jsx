import './index.scss';
import { NavLink } from "react-router-dom";

export const NavBar = () => {

    return (
        <div className="nav">
            <ul className='nav-list'>
                <li>
                    <NavLink
                    to='/'
                    >
                    Home
                    </NavLink>
                </li>
            </ul>  
        </div>
    )
}

export default NavBar;