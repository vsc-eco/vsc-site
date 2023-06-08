import { Box, Heading, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react'
import './split-display.css'
import { SimpleSection } from '../../models/SimpleSection';
import { headerConvert } from '../../utils';

export const HalfpageDisplay = (props: {section: SimpleSection, linkedDoc?: string}) => { 

    const subSections = [];
    // iterate over section.textSections and add them to subSections, but insert a <br/> between each in one line
    for (let i = 0; i < props.section.textSections.length; i++) {
        subSections.push(<Text key={i} textAlign="left" fontSize='lg'>{props.section.textSections[i]}</Text>)
    }

    return(
    <Box className='split-text'>
        <Heading>{props.section.header}</Heading>
        {subSections}
        {props.linkedDoc !== undefined &&
            <Link
                style={{ textDecoration: 'none' }}
                className={"link-button"}
                href={props.linkedDoc}
                bg="black"
                borderRadius="md"
                px={4}
                py={2}
                border={"2px solid #fff;"}
            >
                Learn more!
          </Link>
        }
    </Box>
)};
  
const SplitDisplay = (props: { previewImageUrl: string, highResImageUrl: string, section: SimpleSection, linkedDoc?: string, imageOnTheLeft?: boolean }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = props.highResImageUrl;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, [props.highResImageUrl]);

        return(    
        <Box className='container'>
            { props.imageOnTheLeft == undefined || props.imageOnTheLeft == true ? 
                <>
                    <img className='split-img' loading="lazy" alt="" src={imageLoaded ? props.highResImageUrl : props.previewImageUrl}/>
                    <HalfpageDisplay section={props.section} linkedDoc={props.linkedDoc}></HalfpageDisplay>
                </>
                : 
                <>
                    <HalfpageDisplay section={props.section} linkedDoc={props.linkedDoc}></HalfpageDisplay>
                    <img className='split-img' loading="lazy" alt="" src={imageLoaded ? props.highResImageUrl : props.previewImageUrl}/>
                </>
            }
        </Box>
    )}
    export default SplitDisplay

