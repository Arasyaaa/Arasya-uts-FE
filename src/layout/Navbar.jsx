// src/components/Navbar.js
import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Nyaman Hotel</h1>
            <ul>
                <li><a href="/">Kamar</a></li>
                <li><a href="/Reservasi">Reservasi</a></li>
                <li><a href="/Pembayaran">Pembayaran</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
