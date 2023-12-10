import { Avatar, Box, Button, CloseButton, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, VStack, VisuallyHidden, chakra, useColorModeValue, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import { FaHouse, FaLightbulb, FaCode, FaInfo, FaBars } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";


const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    const navigate = useNavigate();
    const toast = useToast();

    const handleLogout = () => {
        AuthenticationService.logout();
        toast({
            title: 'You have been logged out',
            status: 'info',
            duration: 2000,
            position: 'bottom-right',
            isClosable: true
        })
        navigate('/auth/login');
    }

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{
                    base: 2,
                    sm: 4,
                }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box
                            display={{
                                base: "inline-flex",
                                md: "none",
                            }}
                        >
                            <IconButton
                                display={{
                                    base: "flex",
                                    md: "none",
                                }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{
                                    color: "inherit",
                                }}
                                variant="ghost"
                                icon={<FaBars />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Link to={'/'}>
                                    <Button variant="ghost" leftIcon={<FaHouse />} size="sm">
                                        Home
                                    </Button>
                                </Link>
                                <Link to={'/ideas'}>
                                    <Button variant="ghost" leftIcon={<FaLightbulb />} size="sm">
                                        Ideas
                                    </Button>
                                </Link>
                                <Link to={'/projects'}>
                                    <Button variant="ghost" leftIcon={<FaCode />} size="sm">
                                        Projects
                                    </Button>
                                </Link>
                                <Link to={'/about'}>
                                    <Button variant="ghost" leftIcon={<FaInfo />} size="sm">
                                        About
                                    </Button>
                                </Link>
                            </VStack>
                        </Box>
                        <chakra.a
                            href="/"
                            title="Choc Home Page"
                            display="flex"
                            alignItems="center"
                        >
                            {/* <Logo /> */}
                            <VisuallyHidden>Choc</VisuallyHidden>
                        </chakra.a>

                        <HStack
                            spacing={3}
                            display={{
                                base: "none",
                                md: "inline-flex",
                            }}
                        >
                            <Link to={'/'}>
                                <Button variant="ghost" leftIcon={<FaHouse />} size="sm">
                                    Home
                                </Button>
                            </Link>
                            <Link to={'/ideas'}>
                                <Button variant="ghost" leftIcon={<FaLightbulb />} size="sm">
                                    Ideas
                                </Button>
                            </Link>
                            <Link to={'/projects'}>
                                <Button variant="ghost" leftIcon={<FaCode />} size="sm">
                                    Projects
                                </Button>
                            </Link>
                            <Link to={'/about'}>
                                <Button variant="ghost" leftIcon={<FaInfo />} size="sm">
                                    About
                                </Button>
                            </Link>
                        </HStack>
                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <chakra.a
                            p={3}
                            color="gray.800"
                            _dark={{
                                color: "inherit",
                            }}
                            rounded="sm"
                            _hover={{
                                color: "gray.800",
                                _dark: {
                                    color: "gray.600",
                                },
                            }}
                        >
                            {/* <EmailIcon /> */}
                            <VisuallyHidden>Notifications</VisuallyHidden>
                        </chakra.a>

                        <Menu isLazy>
                            <MenuButton>
                                <Avatar
                                    size="sm"
                                    name="Dan Abrahmov"
                                    src="https://bit.ly/dan-abramov"
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title='Profile'>
                                    <MenuItem>My Account</MenuItem>
                                    <MenuItem>Payments </MenuItem>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuGroup title='Account'>
                                    <MenuItem>
                                        <Button colorScheme={'red'} width={'100%'} onClick={handleLogout}>Logout </Button>
                                    </MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
};


export default Navbar;