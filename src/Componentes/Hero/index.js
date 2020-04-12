import React from 'react';
import "./styles.css";
import Card from "../IU/Card";
import Logo from '../Logo';
import Navbar from '../Navbar';


const Hero = (props) => {
    return(
        <div>
            <Card>
                <div style={{ padding: '50px 0'  }}>
                    <Logo />
                </div>
                <Navbar />
            </Card>
        </div>
    )

}

export default Hero