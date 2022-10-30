import React from "react"
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native"
import { styles } from "./styles"

import { Participant } from "../../components/Participant";

export function Home(){
  const participants = [
    'Tomás Franco', 'Ingrid Flores', 'João Nunes',
    'Ana Raquel Paz', 'Sylvia Franco Carvalho',
    'Edelvira Cristina Franco Aires', 'Afonso Aires Carvalho Filho',
    'Liah Paz', 'Natalie Paz', 'Luiz Eduardo Franco',
  'Janaina Silveira', 'Thaina Pettene', 'Isabella Aires']

function handleParticipantAdd() {
  console.log("Você clicou no botão de Adicionar!")
}
function handleParticipantRemove(name: string) {
  console.log(`Voce removeu o ${name}`);
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

<FlatList showsVerticalScrollIndicator={false}
  data={participants}
  keyExtractor={item => item}
  renderItem={({ item }) => (
    <Participant
    key={item}
    name={item}
    onRemove={() => handleParticipantRemove('Tomás')}
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

