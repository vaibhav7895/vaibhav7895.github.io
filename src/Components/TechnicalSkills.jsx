import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  TechSkillsFlexTopMain,
  TechSkillsGrid,
  TechSkillsHeading1,
  TechSkillsHeading2,
  TechSkillsIconsStyle,
  TechSkillsInGridFlex,
  TechSkillsText,
} from "../Themes/Dark/TechnicalSkillsStyles";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiNetlify,
  SiVercel,
  SiGithub,
  SiVisualstudiocode,
  SiVite,
  SiNextdotjs,
  SiGit,
  SiNpm,
  SiRedux
} from "react-icons/si";
import { ScrollContext } from "../Contexts/ScrollContext";
import { useContext } from "react";
import { MyThemeContext } from "../Contexts/themeContext";
import { LTechSkillsFlexTopMain, LTechSkillsHeading1, LTechSkillsHeading2, LTechSkillsInGridFlex, LTechSkillsText } from "../Themes/Light/TechnicalSkillsStyles";


const TechnicalSkills = () => {
  const { theme } = useContext(MyThemeContext);
  const { SkillsRef } = useContext(ScrollContext);

  return (
    <Flex  id="skills" ref={SkillsRef} {...(theme ? TechSkillsFlexTopMain : LTechSkillsFlexTopMain)}>
      <Flex>
        <Heading {...(theme ? TechSkillsHeading1 : LTechSkillsHeading1)}>Technical&nbsp;</Heading>
        <Heading {...(theme ? TechSkillsHeading2 : LTechSkillsHeading2)}>Skills</Heading>
      </Flex>
      <Flex borderRadius={"8"} mt={"4"} px={"8"} py={"2"} boxShadow={"2xl"} bgColor={"white"} direction={"column"}>
        <Text className="skills-card-name"fontSize={"2xl"}>Languages</Text>
        <SimpleGrid {...TechSkillsGrid} className="skills-card">
          <Flex className="skills-card" {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiHtml5 className="skills-card-img"{...TechSkillsIconsStyle} color={"#FF7400"} />
            <Text className="skills-card-name"  {...(theme ? TechSkillsText : LTechSkillsText)}>HTML5</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiCss3 className="skills-card-img"{...TechSkillsIconsStyle} color={"#008BFF"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>CSS3</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiJavascript className="skills-card-img" {...TechSkillsIconsStyle} color={"#FFFB00"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>JavaScript</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiTypescript className="skills-card-img" {...TechSkillsIconsStyle} color={"#0070FF"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>Typescript</Text>
          </Flex>
        </SimpleGrid>
        <Text className="skills-card-name" fontSize={"2xl"}>Frameworks and Libraries</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiReact className="skills-card-img" {...TechSkillsIconsStyle} color={"#00B2FF"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>React</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiNodedotjs className="skills-card-img" {...TechSkillsIconsStyle} color={"#1F9A28"} />
            <Text className="skills-card-name"{...(theme ? TechSkillsText : LTechSkillsText)}>Node</Text>
          </Flex>
          <Flex  className="skills-card" {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiExpress className="skills-card-img" {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>Express</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiChakraui className="skills-card-img" {...TechSkillsIconsStyle} color={"#00E5DE"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>Chakra UI</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiMaterialui className="skills-card-img" {...TechSkillsIconsStyle} color={"#006CE5"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>Material UI</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiBootstrap className="skills-card-img" {...TechSkillsIconsStyle} color={"#8700FF"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>Bootstrap</Text>
          </Flex>
          
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex :LTechSkillsInGridFlex)} label={"Redux"}>
              <SiRedux className="skills-card-img"{...TechSkillsIconsStyle} color={"#5A04DF"} />
              <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>Redux</Text>
            </Flex>
        </SimpleGrid>
        <Text className="skills-card-name" fontSize={"2xl"}>Tools and Database</Text>
        <SimpleGrid {...TechSkillsGrid}>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiMongodb className="skills-card-img" {...TechSkillsIconsStyle} color={"#0DAB09"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>MongoDB</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiNetlify className="skills-card-img" {...TechSkillsIconsStyle} color={"#00C5FF"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>Netlify</Text>
          </Flex>
          
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiNpm className="skills-card-img" {...TechSkillsIconsStyle} color={"#FE0A0A"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>NPM</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiVercel className="skills-card-img" {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text className="skills-card-name"{...(theme ? TechSkillsText : LTechSkillsText)}>Vercel</Text>
          </Flex>
          <Flex className="skills-card"  {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiGithub className="skills-card-img" {...TechSkillsIconsStyle} color={"#ffffff"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>GitHub</Text>
          </Flex>
          <Flex  className="skills-card" {...(theme ? TechSkillsInGridFlex : LTechSkillsInGridFlex)}>
            <SiVisualstudiocode className="skills-card-img" {...TechSkillsIconsStyle} color={"#0093FF"} />
            <Text className="skills-card-name" {...(theme ? TechSkillsText : LTechSkillsText)}>VS Code</Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default TechnicalSkills;
