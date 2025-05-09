import { StatusBar } from 'expo-status-bar';
import {Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, useFonts} from '@expo-google-fonts/poppins';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Button from './button';

export default function Home() {
  useFonts({
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_700Bold,
  });
  return (
    <ImageBackground  source={require('../assets/back.jpg')} style={styles.container}>
      <Image source={require('../assets/img1.png')} style={styles.image} />
      <View style={{gap: 20}}>
        <Text style={styles.text}>Discover Your Dream Job here</Text>
        <Text style={styles.subtitle}>Explore all the existing job roles based on your interest and study major</Text>
      </View>
      <View style={styles.button}>
        <Button>Login</Button>
        <Button light={true}>Register</Button>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image:{
    width: '100%',
    height: null ,
    aspectRatio: 1/0.9,
  },
  text:{
    color: '#1F41BB',
    fontSize: 35,
    lineHeight: 40,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
  },
  subtitle:{
    fontSize: 15,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    gap: 20,
  }
});
