import React from 'react';
import { Box, Icon, useColorModeValue, Text } from '@chakra-ui/react';
import { FiTrendingUp, FiCompass, FiStar } from 'react-icons/fi';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { GiWorld } from 'react-icons/gi';
import { AiFillInfoCircle } from 'react-icons/ai';

const LinkItems = [
  { name: 'Browse', url: '/', icon: GiWorld },
  { name: 'Suggest Attraction', url: '#', icon: FiTrendingUp },
  { name: 'Videos', url: '#', icon: FiCompass },
  { name: 'Blog', url: '#', icon: FiStar },
  { name: 'About', url: '#', icon: AiFillInfoCircle },
];

export default function Sidebar({ children }) {
  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Box ml={{ base: 0, md: '149px' }}>{children}</Box>
    </Box>
  );
}

const SidebarContent = () => {
  const router = useRouter();

  return (
    <Box
      bg={'#313541'}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: '150px' }}
      pos='fixed'
      h='full'
    >
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          url={link.url}
          isActive={router.pathname === link.url}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, url, isActive, children }) => {
  return (
    <Link href={url}>
      <Box
        minH={'124px'}
        role='group'
        cursor='pointer'
        borderBottom='1px solid #242832'
        bg={isActive && '#72cdd2'}
        color={isActive ? 'white' : '#8298A0'}
        _hover={{
          bg: '#72cdd2',
          color: 'white',
        }}
        position='relative'
      >
        <Box
          width='80px'
          height='80px'
          position='absolute'
          top='50%'
          left='50%'
          textAlign='center'
          margin='-40px 0 0 -40px'
        >
          <Icon
            fontSize='44'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
          <Text lineHeight={1}>{children}</Text>
        </Box>
      </Box>
    </Link>
  );
};
