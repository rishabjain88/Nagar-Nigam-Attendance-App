import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function PublicLogin() {

  const navigation = useNavigation();
  return (
    
      
      <LinearGradient
        // Background Linear Gradient
      
        colors={['rgba(122, 51, 255,0.3)', 'transparent']}
        style={styles.container}
      >
        <TextInput
        placeholder="Mobile Number" 
        placeholderTextColor='#B3AFB4'
        textAlign='center'
        style={styles.txt}
       
      />
       <TextInput
        placeholder="Password" textAlign='center'
        placeholderTextColor='#B3AFB4'
       style={styles.txt}
       
      />
       <TouchableOpacity onPress={()=>{navigation.navigate("Public Home Page")}}>
      <LinearGradient
     
        // Button Linear Gradient
        colors={['#7A33FF', '#000', '#192f6a']}
        style={styles.button}>
           
        <Text style={styles.text}>Login</Text>
       
      </LinearGradient>
      
      </TouchableOpacity>
      <Image style={{width:"100%",height:170}} source={require('../../assets/city2.png')}/>
   </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical:5,
    width:200
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#B3AFB4',
    
  },
  lbl:{
    color:"#fff",
    fontSize:18,
    flexDirection:"row",
    marginBottom:10,
   

  },
  txt: {
    fontSize:18,
     color:"#fff",
        width:200,
       padding:5,
       marginBottom:20,
    
       borderWidth:1,
       borderRadius:13,
       borderColor:'#7A33FF',
     
  },
});