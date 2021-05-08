import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCart, goToHome, goToProfile } from '../../Routes/Coordinators';
import { IconButton, IconImage, MainFooter } from './Styled';
import clock from '../../assets/clock.svg'

const CardOrderInProgress = () => {
    const history = useHistory();
    return (
        <MainFooter>   
         <img src={clock}/>
         poo
        </MainFooter>
    );
}

export default CardOrderInProgress;