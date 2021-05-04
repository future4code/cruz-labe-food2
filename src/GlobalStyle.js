import styled from 'styled-components';
const colorRedTheme = '#e02020'
export const DivLog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4.406rem 0 0rem 0;
`
export const Link = styled.a`
   text-align: center;
   width:100%;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: black;
  :hover{
    text-decoration: underline;
  }
`

export const ProfileContainer = styled.div`
  width: 100%;
  margin: 0 0 1rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #ffffff;
`
export const PersonalData = styled.div`
  p{
    width: 100%;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
  }
`
export const AddressDta = styled.div`
  width: 100%;
  height: 4.75rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #eeeeee;
  p{
    width: 100%;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
  }
`
export const Address = styled.div`
  width: 100%;
  height: 1.125rem;
  margin: 0 0 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const Line = styled.hr`
  width: calc(100% - 2rem);
  height: 0.063rem;
  margin: 0.5rem 1rem 1rem;
  border: solid 1px black;
`
export const History = styled.div`
  p{
  width: 100%;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  }
`
export const Order = styled.div`
  >p{
    width: 100%;
    height: 1.125rem;
    opacity: 0.89;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
  }
`