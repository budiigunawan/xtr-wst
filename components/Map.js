import React from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import MapStyles from './MapStyles';
import locationList from '../locationList.json';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Box,
  HStack,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { RiCloseCircleFill, RiSettings5Fill } from 'react-icons/ri';
import { AiFillQuestionCircle } from 'react-icons/ai';
import axios from 'axios';

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 1.28692,
  lng: 103.85457,
};

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedPlaceInfo, setSelectedPlaceInfo] = React.useState({});

  const handleOpen = async (name, lat, lng) => {
    try {
      // google map api error cors
      const placeInfo = await axios.get(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURI(
          name
        )}&inputtype=textquery&fields=place_id%2Cname%2Crating%2Copening_hours%2Cgeometry&locationbias=circle:2000@${lat}%2C${lng}&key=${
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        }`
      );
      setSelectedPlaceInfo(placeInfo);
    } catch (error) {
      console.error(error);
      setSelectedPlaceInfo({});
    } finally {
      onOpen();
    }
  };

  return isLoaded ? (
    <Box>
      <GoogleMap
        mapContainerClassName='map-container'
        center={center}
        zoom={15}
        options={options}
      >
        {locationList.data.map((location, key) => (
          <MarkerF
            key={key}
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: '/marker-icon.png',
            }}
            label={{
              color: 'white',
              marginLeft: '40px',
              fontWeight: 'bold',
              fontSize: '14px',
              text: location.name,
              className: 'label-container',
            }}
            onClick={() =>
              handleOpen(location.name, location.lat, location.lng)
            }
          />
        ))}
      </GoogleMap>
      <Drawer
        placement='right'
        onClose={onClose}
        isOpen={isOpen}
        variant='test'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
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
          </DrawerHeader>
          <DrawerBody p={0}>
            <Image src='/merlion.png' />
            <Box px={8} py={2} bgColor='#72CDD2'>
              <Text fontSize={18} fontWeight='semibold' color='white'>
                Merlion
              </Text>
            </Box>
            <Box
              textAlign='justify'
              px={8}
              py={2}
              color='white'
              minH='100vh'
              bgColor='#313541'
            >
              <Text mt={6}>
                The Merlion is the national personification of Singapore.
              </Text>
              <Text mt={6}>
                Its name combines "mer" meaning sea and "lion". The fish body
                reoresebts Singapore's origin as a fishing village when it was
                called Temasek, which means "sea town" in Javanese. The lion
                head represents Singapore's original name--Singapura--meaning
                "lion city" or "kota singa".
              </Text>
              <Text mt={10}>10 Bayfront Avennue, Singapore</Text>
              <Text mt={6}>http://www.marinabaysands.com/</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  ) : (
    <>Loading...</>
  );
}

export default React.memo(MapComponent);
