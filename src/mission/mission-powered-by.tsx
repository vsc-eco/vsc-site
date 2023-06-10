import React from "react";
import { Box, HStack, Heading, Image, Link, VStack, Text } from '@chakra-ui/react'
import SplitDisplay, { HalfpageDisplay } from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";

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
            <VStack justify={"center"} align={"center"} height={"100vh"} padding={{ base: '5em', lg: 'unset' }}>
                <Heading fontSize={{ base: '9xl', lg: '3xl' }}>{section.header}</Heading>
                {/* <br/>
                <br/> */}
                <Text fontSize={{ base: '3xl', lg: 'lg' }}>{section.textSections}</Text>
                {/* <br/>
                <br/>
                <br/> */}
                <HStack spacing={"10"} justifyContent={"space-evenly"}>
                        <a href="https://ipfs.tech" target="_blank">
                    <Image height={{ base: '400px', lg: '300px' }} src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png"></Image>
                        </a>
                        <a href="https://hive.io" target="_blank">
                    <Image height={{ base: '400px', lg: '300px' }} src="https://cryptologos.cc/logos/hive-blockchain-hive-logo.png"></Image>
                        </a>
                </HStack>
            </VStack>
        </div>
    </div>
);
  
export default MissionPoweredBy;