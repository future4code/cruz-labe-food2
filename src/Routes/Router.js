import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import CartPage from '../screens/CartPage';
import EditPersonalData from '../screens/EditPersonalData';
import EditAddressPage from '../screens/EditAddressPage';


const Router = () => {
    return(
        <BrowserRouter>
                <Switch>
                        <Route exact path='/login'>
                                <LoginPage/>
                        </Route>
                        <Route exact path='/signup'>
                                <RegisterPage/>
                        </Route>
                        <Route exact path='/'>
                                <HomePage/>
                        </Route>
                        <Route exact path='/profile'>
                                <ProfilePage/>
                        </Route>
                        <Route exact path='/cart'>
                                <CartPage/>
                        </Route>
                        <Route exact path='/edit-profile'>
                                <EditPersonalData/>
                        </Route>
                        <Route exact path='/edit-address'>
                                <EditAddressPage/>
                        </Route>
                        <Route>
                                <div>Erro!</div>
                        </Route>

                </Switch>   
        </BrowserRouter>
    )
}

export default Router