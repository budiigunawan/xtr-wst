import React from 'react';
import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { RiCloseCircleFill, RiSettings5Fill } from 'react-icons/ri';
import { AiFillQuestionCircle } from 'react-icons/ai';

export default function Navbar({ children }) {
  return (
    <>
      <Box bg={'#F4F7FA'} p={8}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Text ml={4} fontWeight='bold' fontSize='22px'>
                TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
              </Text>
            </Box>
          </HStack>
          <HStack
            as={'nav'}
            pr={3}
            spacing={1}
            display={{ base: 'none', md: 'flex' }}
          >
            <IconButton
              size='lg'
              color='#647D80'
              bgColor='transparent'
              icon={<RiSettings5Fill size={36} />}
            />
            <IconButton
              size='lg'
              color='#647D80'
              bgColor='transparent'
              icon={<AiFillQuestionCircle size={36} />}
            />
            <IconButton
              size='lg'
              color='#647D80'
              bgColor='transparent'
              icon={<RiCloseCircleFill size={36} />}
            />
          </HStack>
        </Flex>
      </Box>

      <Box>{children}</Box>
    </>
  );
}
