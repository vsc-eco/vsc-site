import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Heading, Stack, StackDivider, VStack, useColorMode, Image, HStack, Grid, GridItem, Divider } from "@chakra-ui/react";
import DetailsSection from "./details-section";
import { simpleSections } from "./details-sections";
import { CopyBlock, a11yLight, railscast } from "react-code-blocks";
import { ViewIcon } from "@chakra-ui/icons";


const basicContract: string = `
actions.init = async () => {
    await state.update('test', {
        message: "HELLO WORLD!"
    })
}

//Basic set value action.
actions.set = async ({key, value}) => {
    const data = (await state.pull('test-repo')) || {}
    data[key] = value;
    await state.update('test-repo', data)
}
`


const Details = () => { 
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
    if (colorMode == 'light') {
            toggleColorMode()
        }
    })

    useEffect(() => {
        let url = window.location.href.split("#");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start"});
      }, []);

    return(
        <VStack>
            <Navbar fixed={false}/>
            <VStack 
                alignSelf={"center"}
                width={"60vw"}
                className="details-container"
                spacing={10}
                align='stretch'>
                    <Heading as='h1' size='3xl' id="contracts">Contracts</Heading>

                    <Grid templateColumns='60% auto' templateRows='100%' gap={10}>
                        <DetailsSection section={simpleSections.smartContractsOffchainJsCode}/>
                        <VStack gap={12}>
                            <Image height={'25%'} src="js.png"/>
                            <CopyBlock
                                text={basicContract}
                                language={'jsx'}
                                showLineNumbers={false}
                                wrapLines
                                theme={	railscast}
                            />
                        </VStack>
                    </Grid>
                    <Divider borderColor='gray.200' />

                    <Grid templateColumns='auto 60%' templateRows='100%' gap={10}>
                        <Image src="drawings/multisig.svg"/>
                        <DetailsSection section={simpleSections.smartContractControlledMultisigs}/>
                    </Grid>
                    <Divider borderColor='gray.200' />
                    <br/>
                    <br/>
                    
                    <Heading as='h1' size='3xl' id="scalability">Scalability</Heading>

                    <Grid templateColumns='auto 40%' templateRows={'30% auto'} columnGap={10}>
                        <GridItem rowStart={2}>
                            <Image src="drawings/executors.svg"/>
                        </GridItem>
                        <GridItem rowSpan={3}>
                            <DetailsSection section={simpleSections.groupOfValidators}/>
                        </GridItem>
                    </Grid>
                    <Divider borderColor='gray.200' />

                    <DetailsSection section={simpleSections.ipfsStateAndTransactions}/>
                    <Image src="ipfs.png"/>
                    <Divider borderColor='gray.200' />

                    <Grid templateColumns='auto 50%' templateRows={'20% 20% 20% auto'} columnGap={10} rowGap={5}>
                        <GridItem rowStart={1}>
                            <Image src="drawings/scalability.svg"/>
                        </GridItem>
                        <GridItem rowStart={2}>
                            <Image src="drawings/dag.svg"/>
                        </GridItem>
                        <GridItem rowStart={4}>
                            <Image src="drawings/merkle.svg"/>
                        </GridItem>
                        <GridItem rowSpan={4}>
                            <DetailsSection section={simpleSections.highlyScalableDataStructures}/>
                        </GridItem>
                    </Grid>
                    <Divider borderColor='gray.200' />

                    <Grid templateColumns='70% auto' templateRows={'30% auto'} columnGap={10}>
                        <DetailsSection section={simpleSections.witnessesKeepTrackMultisig}/>
                        <ViewIcon boxSize={"15em"}></ViewIcon>
                    </Grid>
                    <Divider borderColor='gray.200' />

                    <Grid templateColumns='auto 60%' templateRows={'30% auto'} columnGap={10}>
                        <Image src="drawings/cost.svg"/>
                        <DetailsSection section={simpleSections.feelessSmartContractOperation}/>
                    </Grid>
                    <br/>
            </VStack>
        </VStack>
    );
}  
export default Details;