import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    
    <View style={estilo.container}>
    <View>
      <Text style={estilo.titulo, {fontWeight: "bold"}, {fontSize: 30} } > Horti-Fruti Online</Text>
      </View>
      <ScrollView>
      <View>
      <Text></Text>
      <Text style={{fontWeight: "bold"}}>Laranja</Text> <Text>R$3/kg</Text>
      <Image style={estilo.img} source={require('./assets/laranja.png')} />
      <Text style={{fontWeight: "bold"}}>Manga</Text> <Text>R$6/kg</Text>
      <Image style={estilo.img} source={require('./assets/mango.png')} />
      <Text style={{fontWeight: "bold"}}>Limão-Siciliano</Text> <Text>R$15/kg</Text>
      <Image style={estilo.img} source={require('./assets/limao.png')} />
      <Text style={{fontWeight: "bold"}}>Maçã</Text> <Text>R$5/kg</Text>
      <Image style={estilo.img} source={require('./assets/maca.png')} />
      <Text style={{fontWeight: "bold"}}>Melancia</Text> <Text>R$20/un</Text>
      <Image style={estilo.img} source={require('./assets/melancia.png')} />
    </View>
    </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5DEB3',
  },
  titulo: {
    marginTop:20,
    fontSize: 50,
    color: '#80000',
  },
  img:{
    width: 250,
    height: 200
  },
});
