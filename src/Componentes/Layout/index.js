import React from 'react';
import "./styles.css";
import Sidebar from '../Sidebar';



const Layout = (props) => {
    return(
        <React.Fragment>
            <div className="container">
                {props.children}
                <Sidebar />
            </div>
            <div>
                <h1>THIS IS FOOTER FOR ALL PAGES</h1>
            </div>
        </React.Fragment>

    )

};

export default Layout