import React from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground } from 'react-native';

const Home = ({navigation}) => {
  return (
    <ImageBackground
        source={require('../assets/degradado.jpg')} 
        style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.jpeg')} // Reemplaza con la ruta a tu logo
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
        <Button
          color='#ff8000'
          style={styles.button}
          title="QR"
          onPress={() => console.log('QR pressed')}
        />
        </View>
        <View style={styles.buttonWrapper}>
        <Button
          color='#ff8000'
          style={styles.button}
          title="Nuevo"
          onPress={() => navigation.navigate('Formulario')} 
        />
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius:50/2,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#ff9900',
    borderRadius: 10,
    padding: 20,
    width: '45%',
  },
  buttonWrapper: {
    marginBottom: 20, // Espacio entre botones
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
  },
});

export default Home;