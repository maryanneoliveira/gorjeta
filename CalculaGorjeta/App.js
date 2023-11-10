import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Logo from './src/Componentes/Logo';

export default function App() {
  return (

  <View style={styles.container}>

    <Logo></Logo>

     <Text style={styles.texto}> Digite os dados:</Text>

     <TextInput
     style={styles.textInput}
      placeholder='Valor da conta em Reais (ex: 50,5)'
      placeholderTextColor={'#000'}
      color={'#000'}
      keyboardType="numeric"
      
     />
       
<TextInput
     style={styles.textInput}
      placeholder='O valor numérico da porcentagem? (ex: 10)'
      placeholderTextColor={'#000'}
      color={'#000'}
      keyboardType="numeric"
      
      />

      <View style={styles.botoes}>

        <TouchableOpacity style={styles.calcular}>
          <Text> Calcular Gorjeta  </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.recalcular}>
          <Text> Calcular Novamente  </Text>
        </TouchableOpacity>

      </View>

     
  

    </View>

  );
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'#a3e295',
  alignItems:'center',
justifyContent:'center'
},
texto:{
  fontSize:20,
  color:"#000",
  fontWeight:'bold',
  marginBottom:20

},
textInput:{
width:380,
height:50,
backgroundColor:'#fff',
borderRadius:10,
paddingLeft:10,
margin:15
},

botoes:{
  flexDirection:'row',
  alignItems:'center'

}

})
