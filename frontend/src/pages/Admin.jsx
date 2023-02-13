import React from "react";
import { Box, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import SocialLinks from "../components/SocialLinks";
import PostJobTypes from "../components/PostJobTypes";
export default function Admin() {
  return (
    <Box minH={"150vh"} h={"auto"}>
      <SocialLinks />
      <PostJobTypes />
    </Box>
  );
}
