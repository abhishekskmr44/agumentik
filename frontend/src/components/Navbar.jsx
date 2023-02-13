import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";

const Links = ["Home", "Sections", "Students", "Contact Us"];
// NavLink component returns a link to the '/about' path with a Text component displaying the children prop
const NavLink = ({ children }) => (
  <Link to={"/about"}>
    <Text
      px={2}
      py={1}
      fontSize={18}
      fontWeight={400}
      transition={"500ms"}
      _hover={{
        color: "blueColorCode",
      }}
    >
      {children}
    </Text>
  </Link>
);
// navigation bar style
const style = {
  backgroundColor: "#ffffff11",

  backdropFilter: "blur(20px)",
  webkitBackdropFilter: "blur(50px)",
  boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.2)",
};

export default function Navbar() {
  // flag state to track if the navigation bar should have the styles defined in the `style` object
  const [flag, setFlag] = useState(false);
  // isOpen1 and isOpen2 states to track if the AdminLogin and navigation menu modals are open
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // onOpen1 and onClose1 hooks for the AdminLogin modal
  const { onOpen: onOpen1, onClose: onClose1 } = useDisclosure({
    isOpen: isOpen1,
    onClose: () => setIsOpen1(false),
    onOpen: () => setIsOpen1(true),
  });

  // onOpen2 and onClose2 hooks for the navigation menu modal
  const { onOpen: onOpen2, onClose: onClose2 } = useDisclosure({
    isOpen: isOpen2,
    onClose: () => setIsOpen2(false),
    onOpen: () => setIsOpen2(true),
  });

  // event listener for the window's scroll event to set the flag state
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y > 150) {
      setFlag(true);
    }
    if (y < 50) {
      setFlag(false);
    }
  });


  return (
    <Box
      zIndex={100}
      style={flag ? style : { bg: "#111" }}
      transition={"1000ms"}
      pos={"sticky"}
      top={"0"}
    >
      <AdminLogin isOpen={isOpen1} onOpen={onOpen1} onClose={onClose1} />
      <Box
        w={["95%", "100%", "80%"]}
        h={["10vh", "10vh", "15vh"]}
        m="auto"
        px={4}
      >
        <Flex h={"100%"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            colorScheme={"transparent"}
            icon={isOpen2 ? <CloseIcon /> : <HamburgerIcon fontSize={"lg"} />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen2 ? onClose2 : onOpen2}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="/">
              <Flex alignItems={"center"}>
                {" "}
                <Heading fontSize={25}>MR</Heading>{" "}
                <Text fontSize={25}>Education-University-Website-Design</Text>{" "}
              </Flex>
            </Link>
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              color={"fontColor"}
              bgColor={"blueColorCode"}
              _hover={{
                bg: "blueColorCode",
              }}
              size={["sm", "md", "lg"]}
              borderRadius={"50px"}
              shadow={"md"}
              onClick={onOpen1}
            >
              Admin Login
            </Button>
          </Flex>
        </Flex>

        {isOpen2 ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
