import React, { useState } from 'react'
import "../styles/NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        MidwayUSA
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>


                        <li className="nav-item">
                            <Link
                                to="/arrivals"
                                className="nav-links"
                                onClick={closeMenu}
                            >
                                New Arrivals
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/free-Shipping" className="nav-links" onClick={closeMenu}>
                                Free Shipping
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sales-clearance" className="nav-links" onClick={closeMenu}>
                                Sales and Clearance
                            </Link>
                        </li>
                         </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
