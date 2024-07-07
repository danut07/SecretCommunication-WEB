"use client"; // This is a client component 👈🏽
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "white"
      }
    }),
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <Flex direction={"column"}
            w="100vw"
            h="100vh"
          >
            {children}
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
