import React from 'react';
import './header.css';
import logo from '../../assets/Logos/logo.png';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const isActive = (path) => currentPath.startsWith(path) ? 'active' : '';

    return (
        <header className="encabezado">
        <div className="contenido-encabezado">
            <div className="logo">
                <Link to="/" className={isActive('/')}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <nav className="navegacion">
                <Link to="/contacto" className={isActive('/contacto')}>Contacto</Link>
                <Link to="/productos" className={isActive('/productos')}>Productos</Link>
                <Link to="/quienes-somos" className={isActive('/quienes-somos')}>Quienes Somos</Link>
            </nav>
        </div>
    </header>
    );
}

export default Header;