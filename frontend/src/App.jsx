import { Box, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Home from "./pages/Home";

import SocialIcons from "./components/SocialIcons";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import UserDetailsFrom from "./components/UserDetailsFrom";
import Admin from "./pages/Admin";
import PrivateRoute from "../Private/PrivateRoute";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 20000);
  }, []);

  return (
    <Box bg={"#fff"} color={"black"}>
      <Navbar />
      <UserDetailsFrom onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>

      <SocialIcons />
    </Box>
  );
}

export default App;