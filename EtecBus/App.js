import React,{useState,useEffect,useRef} from 'react';
import { TouchableOpacity, ActivityIndicator,Platform,Linking,StyleSheet,Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react-native-webview';
import* as Location from 'expo-location';

//Configurações fixas-Locais
const SCHOOL={
  id:"school",
  name:"Etec Comendador João Rays",
  coordinate:{},
  address: "Rua Ludovico Victório, 2140, Barra Bonita - Sp"
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
