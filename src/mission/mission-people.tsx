import React from "react";
import { Box, HStack, Heading, Image, Link, VStack, Text, Divider } from '@chakra-ui/react'
import SplitDisplay from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";
import Footer from "../general-components/footer/footer";
import { FaDiscord } from "react-icons/fa";

const linkedDoc = 'https://vsc-eco.github.io/docs/scalability/tbd'
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
        <div className="slide wrapup-container">
            <VStack justifyContent={""} spacing={"5"}>
                <>
                    <Heading size='3xl'>Partnerships</Heading>
                    <br/>
                    <Text>Do you think a cooperation could be beneficial? Get in contact with us!</Text>
                    <br/>
                    <Link href="https://discord.gg/CpcFgp7J"><Image width={"100px;"}  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"/></Link>
                    <br/>
                    <br/>
                    <Divider borderColor='gray.200' />
                </>
                <>
                    <Heading size='3xl'>Our Team</Heading>
                    <br/>
                    <HStack spacing={"10"}>
                        <VStack><Link href="https://github.com/vaultec81"><Image width={"150px;"} borderRadius={"50%"} src="https://github.com/vaultec81.png?size=460"/></Link><Text>Vaultec81</Text></VStack>
                        <VStack><Link href="https://github.com/Pl8tinium"><Image width={"150px;"} borderRadius={"50%"} src="https://github.com/pl8tinium.png?size=460"/></Link><Text>Platinium</Text></VStack>
                    </HStack>
                </>
            </VStack>
            <Footer fixed={true}/>
        </div>
    </div>
);
  
export default MissionPeople;