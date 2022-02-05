import React from "react";
import { BsCart4 } from "react-icons/bs";
import img from './LogoNavBar.jpg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default function navBar (){
    return(
        <>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark navega">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" href="#"><img src={img } className="logNav" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to={'/'} className="nav-link active" aria-current="page" href="#">INICIO</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/nosotros'} className="nav-link" href="#">NOSOTROS</Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/categoria/:categoriaId"} className="nav-link" href="#">PRODUCTOS</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                        <Link to={'/productos'} className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PRODUCTOS
                        </Link>
                            <ul className="dropdown-menu subMenu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">CASCOS</a></li>
                                <li><a className="dropdown-item" href="#">AUTOS</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                        <Link to={'/carrito'} className="nav-link" href="#">< BsCart4 style={{ color:'white', marginLeft:'15px', fontSize:'35px'}} /></Link>
                        </li>
                        
                    </ul>
                    
                    

                    </div>

        

                </div>

            </nav>
        </>
    )
}