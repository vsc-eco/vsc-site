import React, { useEffect, useRef } from "react";
import Navbar from "../general-components/navbar/navbar";
import './hackathons.css'
import { Heading, Stack, StackDivider, VStack, useColorMode, Image, HStack, Grid, GridItem, Divider, useBreakpointValue } from "@chakra-ui/react";
import { ReactSVG } from "react-svg";

const HackathonsLanding = () => {
    const svgSrc = useBreakpointValue({ base: "drawings/hackathons-mobile.svg", lg: "drawings/hackathons.svg" });
    const widthImage = useBreakpointValue({ base: "100", lg: "70" });
    return (
        <div className='custom-section landing-hackathon-container'>
            <Navbar fixed={true}/>
            <div className="slide">
                <center>
                    <div style={{ backgroundColor: 'black' }}>
                        <ReactSVG src={svgSrc!} beforeInjection={(svg) => {
                            svg.setAttribute('style', `width: ${widthImage}%; height: auto;`);
                        }}/>
                    </div>
                </center>
    
                <div className="arrow" onClick={() => (window as any).fullpage_api.moveSectionDown()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
  
export default HackathonsLanding;