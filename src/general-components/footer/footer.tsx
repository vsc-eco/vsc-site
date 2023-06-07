import {
    Box,
    chakra,
    Container,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    VStack,
  } from '@chakra-ui/react';
  import { FaTwitter, FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa';
  import { ReactNode } from 'react';
import React from 'react';
import DetailsSection from '../../details/details-section';
import { simpleSections } from '../../details/details-sections';
import { headerConvert } from '../../utils';
  
  const Logo = (props: any) => {
    return (
        <img height={""} src="/VSC-Logo.png" className="logo" alt="logo" />
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft(props: { fixed: boolean }) {

    return (
      <Box
        style={{ position: (props.fixed ? "fixed": "unset")}}
        bottom={"0px"}
        width={"99vw"}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <HStack>
            <Logo/>
            <Text>VSC © 2023</Text>
          </HStack>
          <Stack direction={'row'} spacing={6}>
            <Link href={'http://localhost:3000/details#contracts'}>Contracts</Link>
            <Link href={'http://localhost:3000/details#scalability'}>Scalability</Link>
            {/* examples, need to be replaced with practical links */}
            <Link href={'details#' + headerConvert(simpleSections.smartContractsOffchainJsCode.header)}>JS Smart contracts</Link>
            <Link href={'details#' + headerConvert(simpleSections.groupOfValidators.header)}>Valitators</Link>
          </Stack>
          <Stack direction={'row'} spacing={6}>
            {/* <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton> */}
            {/* <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton> */}
            <SocialButton label={'Discord'} href={'https://discord.gg/CpcFgp7J'}>
              <FaDiscord />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }