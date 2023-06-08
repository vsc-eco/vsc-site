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
            {/* <Box display={"grid"} gridTemplateColumns={"50% 50%"}> */}
                <VStack justify={"center"} align={"center"} height={"100vh"}>
                    <Heading size='3xl'>{section.header}</Heading>
                    <br/>
                    <br/>
                    <Text>{section.textSections}</Text>
                    <br/>
                    <br/>
                    <br/>
                    <HStack spacing={"10"} justifyContent={"space-evenly"}>
                        <a href="https://ipfs.tech" target="_blank">
                            <Image height={"300px"} src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"></Image>
                        </a>
                        <a href="https://hive.io" target="_blank">
                            <Image height={"300px"} src="https://cryptologos.cc/logos/hive-blockchain-hive-logo.png"></Image>
                        </a>
                    </HStack>
                </VStack>
            {/* </Box> */}

        </div>
    </div>
);
  
export default MissionPoweredBy;