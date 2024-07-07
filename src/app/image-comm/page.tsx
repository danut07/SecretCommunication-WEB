import React from 'react';
import ImageInputTab from '../components/ImageInputTab';
import Tabs from '../components/Tabs';
import { Divider, Flex } from '@chakra-ui/react';

const ImagesPage: React.FC = () => {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Tabs />
      <ImageInputTab />
    </Flex>
  );
};

export default ImagesPage;