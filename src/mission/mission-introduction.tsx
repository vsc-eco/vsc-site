import React from "react";
import { Box, Image } from '@chakra-ui/react'
import SplitDisplay from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";

const linkedDoc = 'https://pl8tinium.github.io/docs/scalability/tbd'
const previewImageUrl = 'https://images.pexels.com/photos/1525589/pexels-photo-1525589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const highResImageUrl = 'https://images.pexels.com/photos/1525589/pexels-photo-1525589.jpeg'


const section: SimpleSection = {
    header: 'Smart Contracts on HIVE, decentralized',
    textSections: [
        "VSC is the first truly decentralized full featured smart contract system on the hive blockchain.",
        "While smart contract code & state is stored on IPFS, on chain anchor records are created by validators to synchronize state across the network."],
}

const MissionIntroduction = () => (
    <div className='custom-section'>
        <SplitDisplay highResImageUrl={highResImageUrl} previewImageUrl={previewImageUrl} section={section} linkedDoc={linkedDoc}></SplitDisplay>
    </div>
);
  
export default MissionIntroduction;