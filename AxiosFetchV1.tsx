/*
AxiosFetchV1.tsx
https://reactnative.dev/docs/network
On passe par un script PHP pour récupérer des données d'un fichier JSON
Le script est situé ici :
https://pascalbuguet.alwaysdata.net/reactPHP/php/GetModulesFromJsonFile.php
*/

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('Message');

  useEffect(() => {
    const url = "https://pascalbuguet.alwaysdata.net/reactPHP/php/GetModulesFromJsonFile.php";
    axios.get(url)
      .then(response => {
        console.log("RESPONSE");
        // Un objet
        console.log(response);
        // Tableau ordinal d’objets JSON
        console.log(response.data);
        // Affectation à la variable nommée data
        setData(response.data);
        setLoading(false);
        setMessage("Extraction terminée");
      })
      .catch((error) => {
        // manipulate the error response here
        console.log("error")
        console.log(error)
    });
}, []);


return (
  <View style={{ flex: 1, padding: 24 }}>
    <Text style={styles.title}>Les modules</Text>
    {isLoading ? <ActivityIndicator /> : (
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (<Text style={{ height: 20, borderTopWidth: 1, borderTopColor: 'gray' }}>{item.module}</Text>)}
      />
    )}
    <Text style={styles.label}>{message}</Text>
  </View>
);
};

/*
STYLES
*/
const styles = StyleSheet.create({
container: {
  flex: 1,
  margin: 10,
  marginTop: 30,
},
title: {
  marginBottom: 20,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
},
label: {
  marginLeft: 5,
},
}); /// styles

export default App;