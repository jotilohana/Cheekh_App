import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { View, Text, Image, StyleSheet } from 'react-native';

const OnBoardingScreen = (navigation) => {
    return (

        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.logo} source={require('../Images/image1.jpg')} />,
                    title: <Text style={styles.lighttext}>How it Works</Text>,
                    subtitle:<Text></Text>,
                },
                {
                    backgroundColor: '#fff',
                   image: <Image style={styles.logo}  source={require('../Images/image2.jpg')} />,
                    title: <Text style={styles.lighttext}>PRESS POWER{'\n'} 3/4 TIMES</Text>,
                    subtitle: <Text style={styles.subtext}></Text>'Guardian will receive SMS alerts with GEO location',
                },
                {
                    backgroundColor: '#fff',
                   image: <Image style={styles.logo}  source={require('../Images/image3.jpg')} />,
                   title: <View><Text style={styles.lighttext}>When</Text><Text style={styles.redtext}>{"\n"}Triggered</Text><Text style={styles.lighttext}>{"\n"}Your Phone</Text></View>,
                   subtitle: <Text style={styles.subtext}>SMS with LOCATION \n Automatic place CALL</Text> ,
                }, 
             ]}
                        />

    );
}

const styles = StyleSheet.create({
    
    logo: {
      width: 200,
      height: 200,
    },
    lighttext:{
        color:'#828080',
        fontWeight:'bold',
        fontSize:20
    },
    redtext:{
        color:'red',
        fontWeight:'bold',
        fontSize:40
    },
    subtext:{
        color:'#828080',
        fontSize:10
    }
  });

export default OnBoardingScreen;