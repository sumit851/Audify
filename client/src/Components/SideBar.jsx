import React from "react";
import styled from "styled-components";
import {
  CloseRounded,
  FavoriteRounded,
  HomeRounded,
  LightModeRounded,
  DarkModeRounded,
  LogoutRounded,
  SearchRounded,
  CloudUploadRounded,
} from "@mui/icons-material";
import logo2 from "../Images/imag2.jpeg";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition: all 0.3s ease;
  }
`;
const Image = styled.img`
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin: 16px 0px;
`;
const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;
const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;
  text-decoration: none !important;
  color: ${({ theme }) => theme.text_secondary};

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text_primary};
  }
`;
const NavText = styled.div`
  padding: 10px 0px;
  text-decoration: none !important;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary + 50};
  margin: 10px 0px;
`;

const SideBar = ({ menuOpen, setMenuOpen, setDarkMode, darkMode }) => {
  const button = [
    {
      fun: () => console.log("Upload"),
      name: "upload",
      icon: <CloudUploadRounded />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded />,
    },
    {
      fun: () => console.log("Upload"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];
  const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourite",
      name: "favourite",
      icon: <FavoriteRounded />,
    },
  ];
  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
        <Logo>
          <Image src={logo2} alt="logo1" />
          Kadhai Kathaar
        </Logo>
        <Close onClick={() => setMenuOpen(false)}>
          <CloseRounded />
        </Close>
      </Flex>
      {menuItems.map((item, index) => (
        <Link to={item.link} style={{ textDecoration: "none" }} key={index}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}

      <HR />
      {button.map((item, index) => (
        <Elements onClick={item.fun}>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
      ))}
    </MenuContainer>
  );
};

export default SideBar;
