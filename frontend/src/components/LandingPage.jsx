import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import bgImage from "../assets/edu.jpg";

export default function LandingPage() {
  return (
    <Box textAlign={"center"}>
      <Box w={["100%", "90%", "60%"]} m="auto" mt="2rem">
        <Heading fontSize={["2xl", "4xl", "6xl"]}>
          Getting Where You Want to Study
        </Heading>
        <Text mt="10px" fontSize={"20px"} color={"#000"}>
          Everything you need to know for your study abroad journey: from first search to your first day on campus.
        </Text>
      </Box>

      <Box
        h={"100vh"}
        w={["auto", "80%"]}
        bgRepeat={"no-repeat"}
        objectFit={"cover"}
        m={"auto"}
        mt={["-85%", "-35%", "-15%"]}
        textAlign={"center"}
        bgSize={"contain"}
        bgPos={"center"}
        bgImage={`url(${bgImage})`}
      />
    </Box>
  );
}
