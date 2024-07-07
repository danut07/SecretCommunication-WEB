"use client"; // This is a client component 👈🏽

import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Stack, useEditable, useToken } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Text,
  Input,
  Image
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { handleImageChange1, handleImageChange2 } from '../image-comm/logic';

const ImageInputTab: React.FC = () => {
  const [image1, setImage1] = useState<File | null>(null);
  const [text1, setText1] = useState('');
  const [result1, setResult1] = useState<any>(null);
  const [url1, setUrl1] = useState<string>();

  const [image2, setImage2] = useState<File | null>(null);
  const [text2, setText2] = useState<any>(null);
  const [result2, setResult2] = useState<any>(null);
  const [url2, setUrl2] = useState<string>();

  const [red100] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.red.100`
    ['red.500'],
    // a single fallback or fallback array matching the length of the previous arg
  )


  const handleChange = (e: any) => {
    let input = e.target.name;
    console.log(e.target.name);
    switch (input)
    {
      case "text1":
        setText1(e.target.value);
        break;
      case "image1":
        setImage1(e.target.files[0]);
        break;
      case "image2":
        setImage2(e.target.files[0]);
        break;

    }
  };

  const handleImageClick1 = () => {
    handleImageChange1(text1, image1).then((x) => {
      console.log(x)
      setResult1(x);
    });
  };

  const handleImageClick2 = () => {
    handleImageChange2(image2).then((x) => {
      console.log(x)
      setResult2(x);
      setText2(x);
    });
  };

  const downloadImage = () => {
    if (result1) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(result1);
      link.download = 'encoded.png'; // Specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Flex width="100%" height="100%" justifyContent="center" direction="column">
      <Flex flex={0} height="10vh" fontSize={24} justify="center">
        <Text align="center" justifySelf="center">Encode and/or decode messages using LSB on images</Text>
      </Flex>
      <Flex
      width="90vw"
      height="80vh"
      alignSelf={"center"}
      justify="space-evenly"
      flex={1}
      >   
        <Flex align="center">
          <Card 
          maxW='xl' 
          minWidth="20vw" 
          height="70vh" 
          maxHeight="fit-content" 
          border="1px solid rgba(var(--card-border-rgb), 0.1)" 
          backgroundColor="rgba(var(--card-rgb), 0.15)" 
          boxShadow={`0px 0px 30px ${red100}`}
          >
            <CardBody>
              {image1 != null ? (
                <Flex justify="center">
                  <Image
                  width={240}
                  height={240}
                  src={URL.createObjectURL(image1)}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  />
                </Flex>
              ) : (
                <Flex justify="center" m={4}>
                  <Card w="8vw" h="6vh" backgroundColor="red.400" border="1px solid black" justify="center">
                    <Text color="white" align="center">No image inserted</Text>
                  </Card>
                </Flex>
              )}
              <FormLabel mt={10} color="white">Upload image</FormLabel>
              <input
                style={{color:"white"}}
                type="file"
                name='image1'
                onChange={handleChange}
                accept="image/*" 
              />     
              <Stack mt='6' spacing='3'>
                <FormControl>
                  <FormLabel color="white">Insert the secret message</FormLabel>
                  <Input backgroundColor="red.400" color="white" borderColor="black" width="100%" type='text' name="text1" value={text1} onChange={handleChange} />
                </FormControl>
              </Stack>
              
              {result1 != null &&   (
                <Flex mt={4} align="center" direction="column">
                  <FormLabel color="white">
                  Result
                  </FormLabel>  
                  <Image
                  width={240}
                  height={240}
                  src={URL.createObjectURL(result1)}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  />
                  <Button mt='2' color={`${red100}`} alignSelf="center" onClick={downloadImage}>
                    Download
                  </Button>
                </Flex>
              )}
            </CardBody>
            <Divider />
            <CardFooter>
              <Button color="white" backgroundColor="red.400" onClick={handleImageClick1}>
                Encode
              </Button>
            </CardFooter>
          </Card>
        </Flex>
        {/* DECODING */}
        <Flex align="center">
          {/* background: rgba(var(--card-rgb), 0.1);
            border: 1px solid rgba(var(--card-border-rgb), 0.15); */}
          <Card 
          maxW='xl' 
          minWidth="20vw" 
          minHeight="70vh" 
          height="fit-content" 
          border="1px solid rgba(var(--card-border-rgb), 0.1)" 
          backgroundColor="rgba(var(--card-rgb), 0.15)"
          boxShadow={`0px -0px 30px ${red100}`}
          >
            <CardBody>
              {image2 != null ? (
                <Flex justify="center">
                  <Image
                  width={240}
                  height={240}
                  src={URL.createObjectURL(image2)}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  />
                </Flex>
              ) : (
                <Flex justify="center" m={4}>
                  <Card w="8vw" h="6vh" backgroundColor="red.400" border="1px solid black" justify="center">
                    <Text color="white" align="center">No image inserted</Text>
                  </Card>
                </Flex>
              )}
              <FormLabel mt={10} color="white">Insert the embedded image</FormLabel>
              <input
                style={{color:"white"}}
                type="file"
                name='image2'
                onChange={handleChange}
                accept="image/*" 
              />     
              <Stack mt='6' spacing='3'>
                <FormControl>
                  {result2 != null &&   (
                  <Flex align="center" direction="column">
                    <FormLabel color="white">
                    The secret message:
                    </FormLabel>  
                    <Input backgroundColor="red.400" color="white" borderColor="black" width="100%" type='text' name="text2" value={text2} readOnly />
                  </Flex>
              )}
                </FormControl>
              </Stack>      
            </CardBody>
            <Divider />
            <CardFooter>
              <Button color="white" backgroundColor="red.400" onClick={handleImageClick2}>
                Decode
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageInputTab;