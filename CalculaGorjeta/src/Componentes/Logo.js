import { Image,Text, View,StyleSheet } from "react-native";

export default function Logo(){
    return(
    <View style={styles.container}>
        <Image style={styles.logo}
        source={require('../../assets/logo.png')}/>
    </View>

    )
}

const styles = StyleSheet.create({
 
    logo:{
        width:200,
       height:180,
       marginBottom:20
       
    },
    
})