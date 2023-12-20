import React, { useEffect, useState } from "react";
import FullpageWrapper from "../general-components/fullpage";
import { useColorMode } from "@chakra-ui/react";
import HackathonsLanding from "./hackathon-landing";
import Hackathon1 from "./hackathon1";
import Hackathon2 from "./hackathon2";

const InputComponents = () => (
    <>
        <HackathonsLanding/>
        <Hackathon1/>
        <Hackathon2/>
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
    <FullpageWrapper InputComponents={InputComponents} anchors={['', 'smart-contract', 'tool-building']}/>
)};
  
export default Hackathons;