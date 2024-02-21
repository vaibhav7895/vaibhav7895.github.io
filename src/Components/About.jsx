import React, { useContext } from "react";
import { Button, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";

import { MdOfflineBolt, MdSportsEsports, MdGrass } from "react-icons/md";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { ScrollContext } from "../Contexts/ScrollContext";

import {
  AboutAfterHeading,
  AboutAfterHeadingMain,
  aboutButtonsTop,
  AboutHeadFlex,
  AboutHeadings,
  AboutHeadings2,
  AboutIconText,
  AboutProfilePicture,
  AboutSummaryInterest,
  AboutSummaryText,
} from "../Themes/Dark/AboutPageStyles";
import { ProfilePicBlue, ProfilePicBW } from "../Sources/Images";
import { LaboutButtonsTop, LAboutHeadings, LAboutHeadings2, LAboutIconText, LAboutProfilePicture, LAboutSummaryInterest, LAboutSummaryText } from "../Themes/Light/AboutPageStyles";
import { MyThemeContext } from "../Contexts/themeContext";
import { resumelink } from "../Sources/Links";

const About = () => {
  const { AboutRef } = useContext(ScrollContext);
  const { theme } = useContext(MyThemeContext);

  const handleClick = () => {
    fetch('Vaibhav-Porwal resume.pdf').then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'Vaibhav-Porwal resume.pdf';
        a.click();
      })
    })
    window.open(resumelink,"_blank")
  };

  return (
    <div className="about section" >
      <Flex className="about section" ref={AboutRef} {...AboutHeadFlex} id="about">
        <Flex className="about section">
          <Heading className="about section"  {...(theme ? AboutHeadings : LAboutHeadings)} >About&nbsp;</Heading>
          <Heading className="about section" {...(theme ? AboutHeadings2 : LAboutHeadings2)}>Me</Heading>
        </Flex>
        <Flex className="about section" {...AboutAfterHeading} >
          <Flex  className="about section"  {...AboutAfterHeadingMain}>
            <Flex className="about section" flex={2}>
              <Image className="home-img" {...(theme ? AboutProfilePicture : LAboutProfilePicture)} src={theme ? ProfilePicBW : ProfilePicBlue} />
            </Flex>
            <Flex className="about section" flex={5} direction={"column"} id="user-detail-intro">
              <Text {...(theme ? AboutSummaryText : LAboutSummaryText)}>
                An enthusiastic web developer, team player, and problem solver who is hardworking, with over 1000 hours of coding experience, 100+ hours of data structure and algorithm knowledge, and has developed clones of well-known websites. Has experience in creating projects with a team and is looking forward to working as an accountable and competent employee in an exciting tech company.A highly disciplined and motivated person having proficiency in a wide range of front-end and Back-end skills like Node, Javascript, ExpressJS, MongoDB, etc.
                
              </Text>

              <Button id="resume-button-2" onClick={handleClick} ml={"8"} my={"4"} bgColor={"white"} boxShadow={"2xl"} _hover={{ bgColor: "black", color: "white" }} p={"6"} fontSize={"xl"} width={"100px"}>
                Resume
              </Button>







            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default About;
