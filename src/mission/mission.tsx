import React, { useEffect, useState } from "react";
import FullpageWrapper from "../general-components/fullpage";
import MissionIntroduction from "./mission-introduction";
import MissionLanding from "./mission-landing";
import { useColorMode } from "@chakra-ui/react";
import MissionFutureProof from "./mission-future-proof";
import MissionUseCases from "./mission-use-cases";
import MissionScalable from "./mission-scalable";
import MissionPoweredBy from "./mission-powered-by";
import MissionPeople from "./mission-people";

const InputComponents = () => (
    <>
        <MissionLanding/>
        <MissionIntroduction/>
        <MissionScalable/>
        <MissionUseCases/>
        <MissionFutureProof/>
        <MissionPoweredBy/>
        <MissionPeople/>
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
    <FullpageWrapper InputComponents={InputComponents} anchors={['', 'introduction', 'scalable', 'practicability', 'future-proof', 'powered-by', 'people']}/>
)};
  
export default Mission;