import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCart, goToHome, goToProfile } from '../../Routes/Coordinators';
import { CartButton, HomeButton, MainFooter, ProfileButton } from './Styled';

const FooterMenu = () => {
    const history = useHistory();
    return (
        <MainFooter>
            <HomeButton onClick={() => goToHome(history)}/>
            <CartButton onClick={() => goToCart(history)}/>
            <ProfileButton onClick={() => goToProfile(history)}/>
        </MainFooter>
    );
}

export default FooterMenu;