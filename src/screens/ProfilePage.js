import React from 'react';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import MenuHeader from "../components/MenuHeader/MenuHeader";
import { ProfileContainer, PersonalData, AddressDta, Address, Line, History, Order } from '../GlobalStyle';
import {useRequestData} from '../hooks/useRequestData';

const ProfilePage = () => {
  const [profile, setProfile ] = useRequestData('profile',{})
  
  return (
    <>
    <MenuHeader currentPageLabel={"Meu Perfil"} isGoBack={true} />
    <ProfileContainer>
    <PersonalData>
      <p>{profile.user && profile.user.name}</p>
      <p>{profile.user && profile.user.email}</p>
      <p>{profile.user && profile.user.cpf}</p>
    </PersonalData>

     <AddressDta>
      <Address>Endereço Cadastrado</Address>
      <p>{profile.user && profile.user.address}</p>
     </AddressDta>

     <History>
     <p>Histórico de pedidos</p>
     <Line/>
     
     </History>
     <Order>
     <p>Você não realizou nenhum pedido</p>
     </Order>
    
    </ProfileContainer>
    <FooterMenu/>
    </>
  )
}

export default ProfilePage;