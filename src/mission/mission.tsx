import React, { useEffect, useState } from "react";
import FullpageWrapper from "../general-components/fullpage";
import MissionIntroduction from "./mission-introduction";
import MissionLanding from "./mission-landing";
import { useColorMode } from "@chakra-ui/react";
import MissionFutureProof from "./mission-future-proof";
import MissionUseCases from "./mission-use-cases";
import MissionScalable from "./mission-scalable";

const InputComponents = () => (
    <>
        <MissionLanding/>
        <MissionIntroduction/>
        <MissionScalable/>
        <MissionUseCases/>
        <MissionFutureProof/>
    </>
);

const Mission = () => { 
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
    if (colorMode == 'light') {
            toggleColorMode()
        }
    })

    return(
    <FullpageWrapper InputComponents={InputComponents} anchors={['', 'introduction', 'scalable', 'practicability', 'future-proof']}/>
)};
  
export default Mission;