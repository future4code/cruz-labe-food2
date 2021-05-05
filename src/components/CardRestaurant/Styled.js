import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    height: 11.75rem;
    padding: 0 0 1rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin-top: 0.5rem;
`

export const Banner = styled.img`
    width: 100%;
    height: 70%;
    border-radius: 8px 8px 0 0;
`

export const ContainerInfo = styled.div`
  padding: 0.25rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;

  p {
      margin: 0.25rem 0;
  }

  > div {
      display: flex;
      justify-content: space-between;
  }
`

export const Name = styled.p`
    color: #e8222e;
`