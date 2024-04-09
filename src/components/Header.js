import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import NuCampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return(<Navbar dark color='primary' sticky='top' expand='md'>
        
        <NavbarBrand href='/'>
            <img src={NuCampLogo} alt='nucamp logo' />
        </NavbarBrand>
        
        </Navbar> );
}

export default Header;