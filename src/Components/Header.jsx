import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className={menuOpen ? "menu toggle" : "menu"} onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </div>
            <Link to="/" className="nav-title">SHOOKY</Link>
            <ul className={menuOpen ? "open" : ""} onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <li>
                    <NavLink to="/men">Men</NavLink>
                </li>
                <li>
                    <NavLink className="nav-women" to="/women">Women</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
            </ul>
        </nav>
    )
}