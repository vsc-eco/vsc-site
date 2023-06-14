import { Box, Heading, Link, Stack, Image as ChakraImage, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react'
import './split-display.css'
import { SimpleSection } from '../../models/SimpleSection';
import { headerConvert } from '../../utils';

export const HalfpageDisplay = (props: {section: SimpleSection, linkedDoc?: string}) => { 

    const subSections = [];
    for (let i = 0; i < props.section.textSections.length; i++) {
        subSections.push(<Text fontSize={{ base: '4xl', lg: 'lg' }} key={i} textAlign="left">{props.section.textSections[i]}</Text>)
        subSections.push(<br key={i + 'br'} />)
    }

    return(
    <VStack width={{ base: '100%', lg: '50%' }} height={{ base: '45%', lg: 'unset' }} justifyContent={'center'} padding={{ base: '6em 3em 3em 3em', lg: '0 10em' }}>
        <Heading fontSize={{ base: '5xl', lg: 'xl' }}>{props.section.header}</Heading>
        <br/>
        {subSections}
        {props.linkedDoc !== undefined &&
            <Link
                style={{ textDecoration: 'none' }}
                className={"link-button"}
                href={props.linkedDoc}
                bg="black"
                width={'100%'}
                borderRadius="md"
                px={4}
                py={2}
                border={"2px solid #fff;"}
                fontSize={{ base: '4xl', lg: 'lg' }}
            >
                Learn more!
          </Link>
        }
    </VStack>
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
        <Stack alignContent={'center'} alignItems={'center'}    justifyContent={'space-between'} spacing={0} height={'100vh'} className='container' direction={{ base: (props.imageOnTheLeft == true ? 'column-reverse': 'column'), lg: (props.imageOnTheLeft == true ? 'row-reverse': 'row') }}>
            <ChakraImage width={{ base: '100%', lg: '50%' }} height={{ base: '55%', lg: '100vh' }} className='split-img' loading="lazy" alt="" src={imageLoaded ? props.highResImageUrl : props.previewImageUrl}/>
            <HalfpageDisplay section={props.section} linkedDoc={props.linkedDoc}></HalfpageDisplay>
        </Stack>
    )}
    export default SplitDisplay

