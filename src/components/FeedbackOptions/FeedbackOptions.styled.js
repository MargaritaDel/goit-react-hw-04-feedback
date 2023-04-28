import styled from '@emotion/styled';

export const ContainerButtons = styled.div`
  margin: 20px auto;
  max-width: 800px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
padding: 15px 15px;
border: none;
border-radius: 10px;
outline: none;
cursor: pointer;
font-weight: 500;
&:hover,
&:focus {
  background-color: yellow;
  color: blue;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
  rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
}
`;