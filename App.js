import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    
    <View style={estilo.container}>
    <View>
      <Text style={estilo.titulo} > Horti-Fruti Online</Text>
      </View>
      <ScrollView>
      <View>
      <Text></Text>
      <Text style={estilo.subtitulo}>Laranja</Text> <Text>R$3/kg</Text>
      <Image style={estilo.img} source={require('./assets/laranja.png')} />
      <Text style={estilo.subtitulo}>Manga</Text> <Text>R$6/kg</Text>
      <Image style={estilo.img} source={require('./assets/mango.png')} />
      <Text style={estilo.subtitulo}>Limão-Siciliano</Text> <Text>R$15/kg</Text>
      <Image style={estilo.img} source={require('./assets/limao.png')} />
      <Text style={estilo.subtitulo}>Maçã</Text> <Text>R$5/kg</Text>
      <Image style={estilo.img} source={require('./assets/maca.png')} />
      <Text style={estilo.subtitulo}>Melancia</Text> <Text>R$20/un</Text>
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
    fontSize: 40,
    color: '#80000',
    fontWeight: "bold",
    fontFamily: "Monospace",
  },
  img:{
    width: "100%",
    height: 250
  },
  subtitulo:{
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: 'Monospace',
  },
});
