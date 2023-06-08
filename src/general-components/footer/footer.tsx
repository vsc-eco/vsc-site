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
  import { FaTwitter, FaYoutube, FaInstagram, FaDiscord, FaRss } from 'react-icons/fa';
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
          <VStack spacing={1}>
            <Link href={''}>The Mission</Link>
            <Link href={'https://vsc-eco.github.io/'}>Docs</Link>
          </VStack>
          <VStack spacing={1}>
            <Link href={'details#contracts'}>Contracts</Link>
            <Link href={'details#scalability'}>Scalability</Link>
          </VStack>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/vsc_eco'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'PeakD'} href={'https://peakd.com/@vsc.network'}>
              <FaRss />
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://discord.gg/CpcFgp7J'}>
              <FaDiscord />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }