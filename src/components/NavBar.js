import "./NavBar.css";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget.js";
import React from 'react';

function NavBar() {
return (
	<nav>
<ul>
<li>
<img src="../nutripet_logo.png" alt="logo" className="logo"/>
</li>
<li><Link to='/'>Inicio</Link></li>
<li><Link to='/categoria/alimentos'>Alimentos</Link></li>
<li><Link to='/categoria/accesorios'>Accesorios</Link></li>
<li className="navRight"><Link to='/contacto'>Contacto</Link></li>
<li className="navRight"><Link to='/nosotros'>Nosotros</Link></li>
<li className="navCart"><CartWidget /></li>
</ul>
	</nav>
);
}

export default NavBar;