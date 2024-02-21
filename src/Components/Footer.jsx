import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { FooterHeartIcon, FooterTextStyle, FooterTopBox } from "../Themes/Dark/FooterPageStyles";

const Footer = () => {
  return (
    <>
      <Flex {...FooterTopBox}>
        <Text {...FooterTextStyle}>Made with </Text>
        <Text {...FooterHeartIcon}>
          <BsFillHeartFill />
        </Text>
        <Text {...FooterTextStyle}>By Vaibhav Porwal</Text>
      </Flex>
    </>
  );
};

export default Footer;
