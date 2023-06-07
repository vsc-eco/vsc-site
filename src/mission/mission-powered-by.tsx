import React from "react";
import { Box, HStack, Heading, Image, Link, VStack, Text } from '@chakra-ui/react'
import SplitDisplay, { HalfpageDisplay } from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";
import Footer from "../general-components/footer/footer";
import { FaDiscord } from "react-icons/fa";

const linkedDoc = 'https://vsc-eco.github.io/docs/scalability/tbd'

const section: SimpleSection = {
    header: 'Powered by',
    textSections: [
        "Under the hood, VSC utilizes state of the art technology to accomplish it's goals."
    ]
}

const MissionPoweredBy = () => (
    <div className='custom-section p-container'>
        <div className="slide">
            <Box display={"grid"} gridTemplateColumns={"50% 50%"}>
                <VStack justifyContent={"space-evenly"}>
                    <Image height={"200px"} src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"></Image>
                    <Image height={"200px"} src="https://cryptologos.cc/logos/hive-blockchain-hive-logo.png"></Image>
                </VStack>
                <Box height={"100vh"}>
                    <HalfpageDisplay section={section} linkedDoc={linkedDoc}></HalfpageDisplay>
                </Box>
            </Box>

        </div>
    </div>
);
  
export default MissionPoweredBy;