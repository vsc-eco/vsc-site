import React from "react";
import { Box, Image } from '@chakra-ui/react'
import SplitDisplay from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";

const linkedDoc = 'https://vsc-eco.github.io/docs/scalability/tbd'
const previewImageUrl = 'https://images.pexels.com/photos/276254/pexels-photo-276254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const highResImageUrl = 'https://images.pexels.com/photos/276254/pexels-photo-276254.jpeg'

const section: SimpleSection = {
    header: 'Highly scalable',
    textSections: [
        "By leveraging scalable data structures, unique consensus system and incentivization of smart contract executors, VSC is able to scale horizontally with user growth.",
        "As more dapps join the ecosystem, the more the infrastructure grows. The next big memecoin won’t destroy the network for everyone else."],
}

const MissionScalable = () => (
    <div className='custom-section'>
        <SplitDisplay highResImageUrl={highResImageUrl} previewImageUrl={previewImageUrl} section={section} linkedDoc={linkedDoc} imageOnTheLeft={true}></SplitDisplay>
    </div>
);
  
export default MissionScalable;