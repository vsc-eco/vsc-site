import React from "react";
import { Box, Image } from '@chakra-ui/react'
import SplitDisplay from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";

const linkedDoc = 'https://discord.gg/yvGXZsQTU6'
const previewImageUrl = 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const highResImageUrl = 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg'


const section: SimpleSection = {
    header: 'VSC tools Hackathon',
    textSections: [
        "The VSC ecosystem flourishes with the help of its community. In this hackathon we are looking for developers to help us build the tools that will help the ecosystem grow.",
        "Concretly we are looking for tools that will help developers build dapps on the VSC ecosystem. These tools can be anything from a simple IDE, a library or a full blown framework. The only requirement is that it helps developers build dapps on the VSC ecosystem.",
        "The most successful projects will be awarded from a prize pool of 1000 HBD."],
}

const Hackathon2 = () => (
    <div className='custom-section'>
        <SplitDisplay highResImageUrl={highResImageUrl} previewImageUrl={previewImageUrl} section={section} imageOnTheLeft={true} linkedDoc={linkedDoc}></SplitDisplay>
    </div>
);

export default Hackathon2;