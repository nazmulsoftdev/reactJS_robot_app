import React from 'react';
import '../../assets/Css/style.css';


const Scroll = (props) => {
    
    return (
        <div className="scrollSection">
            {props.children}
        </div>
    );

}



export default Scroll;