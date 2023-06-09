import React, { useEffect } from "react";
import Navbar from "../general-components/navbar/navbar";
import { Heading, Stack, StackDivider, VStack, useColorMode, Image, HStack, Grid, GridItem, Divider } from "@chakra-ui/react";
import DetailsSection from "./details-section";
import { simpleSections } from "./details-sections";
import { CopyBlock, a11yLight, railscast } from "react-code-blocks";
import { ViewIcon } from "@chakra-ui/icons";
import Footer from "../general-components/footer/footer";
import { DividerWithSpace } from "../general-components/dividerWithSpace";

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
                width={{ base: '100vw', lg: '60vw' }}
                className="details-container"
                align='baseline'>
                    <Heading as='h1' size={{ base: '4xl', lg: '3xl' }} padding={{ base: '0 0 0 25px', lg: 'unset' }}id="contracts">Contracts</Heading>
                    <br/>
                    <br/>
                    <DetailsSection widthDesktop={60} section={simpleSections.smartContractsOffchainJsCode} presentedItems={{
                        0: <Image width={'50%'} src="js.png"/>,
                        2: <CopyBlock
                            width={'50%'}
                            text={basicContract}
                            language={'jsx'}
                            showLineNumbers={false}
                            wrapLines
                            theme={	railscast }/>
                    }}/>
                    <DividerWithSpace/>

                    <DetailsSection widthDesktop={60} imageOnTheLeft={false} section={simpleSections.smartContractControlledMultisigs} presentedItems={{
                        0: <Image width={'100%'} src="drawings/multisig.svg"/>
                    }}/>
                    <DividerWithSpace/>

                                        
                    <Heading as='h1' size='3xl' padding={{ base: '0 0 0 25px', lg: 'unset' }} id="scalability">Scalability</Heading>
                    <br/>
                    <br/>
                    <DetailsSection widthDesktop={0} section={simpleSections.groupOfValidators} presentedItems={{
                        1: <Image width={'100%'} src="drawings/executors.svg"/>
                    }}/>
                    <DividerWithSpace/>

                    <DetailsSection widthDesktop={100} section={simpleSections.ipfsStateAndTransactions}/>
                    <Image width={'100%'} src="ipfs.png"/>
                    <DividerWithSpace/>

                    <DetailsSection widthDesktop={50} section={simpleSections.highlyScalableDataStructures} presentedItems={{
                        0: <Image width={'100%'} src="drawings/scalability.svg"/>,
                        1: <Image width={'80%'} src="drawings/dag.svg"/>,
                        3: <Image width={'100%'} src="drawings/merkle.svg"/>
                    }}/>
                    <DividerWithSpace/>

                    <DetailsSection widthDesktop={70} section={simpleSections.witnessesKeepTrackMultisig} presentedItems={{
                        0: <ViewIcon boxSize={"15em"}></ViewIcon>
                    }}/>
                    <DividerWithSpace/>

                    <DetailsSection widthDesktop={60} section={simpleSections.feelessSmartContractOperation} presentedItems={{
                        0: <Image width={'100%'} src="drawings/cost.svg"/>
                    }}/>
            </VStack>
            <Footer fixed={false}/>
        </VStack>
    );
}  
export default Details;