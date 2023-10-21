import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { postLocationData } from './api';
import { selectOrigin, selectDestination } from '../slices/navSlice'; // Replace with the actual path to your Redux slice file

const RideOptionsCard = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const handlePostData = async () => {
    // Check if origin and destination are not empty
    if (!origin || !destination || !origin.location || !destination.location) {
      console.error('Origin or destination is empty.');
      return;
    }
  
    // Combine data from origin and destination reducers
    const postData = {
      origin: {
        latitude: origin.location.lat,
        longitude: origin.location.lng,
      },
      destination: {
        latitude: destination.location.lat,
        longitude: destination.location.lng,
      },
    };
  
    // Print the postData before sending the POST request
    console.log('postData:', postData);

    // Send the POST request using the api.js file
    try {
      const response = await postLocationData(postData);
      console.log('POST request successful:', response);
    } catch (error) {
      console.error('POST request failed:', error);
    }
  };
  
  return (
    <View>
      {/* Your component UI */}
      <Button title="Post Data" onPress={handlePostData} />
    </View>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
