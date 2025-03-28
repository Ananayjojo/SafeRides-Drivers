import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from 'react-native-maps';
import { Device } from 'expo-device';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useEffect } from 'react';





const Maps = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    console.log("Origin in Redux store:", origin);
    console.log("Destination in Redux store:", destination);

    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);


  return (
    <View style={tw`flex-1`}>
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >

        {origin && destination && (
            <MapViewDirections
              origin={origin.description}
              destination={destination.description}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor='black'
            />
        )}

        {/* add the live location feature from react native maps  */}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )}

            {destination?.location && (
              <Marker
                coordinate={{
                  latitude: destination.location.lat,
                  longitude: destination.location.lng,
                }}
                title="Destination"
                description={destination.description}
                indetifier="destination"
              />
            )}

        </MapView>
    </View>
  );
};

export default Maps;
