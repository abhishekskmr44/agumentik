import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApp } from "../context/ContextProvider";
export default function AdminLogin({ isOpen, onOpen, onClose }) {
  const {setAuth}=useContext(ContextApp)
  const [loading,setLoading]=useState(false)
  const toast = useToast();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [text, setText] = useState({
    name: "",
    password: "",
  });
  const nav = useNavigate();
  function handleText(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
     
    
    if (e.key === "Enter") {
      setLoading(true)
      try {
        let { data } = await axios.post("https://shy-puce-shrimp-yoke.cyclic.app/admin", text);
        if (data == "Login successfull!") {
          toast({
            title: data,

            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setLoading(false)
          setAuth(true)
          nav("/admin");
        } else {
          setLoading(false)
          toast({

            title: data,

            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
        onClose()
      } catch (e) {
        setLoading(false)
        toast({
          title: e,

          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Admin Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
              autocomplete="off"
                name="name"
                onChange={(e) => handleText(e)}
                onKeyUp={(e) => handleSubmit(e)}
                ref={initialRef}
                placeholder="admin"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                onChange={(e) => handleText(e)}
                onKeyUp={(e) => handleSubmit(e)}
                type={"password"}
                placeholder="admin"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
            isLoading={loading}
              onKeyUp={(e) => handleSubmit(e)}
              type="submit"
              colorScheme="blue"
              mr={3}
            >
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
