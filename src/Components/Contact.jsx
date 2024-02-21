import { Button, Flex, Heading, IconButton, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FadeIn } from "react-slide-fade-in";
import { fadeInConfigBottom } from "../Animations/Animations";
import { githubLink, linkedInLink, locationLink, mailLink, phoneLink, twitterLink } from "../Sources/Links";
import { toolTipStyle } from "../Themes/Dark/Miscellaneous";

import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail, MdCall, MdMyLocation, MdOutlineContentCopy } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { ScrollContext } from "../Contexts/ScrollContext";
import { useContext } from "react";
import { ContactButtons, ContactFlexMain, ContactHeading1, ContactHeading2 } from "../Themes/Dark/ContactPageStyles";
import copy from "copy-to-clipboard";
import { MyThemeContext } from "../Contexts/themeContext";
import { LContactButtons, LContactHeading1, LContactHeading2 } from "../Themes/Light/ContactPageStyles";
import { LtoolTipStyle } from "../Themes/Light/Miscellaneous";
import { aboutButtonsTop, AboutContactCopy } from "../Themes/Dark/AboutPageStyles";
import { LaboutButtonsTop, LAboutContactCopy } from "../Themes/Light/AboutPageStyles";

const Contact = () => {
  const { theme } = useContext(MyThemeContext);

  const { ContactRef } = useContext(ScrollContext);

  const copyPhoneFun = () => {
    copy("9452944955");
  };
  const copyMailFun = () => {
    copy("vaibhav7895@gmail.com");
  };

  return (
    <Flex  id="contact" ref={ContactRef} {...ContactFlexMain}>
      <Flex>
        <Heading {...(theme ? ContactHeading1 : LContactHeading1)}>Get In&nbsp;</Heading>
        <Heading {...(theme ? ContactHeading2 : LContactHeading2)}>Touch</Heading>
      </Flex>

      <Flex direction={{base:"column",md:"row"}}>
        <Flex pt={2} justifyContent={"flex-start"}>
          <Button onClick={copyPhoneFun} {...(theme ? aboutButtonsTop : LaboutButtonsTop)} mr={1}>
            <MdOutlineContentCopy style={{ fontSize: "16px" }} />
            Copy
          </Button>
          <Text  id="contact-phone" {...(theme ? AboutContactCopy : LAboutContactCopy)} ml={1}>
            +91 9452944955
          </Text>
        </Flex>

        <Flex pt={2} justifyContent={"flex-start"}>
          <Button onClick={copyMailFun} {...(theme ? aboutButtonsTop : LaboutButtonsTop)} mr={1}>
            <MdOutlineContentCopy style={{ fontSize: "16px" }} />
            Copy
          </Button>
          <Text  id="contact-email" fontSize={"sm"} {...(theme ? AboutContactCopy : LAboutContactCopy)} ml={1}>
            vaibhav7895@gmail.com
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex my={"8"} mx={"2"} gap={"3"}>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={400}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"Github"}>
              <a href={githubLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? ContactButtons : LContactButtons)} icon={<VscGithub />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={500}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"Compose a Email"}>
              <a href={mailLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? ContactButtons : LContactButtons)} icon={<MdAlternateEmail />} />
              </a>
            </Tooltip>
          </FadeIn>
          <FadeIn {...fadeInConfigBottom} delayInMilliseconds={700}>
            <Tooltip {...(theme ? toolTipStyle : LtoolTipStyle)} label={"LinkedIn"}>
              <a href={linkedInLink} target={"_blank"} rel="noreferrer">
                <IconButton {...(theme ? ContactButtons : LContactButtons)} icon={<BsLinkedin />} />
              </a>
            </Tooltip>
          </FadeIn>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
