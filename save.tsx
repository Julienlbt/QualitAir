/*
App.tsx donc AppV1.tsx
*/
import React from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>
          Ouvrez App.tsx et travaillez dans votre App !!!!!         
      </Text>
      <Text style={styles.texts}>
          test modif        
      </Text>
      
    </View>
  );
  
} /// App



axios.get("https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/countries?limit=5&page=1&offset=0&sort=asc&order_by=country")
  .then(response => {
      console.log(response.data);
      let t = response.data
     for (let i =0; i<t.length; i++) {
      console.log(t["name"])
     }
  })
  .catch((error) => {
    console.log(error);
      // manipulate the error response here
  });





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    backgroundColor: '#000',
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});