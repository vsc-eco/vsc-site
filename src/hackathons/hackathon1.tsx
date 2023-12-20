import React from "react";
import { Box, Image } from '@chakra-ui/react'
import SplitDisplay from "../general-components/split-display/split-display";
import { SimpleSection } from "../models/SimpleSection";

const linkedDoc = 'https://discord.gg/yvGXZsQTU6'
const previewImageUrl = 'https://images.pexels.com/photos/1732279/pexels-photo-1732279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const highResImageUrl = 'https://images.pexels.com/photos/1732279/pexels-photo-1732279.jpeg'


const section: SimpleSection = {
    header: 'Smart Contracts Hackathon',
    textSections: [
        "Dive with us into unknown territory and help us build the fundamentals of the first truly decentralized smart contract system on the HIVE blockchain.",
        "We are seeking individuals passionate about blockchain technology, smart contracts, and decentralization. Whether you prefer to join as part of a team or navigate as a lone wolf, we'll equip you with the essential tools and support needed for your successful journey.",
        "The hackathon will span three months, with the top projects being awarded from a prize pool of 1000 HBD."],
}

const Hackathon1 = () => (
    <div className='custom-section'>
        <SplitDisplay highResImageUrl={highResImageUrl} previewImageUrl={previewImageUrl} section={section} linkedDoc={linkedDoc}></SplitDisplay>
    </div>
);

export default Hackathon1;