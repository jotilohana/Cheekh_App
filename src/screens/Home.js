import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Cheekh App Home 🙂</Text>
      <Button title="Click Here" onPress={()=> navigation.navigate("OnBoarding")}/> 
    </View>
  );
}

export default HomeScreen;