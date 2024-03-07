import React from "react";

const Header = () => {
    return (
        <div>
        <h1>Festival Don Quijote de Paris</h1>
        <nav>
            <ul>
            <li>
                <a href="/">Accueil</a>
            </li>
            <li>
                <a href="/about">À propos</a>
            </li>
            <li>
                <a href="/events">Événements</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            </ul>
        </nav>
        </div>
    );
    }

export default Header;