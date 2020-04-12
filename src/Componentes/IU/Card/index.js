import React from 'react';
import "./styles.css";



const Card = (props) => {
    return(
        <div>
        <div className="card" style={{ width: props.width ? props.width: '100%' }} {...props}>
            {props.children}
        </div>

        </div>
    )

};

export default Card
