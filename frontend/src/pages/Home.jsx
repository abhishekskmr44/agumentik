import { Box } from "@chakra-ui/react";
import React from "react";
import LandingPage from "../components/LandingPage";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { particlesOptions } from "../config/TsConfig";
export default function Home() {
  const particlesInit = (engine) => {
    loadFull(engine);
  };
  return (
    <>
      <Particles init={particlesInit} options={particlesOptions} />

      <LandingPage />
      <Box h="5vh"></Box>
    </>
  );
}
