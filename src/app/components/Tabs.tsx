"use client"; // This is a client component 👈🏽

import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  Text,
  Image,
  useDisclosure,
  useToken,
} from "@chakra-ui/react";

const Tabs: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarHeight = "5vh";

  const [red100] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.red.100`
    ['red.500'],
    // a single fallback or fallback array matching the length of the previous arg
  )

  return (
    <>
      <Flex w="100vw" h={navbarHeight} direction="column" borderBottom={`1px solid ${red100}`} boxShadow={`0px 0px 35px ${red100}`} mb={10}>
        {/* mobile */}
        <Flex
          display={["flex", "flex", "none", "none", "none"]}
          justify="center"
          bgColor="gray.200"
        >
          <Image src={`/logo.png`} h="64px" />
        </Flex>
        <Flex display={["flex", "none", "none", "none", "none"]}>
          <Button colorScheme="white" onClick={onOpen}>
            <Image fontSize="2xl" color="blue.300" />
          </Button>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader w="100%" zIndex={100} bg="white" p={0} my={2}>
                <Flex
                  alignItems="center"
                  h="100%"
                  mt={1}
                  justifyContent={"center"}
                >
                  <Link
                    href="/"
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                  >
                    <Image src="/buna.png" h={navbarHeight} />
                  </Link>

                  <DrawerCloseButton
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                    color="blue.600"
                    mt={0}
                  />
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <Stack
                  direction={"column"}
                  align="center"
                  spacing="24px"
                  marginTop={4}
                >
                  <Link
                    color="red.400"
                    href="/teorie"
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                  >
                    <Text fontWeight="semibold">Teorie</Text>
                  </Link>

                  <Link
                    color="red.400"
                    href="/pricing"
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                  >
                    <Text fontWeight="semibold">Teste</Text>
                  </Link>

                  <Link
                    color="red.400"
                    href="/contact"
                    _focus={{ outline: "none", boxShadow: "none !important" }}
                  >
                    <Text fontWeight="semibold">Contact</Text>
                  </Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
        {/* desktop */}
        <Flex
          display={["none", "none", "flex", "flex", "flex"]}
          direction={'row'}
          justify="center"
        >
          <Stack
            direction={"row"}
            align="center"
            spacing="24px"
          >
            <Link href='/'>
              <Image src={`/logo.png`} h="64px"  />
            </Link>
            <Link
              color="white"
              href="/image-comm"
              _focus={{ outline: "none", boxShadow: "none !important" }}
            >
              <Text fontWeight="semibold">Image Steganography</Text>
            </Link>

            <Link
              color="white"
              href="/audio-comm"
              _focus={{ outline: "none", boxShadow: "none !important" }}
            >
              <Text fontWeight="semibold">Audio Steganography</Text>
            </Link>

            <Link
              color="white"
              href="/"
              _focus={{ outline: "none", boxShadow: "none !important" }}
            >
              <Text fontWeight="semibold">Video Steganography</Text>
            </Link>

            <Link
              color="white"
              href="/"
              _focus={{ outline: "none", boxShadow: "none !important" }}
            >
              <Text fontWeight="semibold">Text Steganography</Text>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default Tabs;