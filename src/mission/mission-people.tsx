import React from "react";
import { Box, HStack, Heading, Image, Link, VStack, Text, Divider } from '@chakra-ui/react'
import SplitDisplay from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";
import Footer from "../general-components/footer/footer";
import { DividerWithSpace } from "../general-components/dividerWithSpace";

const linkedDoc = 'https://docs.vsc.eco/docs/scalability/tbd'
const previewImageUrl = 'https://images.pexels.com/photos/276254/pexels-photo-276254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const highResImageUrl = 'https://images.pexels.com/photos/276254/pexels-photo-276254.jpeg'

const section: SimpleSection = {
    header: 'Highly scalable',
    textSections: [
        "By leveraging scalable data structures, unique consensus system and incentivization of smart contract executors, VSC is able to scale horizontally with user growth.",
        "As more dapps join the ecosystem, the more the infrastructure grows. The next big memecoin won’t destroy the network for everyone else."],
}

const MissionPeople = () => (
    <div className='custom-section p-container'>
        <div className="slide">
            <Box className="wrapup-container" gridTemplateRows={{ base: 'unset', lg: 'auto auto auto auto 10%' }}>
                <VStack padding={{ base: '1em', lg: 'unset' }}>
                    <br/>
                    <Heading fontSize={{ base: '7xl', lg: '3xl' }}>Our Team</Heading>
                    <br/>
                    <HStack spacing={"10"}>
                        <VStack>
                            <Link href="https://github.com/vaultec81"><Image width={{ base: '300px', lg: '150px' }} borderRadius={"50%"} src="https://github.com/vaultec81.png?size=460"/></Link>
                            <Text fontSize={{ base: '3xl', lg: 'lg' }}>Vaultec81</Text>
                        </VStack>
                        <VStack>
                            <Link href="https://github.com/Pl8tinium"><Image width={{ base: '300px', lg: '150px' }} borderRadius={"50%"} src="https://github.com/pl8tinium.png?size=460"/></Link>
                            <Text fontSize={{ base: '3xl', lg: 'lg' }}>Platinium</Text>
                        </VStack>
                        <VStack>
                            <Link href="https://github.com/piyushjha0409"><Image width={{ base: '300px', lg: '150px' }} borderRadius={"50%"} src="https://github.com/piyushjha0409.png?size=460"/></Link>
                            <Text fontSize={{ base: '3xl', lg: 'lg' }}>Piyushjha0409</Text>
                        </VStack>
                    </HStack>
                </VStack>
                <DividerWithSpace/>
                <VStack padding={{ base: '1em', lg: 'unset' }}>
                    <Heading fontSize={{ base: '7xl', lg: '3xl' }}>Partnerships</Heading>
                    <br/>
                    <Text fontSize={{ base: '3xl', lg: 'lg' }}>Do you think a cooperation could be beneficial? Get in contact with us!</Text>
                    <br/>
                    <br/>
                    <Link href="https://discord.gg/yvGXZsQTU6"><Image width={{ base: '250px', lg: '100px' }} src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"/></Link>
                </VStack>
                <DividerWithSpace/>
                <Footer/>
            </Box>
        </div>
    </div>
);
  
export default MissionPeople;