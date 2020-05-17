import React from 'react';
import Aux from '../hoc/Aux';
import './Header.css'

const Header = (props) => {

    return (
        <Aux>
            <div className='title'>
                <h1>Website Header</h1>
            </div>
        </Aux>
    )

}

export default Header;