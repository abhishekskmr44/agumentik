import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";



export default function About() {
  const [jobType,setJobType]=useState([])
  useEffect(()=>{
    FetchJobType()
  },[])
  async function FetchJobType(){
    try{
      let {data}=await axios.get("https://shy-puce-shrimp-yoke.cyclic.app/job")
      setJobType(data)

    }catch(e){
      console.log(e.message)
    }

  }
  return (
    <Flex alignItems={"center"} justifyContent={"center"} h={"auto"}>
      <Box mt="5%" p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Find Your Subjects</Heading>
          <Text color={"fontColor"} fontSize={"xl"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {jobType?.map((feature) => (
              <HStack key={feature._id} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={"fontColor"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
        <Box mt="10%" position={"relative"}>
          <Flex
            flex={1}
            zIndex={0}
            display={{ base: "none", lg: "flex" }}
            backgroundImage="url('/templates/stats-grid-with-image.png')"
            backgroundSize={"cover"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            position={"absolute"}
            width={"50%"}
            insetY={0}
            right={0}
          >
            <Flex
              bgImage={
                "https://media.istockphoto.com/id/1338737959/photo/little-kids-schoolchildren-pupils-students-running-hurrying-to-the-school-building-for.jpg?s=1024x1024&w=is&k=20&c=h6FSgmubB2NYOzf83gBBH9t-f6sIrMuHXTDqvIEsFK8="
              }
              objectFit={"cover"}
              bgSize={"cover"}
              w={"full"}
            
              h={"full"}
            />
          </Flex>
          <Container maxW={"7xl"} zIndex={10} position={"relative"}>
            <Stack direction={{ base: "column", lg: "row" }}>
              <Stack
                flex={1}
                color={"gray.400"}
                justify={{ lg: "center" }}
                py={{ base: 4, md: 20, xl: 60 }}
              >
                <Box mb={{ base: 8, md: 20 }}>
                  <Text
                    fontFamily={"heading"}
                    fontWeight={700}
                    textTransform={"uppercase"}
                    mb={3}
                    fontSize={"xl"}
                    color={"gray.500"}
                  >
                    University
                  </Text>
                  <Heading
                    color={"white"}
                    mb={5}
                    fontSize={{ base: "3xl", md: "5xl" }}
                  >
                  Machine Learning
                  </Heading>
                  <Text fontSize={"xl"} color={"gray.400"}>
                  Coursera's "Machine Learning" by Andrew Ng is a highly rated and widely recognized course for learning the fundamentals of machine learning.
                  </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  {stats.map((stat) => (
                    <Box key={stat.title}>
                      <Text
                        fontFamily={"heading"}
                        fontSize={"3xl"}
                        color={"white"}
                        mb={3}
                      >
                        {stat.title}
                      </Text>
                      <Text fontSize={"xl"} color={"gray.400"}>
                        {stat.content}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
              <Flex flex={1} />
            </Stack>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
}

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "10+",
    content: (
      <>
        <StatsText>Data Science</StatsText> Data Science: IBM's "Applied Data Science" is a comprehensive course that covers various aspects of data science, including data analysis, visualization, and machine learning.


      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>CSS</StatsText> Python Programming: Codecademy's "Learn Python" is a great starting point for beginners who want to learn Python programming.
      </>
    ),
  },
  {
    title: "13%",
    content: (
      <>
        <StatsText>JAVASCRIPT</StatsText> Udacity's "Full Stack Web Developer" is a comprehensive course that covers the basics of web development, including HTML, CSS, JavaScript, and more.
      </>
    ),
  },
  {
    title: "250M+",
    content: (
      <>
        <StatsText>HTML</StatsText> Data Science: IBM's "Applied Data Science" is a comprehensive course that covers various aspects of data science, including data analysis, visualization, and machine learning.
      </>
    ),
  },
];
