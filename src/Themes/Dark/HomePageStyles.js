import { White, WhiteTrans2, Black } from "../ColorPallet";

  export const homeParentFlex = {
    mt: { base: "30px", md: "80px" },
    transition: "500ms",
    direction: "column",
    alignItems: "center",
    w: "100%",
    pt:"50px",
    justifyContent: "center",
  };
  export const homeButtonsTop = {
    borderRadius: "3",
    size: "sm",
    m:{base:"1px",sm:"2",md:"3",lg:"5",xl:"6"},
    color: Black,
    bgColor: White,
    transition: "700ms",
    _hover: { bgColor: Black, color: White },
    _active: { backgroundColor: White, color: Black },
    fontSize:"20px",
  };
  

  export const heading1 = {
    // size: { base: "xl", sm: "2xl", md: "3xl", lg: "4xl" },
    transition: "500ms",
    fontSize:{ base: "34px", sm: "40px", md: "64px", lg: "86",xl:"108px" },
    color: WhiteTrans2,
  };
  export const heading2 = {
    // size: { base: "xl", sm: "2xl", md: "3xl", lg: "4xl" },
    transition: "500ms",
    fontSize:{ base: "34px", sm: "40px", md: "64px", lg: "86",xl:"108px" },
    color: White,
  };
  export const aboutFlex = {
    m: "auto",
    my:"8",
    transition: "1000",
    w: { base: "95%", sm: "90%", md: "85%",lg:"70%" },
  };
  export const aboutText = {
    as: "b",
    p: "8",
    transition: "500ms",
    color: WhiteTrans2,
    textAlign:"justify",
  };