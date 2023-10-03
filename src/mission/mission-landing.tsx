import React from "react";
import Navbar from "../general-components/navbar/navbar";
import './mission.css'
import { AspectRatio, Heading } from "@chakra-ui/react";

const MissionLanding = () => (
    <div className='custom-section landing-container'>
        <Navbar fixed={true}/>
        <div className="slide">
            <Heading fontSize={{ base: '9xl', lg: '8xl' }}>
                VSC Network
            </Heading>
            <br/>
            <Heading padding={{ base: '1em', lg: 'unset' }} fontSize={{ base: '4xl', lg: 'xl' }}>
                Next generation smart contract L2 on the HIVE blockchain.
            </Heading>
            <br/>
            <center>
                <AspectRatio height={{ base: '500px', lg: '315px' }} width={{ base: '888px', lg: '560px' }} ratio={1}>
                    <iframe  src="https://3speak.tv/embed?v=vsc.network/qldflfmt" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </AspectRatio>
            </center>
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
);
  
export default MissionLanding;