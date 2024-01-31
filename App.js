
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable, // Permite que todos los elementos que encierre le puedan dar clic
  Modal,

} from 'react-native';


import Formulario from './src/components/Formulario';


const App = () => {
  
  // Los hooks se usan en la parte superios
  const [modalVisible, setModalVisible] = useState(false)
  console.log(modalVisible)
  const autenticado = true
  const nuevaCitaHandler = () => {
    console.log('Ejecutanfo desde Modal Formulario ')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>

      {/*       <Button title='Nueva Cita'
      onPress={()=>{
        console.log('clic en el boton')
      }}
      ></Button> */}
      <Pressable
        //onPress={nuevaCitaHandler}
        //onPress={() => { setModalVisible(true) }}
        onPress={() => { setModalVisible(!modalVisible) }}
        style={styles.btnNuevaCita}
      >
        <Text
          style={styles.btnTextoNuevaCita}
        >Nueva Cita</Text>
      </Pressable>

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        /* nuevaCitaHandler={nuevaCitaHandler} */
      />

    </SafeAreaView>

  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'

  }

})



export default App;
