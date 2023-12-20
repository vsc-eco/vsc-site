import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import React from "react";
import NavItem from "../../models/NavItem";
import './navbar.css';

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "The mission",
        href: "/",
    },
    {
        label: "Contracts",
        href: "/details#contracts",
    },
    {
        label: "Scalability",
        href: "/details#scalability",
    },
    {
        label: "Links",
        href: "https://linktr.ee/vsc.network",
    },
    {
        label: "Block Explorer",
        href: "https://vsc.techcoderx.com",
    },
    {
        label: "Hackathons",
        href: "/hackathons",
    },
];

export default function WithSubnavigation(props: { fixed: boolean }) {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box className="navbar-wrapper" style={{ position: (props.fixed ? "fixed": "unset")}} width={'100vw'}>
            <Flex
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={"center"}
                justifyContent={"space-between"}
                width={{ base: '115%', lg: 'unset' }}
            >
                <Flex
                    ml={{ base: -2 }}
                    display={{ base: "flex", lg: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon boxSize={{ base: 120 }} /> : <HamburgerIcon boxSize={{ base: 120 }} />
                        }
                        variant={"ghost"}
                        bg='transparent'
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
        
                <Image width={{ base: '12em', lg: '50px' }} src="/VSC-Logo.png" alt="logo" />

                <Flex  alignItems='center'>                    
                    <Flex display={{ base: "none", lg: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    direction={"row"}
                    spacing={6}
                >
                    <Button
                        as={"a"}
                        display={{ base: "none", lg: "inline-flex" }}
                        fontSize={"sm"}
                        fontWeight={600}
                        href={"https://vsc-eco.github.io/"}
                    >
                        Docs
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const getDesktopNavItem = (navItem: any) => {

    return (
    <Box key={navItem.label}>
        <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
                <Link
                    p={2}
                    href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    textDecoration={"underline"}
                    textUnderlineOffset={"4px"}
                >
                    {navItem.label}
                </Link>
            </PopoverTrigger>
        </Popover>
    </Box>)
}

const DesktopNav = () => {
    return (
        <Stack direction={"row"} spacing={4}>
            {getDesktopNavItem(NAV_ITEMS.slice(0, 1)[0])}
            <Stack direction={"row"} style={{ /*outlineWidth: "1px", outlineStyle: "solid", outlineColor: "inherit", outlineOffset: "7px"*/ }}>
                {NAV_ITEMS.slice(1).map(getDesktopNavItem)}
            </Stack>
        </Stack>
    );
};

const getMobileNavItems = () => {
    return [NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
    )), <MobileNavItem key={"Docs"} {...{label: "Docs", href: "https://vsc-eco.github.io/"}} />]
}

const MobileNav = () => {
    return (
        <Box borderRadius={'20px'} width={'100%'} bg={'blackAlpha.500'}>
        <Stack
            p={4}
            display={{ lg: "none" }}
        >
            {getMobileNavItems()}
        </Stack>
        </Box>
    );
};

const MobileNavItem = ({ label, href }: NavItem) => {
    const { isOpen } = useDisclosure();

    return (
        <Stack spacing={4}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}                
            >
                <Box borderRadius={'20px'} width={'100%'} bg={'blackAlpha.800'}>
                    <Text
                        fontWeight={600}
                        fontSize={{ base: '5xl', lg: 'lg' }}>
                        {label}
                    </Text>
                </Box>
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    align={"start"}
                ></Stack>
            </Collapse>
        </Stack>
    );
};
