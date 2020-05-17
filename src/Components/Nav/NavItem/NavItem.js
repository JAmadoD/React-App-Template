import React from 'react';
import './NavItem.css';

const NavItem = (props) => {

    return(
            <div className='NavItem'>
                <h2>{props.name}</h2>
            </div>
    )
}

export default NavItem;