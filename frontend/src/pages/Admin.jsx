import React from "react";
import { Box, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import SocialLinks from "../components/SocialLinks";
import PostEducationTypes from "../components/PostEducationTypes";
export default function Admin() {
  return (
    <Box minH={"150vh"} h={"auto"}>
      <SocialLinks />
      <PostEducationTypes />
    </Box>
  );
}
