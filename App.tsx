/*
App.tsx donc AppV1.tsx
*/
import React from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, Alert} from 'react-native';

axios.defaults.baseURL = 'https://api.openaq.org';

const UselessTextInput = () => {
const [textPays, onChangeText] = React.useState("Saisir pays");
const [textVille, onChangeTextVille] = React.useState("Saisir villes");
const axios = require('axios').default;

  return (
    <SafeAreaView>
      <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="useless placeholder"
        value={textPays}
      />
      </View>
      <View>
      <Button
        title="Valider"
        onPress={() => axios.get('/v2/countries')
            .then(function (response) {
            const country = response.data.results.filter(
            item => item.name == textPays, // Remplacer France par la valeur de ton input
            console.log(textPays)
            );
          })}
      />
    </View>
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextVille}
        placeholder="useless placeholder"
        value={textVille}
      />
      </View>
      <View>
      <Button
        title="Valider"
        onPress={() => axios.get('/v2/cities', {
            params: {
              country: 'FR', // Remplacer par la valeur de l'état
              city: textVille, // Remplacer par la valeur de l'input
            },
          })
          .then(function (citiesResponse) {
            if (citiesResponse.data.results.length > 0) {
              const city = citiesResponse.data.results[0];
      
              axios
                .get('/v2/measurements', {
                  params: {
                    country: 'FR', // Remplacer par la valeur de l'état
                    city: city.name,
                  },
                })
                .then(measurementsResponse => {
                  // Gérer le résultat
                });
            }
          })}
      />
    </View>
    </SafeAreaView>
  );
};

export default UselessTextInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});

// axios.get("/v2/countries")
//   .then(response => {
//      // console.log(response.data.results);
//       let t = response.data.results
//      for (let i =0; i<t.length; i++) {
//        if (t[i]["name"].substring(0,2).toUpperCase() == "HO"){
//         console.log(t[i]["code"]+"-"+t[i]["name"])
//        }            
//      }     
//   })
//   .catch((error) => {
//     console.log(error);
//       // manipulate the error response here
//   });
