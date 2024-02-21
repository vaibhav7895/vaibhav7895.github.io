import { Button, Text, Flex, Show, IconButton, Wrap } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsStars } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdInfo, MdDevices, MdContactPage, MdContacts, MdDarkMode, MdWbSunny } from "react-icons/md";
import { MyThemeContext } from "../Contexts/themeContext";

import {
  NavabrButtonStyleLaptop,
  NavbarLaptopBar,
  NavbarMobileBar,
  NavbarButtonInsideBoxMobile,
  NavbarButtonStyleMobile,
  NavbarLaptopLogoStyle,
  NavbarThemeButtonConfig,
  NavbarThemeMainFlex,
} from "../Themes/Dark/NavbarStyles";
import {
  LNavabrButtonStyleLaptop,
  LNavbarLaptopBar,
  LNavbarMobileBar,
  LNavbarButtonInsideBoxMobile,
  LNavbarButtonStyleMobile,
  LNavbarLaptopLogoStyle,
  LNavbarThemeButtonConfig,
} from "../Themes/Light/NavbarStyles";
import { resumelink } from "../Sources/Links.js";
import { ScrollContext } from "../Contexts/ScrollContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(MyThemeContext);
  const { handleHomeRef, handleAboutRef, handleSkillsRef, handleProjectsRef, handleContactRef } = useContext(ScrollContext);

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
    <Wrap id="nav-menu">
      <Show above="md">
        <Flex {...(theme ? NavbarLaptopBar : LNavbarLaptopBar)}>
          <Show above="lg">
            <Flex alignItems={"center"} flex={1}>
              <Text {...(theme ? NavbarLaptopLogoStyle : LNavbarLaptopLogoStyle)}>Vaibhav Porwal</Text>
            </Flex>
          </Show>
          <Flex justifyContent={"flex-end"} flex={1}>
            <Button className="nav-link home" onClick={handleHomeRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <FaHome /> Home
            </Button>

            <Button className="nav-link about" onClick={handleAboutRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <MdInfo /> About
            </Button>

            <Button className="nav-link projects" onClick={handleProjectsRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <MdDevices /> Projects
            </Button>

            <Button className="nav-link skills" onClick={handleSkillsRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <BsStars /> Skills
            </Button>

            <Button className="nav-link contact" onClick={handleContactRef} {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
              <MdContacts /> Contact
            </Button>
              {/* <a href="./vaibhav-porwal resume.pdf"> */}
              <Button   id="resume-button-1" onClick={handleClick} className="nav-link resume" {...(theme ? NavabrButtonStyleLaptop : LNavabrButtonStyleLaptop)}>
                <MdContactPage /> Resume
              </Button>
              {/* </a> */}
          </Flex>
        </Flex>
      </Show>
      {/* Theme Preferences */}
      <Flex {...NavbarThemeMainFlex}>
        {theme ? (
          <IconButton onClick={() => setTheme(!theme)} {...(theme ? NavbarThemeButtonConfig : LNavbarThemeButtonConfig)} transition={"700ms"} icon={<MdDarkMode />} />
        ) : (
          <IconButton onClick={() => setTheme(!theme)} {...(theme ? NavbarThemeButtonConfig : LNavbarThemeButtonConfig)} transition={"700ms"} icon={<MdWbSunny />} />
        )}
      </Flex>

      {/* Mobile Navbar */}
      <Show below="md">
        <Flex {...(theme ? NavbarMobileBar : LNavbarMobileBar)}>
          <Button className="nav-link home" onClick={handleHomeRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <FaHome style={{ fontSize: "22px" }} /> Home
            </Flex>
          </Button>
          <Button className="nav-link about" onClick={handleAboutRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <MdInfo style={{ fontSize: "22px" }} />
              About Me
            </Flex>
          </Button>
          <Button className="nav-link projects" onClick={handleProjectsRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <MdDevices style={{ fontSize: "22px" }} />
              Projects
            </Flex>
          </Button>
          <Button className="nav-link skills" onClick={handleSkillsRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <BsStars style={{ fontSize: "22px" }} />
              Skills
            </Flex>
          </Button>
          <Button className="nav-link contact" onClick={handleContactRef} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
              <MdContacts style={{ fontSize: "22px" }} /> Contact
            </Flex>
          </Button>
          <Button id="resume-button-1" className="nav-link resume" onClick={handleClick} {...(theme ? NavbarButtonStyleMobile : LNavbarButtonStyleMobile)}>
            
              <Flex {...(theme ? NavbarButtonInsideBoxMobile : LNavbarButtonInsideBoxMobile)}>
                <MdContactPage style={{ fontSize: "22px" }} />
                Resume
              </Flex>
           
          </Button>
        </Flex>
      </Show>
    </Wrap>
  );
};

export default Navbar;
