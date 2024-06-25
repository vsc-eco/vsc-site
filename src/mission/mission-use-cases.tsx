import React from "react";
import { Box, Image } from '@chakra-ui/react'
import SplitDisplay from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";

const linkedDoc = 'https://docs.vsc.eco/docs/scalability/tbd'
const previewImageUrl = 'https://images.pexels.com/photos/5644179/pexels-photo-5644179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const highResImageUrl = 'https://images.pexels.com/photos/5644179/pexels-photo-5644179.jpeg'

const section: SimpleSection = {
    header: 'New use cases',
    textSections: [
        "VSC will power the next generation of NFTs, games, cross chain transfers, DEXs and use cases not previously thought of.",
        "Smart contracts will be able to utilize a range of APIs from basic read/write APIs for modifying state to interacting with advanced on chain operations."],
}

const MissionUseCases = () => (
    <div className='custom-section'>
        <SplitDisplay highResImageUrl={highResImageUrl} previewImageUrl={previewImageUrl} section={section} linkedDoc={linkedDoc}></SplitDisplay>
    </div>
);
  
export default MissionUseCases;