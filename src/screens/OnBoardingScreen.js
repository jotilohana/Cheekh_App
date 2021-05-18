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
                    title: 'How it Works',
                    subtitle: '',
                },
                {
                    backgroundColor: '#fff',
                   image: <Image style={styles.logo}  source={require('../Images/image2.jpg')} />,
                    title: <Text style={styles.title}>PRESS POWER{'\n'} 3/4 TIMES</Text>,
                    subtitle: 'Guardian will receive SMS alerts with GEO location',
                },
                {
                    backgroundColor: '#fff',
                   image: <Image style={styles.logo}  source={require('../Images/image3.jpg')} />,
                    title: 'WHEN \n TRIGGERED\n Your PHONE',
                   subtitle: 'SMS with LOCATION \n Automatic place CALL',
                }, 
             ]}
                        />

    );
}

const styles=StyleSheet.create({
    logo:{
        width:150,
        height:150
    },
    title:{
        fontSize:20
    }
})





export default OnBoardingScreen;