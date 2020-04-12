import React from 'react';
import "./styles.css";


const Header = (props) => {
    return(
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <div>

                Personal Blog
            </div>
        </header>
    )

}

export default Header