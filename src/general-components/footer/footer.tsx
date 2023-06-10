import {
    Box,
    chakra,
    Container,
    HStack,
    Icon,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    VStack,
  } from '@chakra-ui/react';
  import { FaTwitter, FaYoutube, FaInstagram, FaDiscord, FaRss, FaGithub } from 'react-icons/fa';
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
        width={"100vw"}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', lg: 'row' }}
          spacing={4}
          justify={{ base: 'center', lg: 'space-between' }}
          align={{ base: 'center', lg: 'center' }}
          fontSize={{ base: '40px', lg: 'lg' }}>
          <HStack>
            <Logo/>
            <Text>VSC © 2023</Text>
          </HStack>
          <VStack spacing={1}>
            <Link href={'/'}>The Mission</Link>
            <Link href={'https://vsc-eco.github.io/'}>Docs</Link>
          </VStack>
          <VStack spacing={1}>
            <Link href={'details#contracts'}>Contracts</Link>
            <Link href={'details#scalability'}>Scalability</Link>
          </VStack>
          <Stack width={'100%'} justifyContent={'space-around'} direction={'row'} spacing={6} paddingTop={{ base: '1em', lg: 'unset' }}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/vsc_eco'}>
              <Icon w={120} h={120} boxSize={{ base: 120, lg: 5 }} as={FaTwitter} />
            </SocialButton>
            <SocialButton label={'PeakD'} href={'https://peakd.com/@vsc.network'}>
              <Icon boxSize={{ base: 120, lg: 5 }} as={FaRss}/>
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://discord.gg/yvGXZsQTU6'}>
              <Icon boxSize={{ base: 120, lg: 5 }} as={FaDiscord}/>
            </SocialButton>
            <SocialButton label={'Github'} href={'https://github.com/vsc-eco'}>
              <Icon boxSize={{ base: 120, lg: 5 }} as={FaGithub}/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }