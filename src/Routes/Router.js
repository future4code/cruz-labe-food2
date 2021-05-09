import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../screens/Login/LoginPage";
import RegisterPage from "../screens/Register/RegisterPage";
import RegisterAddress from "../screens/RegisterAddress/RegisterAddress";
import HomePage from "../screens/HomePage";
import ProfilePage from "../screens/ProfilePage";
import CartPage from "../screens/CartPage";
import EditPersonalData from "../screens/EditPersonalData/EditPersonalData";
import EditAddressPage from "../screens/EditAddressPage/EditAddressPage";
import ErrorPage from "../screens/ErrorPage";
import RestaurantPage from "../screens/RestaurantPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <RegisterPage />
        </Route>
        <Route exact path="/signup/address">
          <RegisterAddress />
        </Route>
        <Route exact path="/restaurant/:restaurantId">
          <RestaurantPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/edit/profile">
          <EditPersonalData />
        </Route>
        <Route exact path="/edit/address">
          <EditAddressPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
