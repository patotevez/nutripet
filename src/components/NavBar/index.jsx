import CartWidget from '../CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

export const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <ul>
                    <li>
                        <NavLink className="nav__link btn btn-ghost normal-case text-xl mr-5" to='/'>NutriPet</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link btn btn-square btn-ghost px-8" to='/categoria/alimentos'>Alimentos</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link btn btn-square btn-ghost px-8" to='/categoria/accesorios'>Accesorios</NavLink>
                    </li>
                    <li>
                        <NavLink className="mr-5 scaleCss nav__link btn btn-square btn-ghost" to='cart'>
                            <CartWidget />
                        </NavLink>
                        { }
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;