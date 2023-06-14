import { Box, Divider, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { SimpleSection } from "../models/SimpleSection";
import { headerConvert } from "../utils";

const DetailsSection = (props: { section: SimpleSection, widthDesktop: number, presentedItems?: {[key: number]: ReactElement}, imageOnTheLeft?: boolean}) => { 
    const subSections = [];
    for (let i = 0; i < props.section.textSections.length; i++) {
        if (i !== props.section.textSections.length) {
            subSections.push(<br key={i + 'br1'} />)
            if (i !== 0) subSections.push(<Divider key={i + 'div'} />)
            subSections.push(<br key={i + 'br2'} />)
        }

        let sideItem: ReactElement = <></>


        if (props.presentedItems && i in props.presentedItems) {
           sideItem = props.presentedItems[i]
        }

        subSections.push(
            <Stack align={'center'} direction={{ base: 'column', lg: (props.imageOnTheLeft ? 'row-reverse': 'row') }} spacing={10}>
                <Text margin={{ base: '0 25px 0 25px', lg: 'unset' }} fontSize={{ base: '56px', lg: 'lg' }} width={{ base: '100vw', lg: (props.widthDesktop * 2 + 100 +'%') }} textAlign="left" key={i + 'sec'}>{props.section.textSections[i]}</Text>
                <Box display={'flex'} justifyContent={'center'} width={"95%"}>
                    {sideItem}
                </Box>
            </Stack>)
    }

    return(
    <Stack alignContent={'left'}>
       <Heading padding={{ base: '0 25px 0 25px', lg: 'unset' }} size={{ base: '3xl', lg: 'xl' }} alignSelf={"baseline"} id={props.section.id ?? headerConvert(props.section.header)}>{props.section.header}</Heading>
       {subSections}
    </Stack>
)};
  
export default DetailsSection;