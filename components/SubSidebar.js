import React from 'react';
import {
  Box,
  useColorModeValue,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Stack,
} from '@chakra-ui/react';

import Link from 'next/link';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

export default function SubSidebar({ children }) {
  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Box ml={{ base: 0, md: '350px' }}>{children}</Box>
    </Box>
  );
}

const SidebarContent = () => {
  return (
    <Box
      bg={'#282C37'}
      borderRight='1px'
      w={{ base: 'full', md: '350px' }}
      pos='fixed'
      h='full'
      px={6}
      py={10}
      style={{ boxShadow: '10px 0 12px -8px #888' }}
    >
      <Select
        icon={<MdArrowDropDown />}
        color='#7C939B'
        borderColor={'#242832'}
        borderRadius={0}
        // https://stackoverflow.com/questions/22681141/select-option-padding-not-working-in-chrome
        // indent the text 20 px
        style={{ textIndent: '20px' }}
      >
        <option>Filter by favorite</option>
      </Select>
      <Box mt={12}>
        <NavItem>Merlion</NavItem>
        <Accordion color='white' defaultIndex={[0]} allowMultiple>
          <AccordionItem py={2} borderBottom='0.5px' borderColor='#242832'>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton pl='38px'>
                    <Box fontWeight='semibold' flex='1' textAlign='left'>
                      Marina Bay Sands
                    </Box>
                    {isExpanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl='58px' pb={4}>
                  <Stack color='#7C939B' spacing={4}>
                    <Link href='#'>ArtScience Museum</Link>
                    <Link href='#'>Marina Bay Sands Skypark</Link>
                    <Link href='#'>Double Helix</Link>
                  </Stack>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={2} borderBottom='0.5px' borderColor='#242832'>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton pl='38px'>
                    <Box fontWeight='semibold' flex='1' textAlign='left'>
                      Garden by the Bay
                    </Box>
                    {isExpanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl='58px' pb={4}>
                  <Stack color='#7C939B' spacing={4}>
                    <Link href='#'>Other Option</Link>
                  </Stack>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem py={2} borderBottom='0.5px' borderColor='#242832'>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton pl='38px'>
                    <Box fontWeight='semibold' flex='1' textAlign='left'>
                      China town
                    </Box>
                    {isExpanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl='58px' pb={4}>
                  <Stack color='#7C939B' spacing={4}>
                    <Link href='#'>Other Option</Link>
                  </Stack>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
        <NavItem>Asian Civilisations Museum</NavItem>
        <NavItem>Clarke Quay</NavItem>
        <NavItem>Fort Canning Park</NavItem>
        <NavItem>Singapore Flyer</NavItem>
        <NavItem>Orchard Road</NavItem>
      </Box>
    </Box>
  );
};

const NavItem = ({ children }) => {
  return (
    <Link href='#'>
      <Box
        py={4}
        role='group'
        cursor='pointer'
        color='white'
        position='relative'
        borderTop='1px solid #242832'
        pl='38px'
        fontSize='17px'
        fontWeight='semibold'
      >
        {children}
      </Box>
    </Link>
  );
};
