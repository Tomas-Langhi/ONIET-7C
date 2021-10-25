import styled from 'styled-components';

export const NavbarStyle = styled.nav.attrs({
  className: 'navbar navbar-expand navbar-dark bg-dark', 
})`

`;


export const NavButton = styled.button.attrs({
    className: "btn rounded-pill border-2",
  })`
    margin-left: 2px;
    margin-right: 2px;
    color: white;
    border-color: #618817;
    $btn-padding-y: "10";
    &:hover {
      background-color: #618817;
      border-color: #618817;
      color: white;
    }
    &:focus {
      outline: none !important;
      box-shadow: none;
    }
  `;