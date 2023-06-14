import React from "react";
import { Box, Image } from '@chakra-ui/react'
import SplitDisplay from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";

const linkedDoc = 'https://vsc-eco.github.io/docs/scalability/tbd'
const previewImageUrl = 'https://images.pexels.com/photos/11025236/pexels-photo-11025236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const highResImageUrl = 'https://images.pexels.com/photos/11025236/pexels-photo-11025236.jpeg'

const section: SimpleSection = {
    header: 'Future proof',
    textSections: [
        "From being a layer 2 solution, VSC can rapidly adapt to new technology as it becomes available.",
        "With the addition of pluggable consensus modules, consensus can be easily upgraded across all nodes without the need for a large upgrade. Pending approval via voting of course."],
}

const MissionFutureProof = () => (
    <div className='custom-section'>
        <SplitDisplay highResImageUrl={highResImageUrl} previewImageUrl={previewImageUrl} section={section} linkedDoc={linkedDoc} imageOnTheLeft={true}></SplitDisplay>
    </div>
);
  
export default MissionFutureProof;