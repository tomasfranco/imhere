import { useState } from "react";
import React from "react"
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant";

export function Home(){
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName ] = useState('');


 /* const participants = [
    'Tomás Franco', 'Ingrid Flores', 'João Nunes',
    'Ana Raquel Paz', 'Sylvia Franco Carvalho',
    'Edelvira Cristina Franco Aires', 'Afonso Aires Carvalho Filho',
    'Liah Paz', 'Natalie Paz', 'Luiz Eduardo Franco',
  'Janaina Silveira', 'Thaina Pettene', 'Isabella Aires']*/

function handleParticipantAdd() {
  if(participants.includes((participantName))){
    return Alert.alert("Prestadora na Lista", "Esta prestadora já está na lista")
  } 
  setParticipants(prevState => [...prevState, participantName]);
  setParticipantName('');
}
function handleParticipantRemove(name: string) {
  Alert.alert("Atenção - Remover", `Você tem certeza que deseja remover ${name}?`, [
    {
      text: 'Sim',
      onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
    },
    {
      text: 'Não',
      style: 'cancel'
    }
  ])
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
    onChangeText={setParticipantName}
    value={participantName}
    />
    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    </View>

<FlatList showsVerticalScrollIndicator={false}
  data={participants}
  keyExtractor={item => item}
  renderItem={({ item }) => (
    <Participant
    key={item}
    name={item}
    onRemove={() => handleParticipantRemove(item)}
    />  
    )}
    ListEmptyComponent={() => (
      <Text style={styles.listEmptyText}>
        Ninguém confirmou presença no evento ainda? Adicione participantes a sua lista de presença; 
      </Text>
    )}
    />
  </View>
  )
}

