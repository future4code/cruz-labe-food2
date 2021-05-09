import React from "react";
import { useHistory } from "react-router-dom";
import { goToCart, goToHome, goToProfile } from "../../Routes/Coordinators";
import { IconButton, IconImage, MainFooter } from "./Styled";
import homepage from "../../assets/homepage.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import avatar from "../../assets/avatar.svg";
import homepageRed from "../../assets/homepage-invert.svg";
import shoppingCartRed from "../../assets/shopping-cart-invert.svg";
import avatarRed from "../../assets/avatar-invert.svg";

const FooterMenu = ({ currentPage }) => {
  const history = useHistory();
  return (
    <MainFooter>
      <IconButton>
        <IconImage
          src={currentPage === "Home" ? homepageRed : homepage}
          alt="home"
          onClick={() => goToHome(history)}
        />
      </IconButton>

      <IconButton>
        <IconImage
          src={currentPage === "Cart" ? shoppingCartRed : shoppingCart}
          alt="cart"
          onClick={() => goToCart(history)}
        />
      </IconButton>

      <IconButton>
        <IconImage
          src={currentPage === "Profile" ? avatarRed : avatar}
          alt="avatar"
          onClick={() => goToProfile(history)}
        />
      </IconButton>
    </MainFooter>
  );
};

export default FooterMenu;
