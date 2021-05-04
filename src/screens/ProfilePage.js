import React from "react";
import FooterMenu from "../components/FooterMenu/FooterMenu";
import MenuHeader from "../components/MenuHeader/MenuHeader";
import {
  ProfileContainer,
  PersonalData,
  AddressDta,
  Address,
  Line,
  History,
  Order,
  PersonalText,
  AddressText,
} from "../GlobalStyle";
import { useRequestData } from "../hooks/useRequestData";
import { ReactComponent as Edit } from "../assets/edit.svg";

const ProfilePage = () => {
  const [profile, setProfile] = useRequestData("profile", {});

  return (
    <>
      <MenuHeader currentPageLabel={"Meu Perfil"} isGoBack={true} />
      <ProfileContainer>
        <PersonalData>
          <PersonalText>
            <p>{profile.user && profile.user.name}</p>
            <p>{profile.user && profile.user.email}</p>
            <p>{profile.user && profile.user.cpf}</p>
          </PersonalText>
        </PersonalData>

        <AddressDta>
          <AddressText>
            <Address>Endereço Cadastrado</Address>
            <p>{profile.user && profile.user.address}</p>
          </AddressText>
        </AddressDta>

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
