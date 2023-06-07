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
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import React from "react";
import NavItem from "../models/NavItem";
import './navbar.css';

//pla: this example was used https://chakra-templates.dev/navigation/navbar

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "The mission",
        href: "/",
    },
    {
        label: "Scalability",
        href: "/details#scalability",
    },
    {
        label: "Contracts",
        href: "/details#contracts",
    },
    {
        label: "Links",
        href: "https://linktr.ee/vsc.network",
    },
];

export default function WithSubnavigation(props: { fixed: boolean }) {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box className="navbar-wrapper" style={{ position: (props.fixed ? "fixed": "unset")}}>
            <Flex
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={"center"}
                justifyContent={"space-between"}
            >
                <Flex
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>

                <img src="/VSC-Logo.png" className="logo" alt="logo" />

                <Flex  alignItems='center'>                    
                    <Flex display={{ base: "none", md: "flex" }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    direction={"row"}
                    spacing={6}
                >
                    <Button
                        as={"a"}
                        display={{ base: "none", md: "inline-flex" }}
                        fontSize={"sm"}
                        fontWeight={600}
                        href={"https://vsc-eco.github.io/"}  // Pla: adjust
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
    )), <MobileNavItem key={"Docs"} {...{label: "Docs", href: "https://vsc-eco.github.io/"}} />]  // Pla: adjust
}

const MobileNav = () => {
    return (
        <Stack
            p={4}
            display={{ md: "none" }}
        >
            {getMobileNavItems()}
        </Stack>
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
                <Text
                    fontWeight={600}
                >
                    {label}
                </Text>
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
