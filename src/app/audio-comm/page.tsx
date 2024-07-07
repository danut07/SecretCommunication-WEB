import React, { FC } from 'react';
import AudioInputTab from '../components/AudioInputTab';
import Tabs from '../components/Tabs';
import { Flex } from '@chakra-ui/react';

const AudioPage: FC = () => {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Tabs />
      <AudioInputTab />
    </Flex>
  );
};

export default AudioPage;