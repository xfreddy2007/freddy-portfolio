import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import Headroom from "react-headroom";

import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const Navbar = props => {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior:'smooth'});
    }

    return (
        <Headroom>
            <nav className="w-full h-75 bg-blue-800 m-0 px-5 flex justify-between items-center">
                <NavLink to="/" onClick={scrollToTop}><h1 class="text-3xl xl:ml-32 lg:ml-24 md:ml-16 sm:ml-8 min-w-150 cursor-pointer font-sans text-gray-50">Freddy Liu</h1></NavLink>
                <div className="hidden lg:flex">
                    <NavigationItems scroll={scrollToTop}/>
                </div>
            </nav>
            <div className="inline lg:hidden fixed top-3 right-8 z-40 cursor-pointer xl:mr-8 lg:mr-6 md:mr-4 sm:mr-2 select-none">
                <Hamburger 
                    toggled={props.open} 
                    toggle={props.drawerToggleClicked}
                    color="#F9FAFB"
                    size={40}
                    label="Show menu"/>
            </div>
        </Headroom>
    );
};

export default Navbar;