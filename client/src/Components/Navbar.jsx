import React from "react";
import styled from "styled-components";
import { Menu, PersonRounded } from "@mui/icons-material";
const NavbarDiv = styled.div`
 display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 40px;
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  background: ${({ theme }) => theme.bgLight}
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);
@media (max-width: 768px) {
    padding: 16px;
  }

`;
const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  max-width: 70px;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 8px 10px;
  gap: 8px;
`;
const IconButton = styled.div`
  color: ${({ theme }) => theme.text_secondary} !important;
  cursor: pointer;
`;
const Navbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <NavbarDiv>
      <IconButton onClick={() => setMenuOpen(!menuOpen)}>
        <Menu />
      </IconButton>

      <ButtonDiv>
        <PersonRounded />
        Login
      </ButtonDiv>
    </NavbarDiv>
  );
};

export default Navbar;
