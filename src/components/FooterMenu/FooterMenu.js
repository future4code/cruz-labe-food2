import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCart, goToHome, goToProfile } from '../../Routes/Coordinators';
import { CartButton, HomeButton, IconImage, MainFooter, ProfileButton } from './Styled';
import {ReactComponent as Homepage} from '../../assets/homepage.svg'
import shoppingCart from '../../assets/shopping-cart.svg'
import avatar from '../../assets/avatar.svg'

const FooterMenu = () => {
    const history = useHistory();
    return (
        <MainFooter>   
            <HomeButton>
                <Homepage fill='#e8222e'/>
                {/* <IconImage src={homepage} alt='home' onClick={() => goToHome(history)}/> */}
            </HomeButton>

            <CartButton> 
                <IconImage  src={shoppingCart} alt='cart' onClick={() => goToCart(history)}/>
            </CartButton>

            <ProfileButton> 
                <IconImage src={avatar} alt='avatar' onClick={() => goToProfile(history)}/>
            </ProfileButton>
        </MainFooter>
    );
}

export default FooterMenu;