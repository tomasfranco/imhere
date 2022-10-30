import React from "react"
import { Text, TextInput, TouchableOpacity, View  } from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant";

export function Home(){

function handleParticipantAdd() {
  console.log("Você clicou no botão de Adicionar!")
}


return (
  <View style={styles.container}>
  <Text style={styles.eventName}>Nome do Evento</Text>
  

  <Text style={styles.eventDate}>Domingo, 11 de dezembro de 2022</Text>
  
  <View style={styles.form}>
  <TextInput 
    style={styles.input}
    placeholder="Nome do Participante"
    placeholderTextColor="#6B6B6B"
    />
    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    </View>
    <Participant />
    <Participant />
    <Participant />
    <Participant />
  </View>
)}

