import React, { useEffect, useState } from "react";
import FullpageWrapper from "../general-components/fullpage";
import { useColorMode } from "@chakra-ui/react";
import HackathonsLanding from "./hackathon-landing";

const InputComponents = () => (
    <>
        <HackathonsLanding/>
    </>
);

const Hackathons = () => { 
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
    if (colorMode == 'light') {
            toggleColorMode()
        }
    })

    return(
    <FullpageWrapper InputComponents={InputComponents} anchors={['']}/>
)};
  
export default Hackathons;