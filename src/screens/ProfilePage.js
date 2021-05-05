import React from "react";
import FooterMenu from "../components/FooterMenu/FooterMenu";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import { useHistory } from "react-router-dom";
import {
  ProfileContainer,
  PersonalData,
  AddressData,
  Address,
  Line,
  History,
  Order,
  ProfileText,
} from "../GlobalStyle";
import { useRequestData } from "../hooks/useRequestData";
import { ReactComponent as Edit } from "../assets/edit.svg";
import {goToEditAddress, goToEditProfile} from '../Routes/Coordinators'

const ProfilePage = () => {
  const [profile, setProfile] = useRequestData("profile", {});

  const history = useHistory();
  return (
    <>
      <MenuHeader currentPageLabel={"Meu Perfil"} isGoBack={true} />
      <ProfileContainer>
        <PersonalData>
          <ProfileText>
            <p>{profile.user && profile.user.name}</p>
            <p>{profile.user && profile.user.email}</p>
            <p>{profile.user && profile.user.cpf}</p>
          </ProfileText>
          <Edit onClick={() => goToEditProfile(history)}/>
        </PersonalData>

        <AddressData>
          <ProfileText>
            <Address>Endereço Cadastrado</Address>
            <p>{profile.user && profile.user.address}</p>
          </ProfileText>
          <Edit onClick={() => goToEditAddress(history)}/>
        </AddressData>

        <History>
          <p>Histórico de pedidos</p>
          <Line />
        </History>
        <Order>
          <p>Você não realizou nenhum pedido</p>
        </Order>
      </ProfileContainer>
      <FooterMenu />
    </>
  );
};

export default ProfilePage;
