import React, { useState } from 'react';
import Aux from '../Aux/Aux';
import Navbar from '../../components/Navbar/Navbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../containers/Footer/Footer';

const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    };

    return (
        <Aux>
            <Navbar open={sideDrawerIsVisible} drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer open={sideDrawerIsVisible} toggle={sideDrawerToggleHandler}/>
            <main>
                {props.children}
            </main>
            <Footer />
        </Aux>
    );
};

export default Layout;