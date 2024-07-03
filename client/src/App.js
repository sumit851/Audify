import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/theme";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/DashBoard";
import Search from "./Pages/Search";
import Favourite from "./Pages/Favourite";
import Profile from "./Pages/Profile";
import StreamDetail from "./Pages/StreamDetail";
import Display from "./Pages/Display";
const Container = styled.div`
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {" "}
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <SideBar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
          <Frame>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favouriates" element={<Favourite />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/stream/:id" element={<StreamDetail />} />
              <Route path="/display" element={<Display />} />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
