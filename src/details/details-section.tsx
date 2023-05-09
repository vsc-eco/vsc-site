import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { SimpleSection } from "../models/SimpleSection";

const DetailsSection = (props: { section: SimpleSection}) => { 
    const subSections = [];
    for (let i = 0; i < props.section.textSections.length; i++) {
        if (i !== props.section.textSections.length) {
            subSections.push(<br key={i + 'br1'} />)
             if (i !== 0) subSections.push(<Divider key={i + 'div'} />)
            subSections.push(<br key={i + 'br2'} />)
        }

        subSections.push(<Text textAlign="left" key={i + 'sec'} fontSize='lg'>{props.section.textSections[i]}</Text>)
    }

    return(
    <VStack alignContent={'left'}>
       <Heading alignSelf={"baseline"} id={props.section.id ?? props.section.header}>{props.section.header}</Heading>
       {subSections}
    </VStack>
)};
  
export default DetailsSection;