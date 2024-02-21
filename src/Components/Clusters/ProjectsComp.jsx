import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Img,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import {
  SiChakraui,
  SiFirebase,
  SiCss3,
  SiTypescript,
  SiRedux,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import {
  ProjectDeatailsFlexMain,
  ProjectDetailsFlexHeading,
  ProjectDetailsHeading1,
  ProjectDetailsHeading2,
  ProjectDetailsIconButton,
  ProjectDetailsIconButtonTop,
  ProjectDetailsTextStackFlex,
  ProjectDetailsTextSummary,
  ProjectDetailsToolTip,
  ProjectDetailsViewButtons,
  ProjectHeadFlex,
  ProjectImgStyle,
} from "../../Themes/Dark/ProjectPageStyles";
import { MyThemeContext } from "../../Contexts/themeContext";
import {
  LProjectDetailsHeading1,
  LProjectDetailsHeading2,
  LProjectDetailsIconButton,
  LProjectDetailsIconButtonTop,
  LProjectDetailsTextSummary,
  LProjectDetailsToolTip,
  LProjectDetailsViewButtons,
  LProjectHeadFlex,
} from "../../Themes/Light/ProjectPageStyles";

const ProjectsCard = ({
  live,
  github,
  img1,
  img2,
  heading1,
  heading2,
  summary,
  TStack,
}) => {
  const { theme } = useContext(MyThemeContext);

  return (
    
    <Flex
      className="project-title"
      {...(theme ? ProjectHeadFlex : LProjectHeadFlex)}
    >
      <Flex className="project-title" direction={"column"}>
        <Image src={theme ? img1 : img2} {...ProjectImgStyle} />
        <Flex
          className="project-description"
          {...(theme ? ProjectDetailsViewButtons : LProjectDetailsViewButtons)}
        >
          <a
            className="project-deployed-link"
            href={live}
            target={"_blank"}
            rel="noreferrer"
          >
            <Button
              {...(theme
                ? ProjectDetailsIconButtonTop
                : LProjectDetailsIconButtonTop)}
              color={"green"}
            >
              View Page
            </Button>
          </a>
          <a
            className="project-github-link"
            href={github}
            target={"_blank"}
            rel="noreferrer"
          >
            <Button
              {...(theme
                ? ProjectDetailsIconButtonTop
                : LProjectDetailsIconButtonTop)}
              color={"green"}
            >
              Github
            </Button>
          </a>
        </Flex>
      </Flex>

      <Flex className="project-card" {...ProjectDeatailsFlexMain}>
        <Flex className="project-tech-stack" {...ProjectDetailsFlexHeading}>
          <Heading
            {...(theme ? ProjectDetailsHeading1 : LProjectDetailsHeading1)}
          >
            {heading1}&nbsp;
          </Heading>
          <Heading
            {...(theme ? ProjectDetailsHeading2 : LProjectDetailsHeading2)}
          >
            {heading2}
          </Heading>
        </Flex>
        <Text
          {...(theme ? ProjectDetailsTextSummary : LProjectDetailsTextSummary)}
        >
          {summary}
        </Text>
        <Flex wrap={"wrap"} {...ProjectDetailsTextStackFlex}>
          {TStack[0] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"React"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#00E1FC"}
                icon={<SiReact />}
              />
            </Tooltip>
          ) : null}
          {TStack[1] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"ChakraUI"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#00B7FC"}
                icon={<SiChakraui />}
              />
            </Tooltip>
          ) : null}
          {TStack[2] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"Javascript"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#FCCA00"}
                icon={<SiJavascript />}
              />
            </Tooltip>
          ) : null}
          {TStack[3] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"HTML5"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#FC6F00"}
                icon={<SiHtml5 />}
              />
            </Tooltip>
          ) : null}
          {TStack[4] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"CSS3"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#008DFC"}
                icon={<SiCss3 />}
              />
            </Tooltip>
          ) : null}
          {TStack[5] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"TypeScript"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#0464DF"}
                icon={<SiTypescript />}
              />
            </Tooltip>
          ) : null}
          {TStack[6] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"Redux"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#5A04DF"}
                icon={<SiRedux />}
              />
            </Tooltip>
          ) : null}
          {TStack[7] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"Firebase"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#FCD600"}
                icon={<SiFirebase />}
              />
            </Tooltip>
          ) : null}
          {TStack[8] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"MongoDB"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#FCD600"}
                icon={<SiMongodb />}
              />
            </Tooltip>
          ) : null}
          {TStack[8] ? (
            <Tooltip
              className="project-tech-stack"
              {...(theme ? ProjectDetailsToolTip : LProjectDetailsToolTip)}
              label={"Express"}
            >
              <IconButton
                {...(theme
                  ? ProjectDetailsIconButton
                  : LProjectDetailsIconButton)}
                color={"#FCD600"}
                icon={<SiExpress />}
              />
            </Tooltip>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsCard;
