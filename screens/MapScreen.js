import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Maps from '../components/Maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from "../components/NavigateCard"
import RideOptionsCard from "../components/RideOptionsCard"

const MapScreen = () => {

    const Stack = createNativeStackNavigator();

  return (
    <View>
      <Text>Mapx</Text>

      <View style={tw`h-1/2`}>
        <Maps/>
      </View>

      <View style={tw`flex-1`}>
        <Stack.Navigator>
            <Stack.Screen
             name="NavigateCard"
             component={NavigateCard}
             options={{
                headerShown: false,
             }}
            />
            <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
      </View>

    </View>
  );
};

export default MapScreen

const styles = StyleSheet.create({})