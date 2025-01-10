import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, ImageBackground } from 'react-native';
import {db} from "../database/firebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [noControl, setNoControl] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [grupo, setGrupo] = useState('');

  const handleSubmit = async () => {
    try {
        // Guarda los datos del formulario en Firestore
        const docRef = await addDoc(collection(db, "alumnos"), { // Cambia 'usuarios' por el nombre de tu colección
          nombre: nombre,
          noControl: noControl,
          carrera: carrera,
          semestre: semestre,
          grupo: grupo,
        });
        console.log("Document written with ID: ", docRef.id);
  
        // Limpia el formulario y muestra un mensaje de éxito
        setNombre('');
        setNoControl('');
        setCarrera('');
        setSemestre('');
        setGrupo('');
        Alert.alert('Éxito', 'Datos guardados correctamente.');
      } catch (error) {
        // Muestra un mensaje de error si algo falla
        console.error('Error al guardar datos:', error);
        Alert.alert('Error', 'No se pudieron guardar los datos.');
      }
    };
  

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
      <Text style={styles.title}>Formulario</Text>
      <View style={styles.formSquare}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={setNombre}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="No. Control"
          onChangeText={setNoControl}
          value={noControl}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Carrera"
          onChangeText={setCarrera}
          value={carrera}
        />
        <TextInput
          style={styles.input}
          placeholder="Semestre"
          onChangeText={setSemestre}
          value={semestre}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Grupo"
          onChangeText={setGrupo}
          value={grupo}
        />
        <Button title="Enviar" onPress={handleSubmit}  color='black'/>
      </View>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formSquare: {
    backgroundColor: '#ffff', // Color de fondo del cuadrado
    padding: 20,
    borderRadius: 10, // Ajusta el radio para controlar la redondez de las esquinas
    width: '100%', // Ocupa todo el ancho del contenedor padre
    // Agrega sombras si lo deseas (opcional)
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius:50/2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
  },
});