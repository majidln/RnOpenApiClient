import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Alert,
  StyleSheet,
  Button,
} from 'react-native';

import {petApi} from './api';

const App = () => {
  const [pet, setPet] = useState({});

  const getThePet = async (id: number) => {
    try {
      const fetchedPet = await petApi.getPetById(id);
      setPet(fetchedPet.data);
    } catch (error) {
      console.warn(error);
      Alert.alert('An error occurred');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Button title="Get First Pet" onPress={() => getThePet(1)} />
          <Text style={styles.pet}>{JSON.stringify(pet)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    margin: 20,
    borderWidth: 4,
    borderColor: '#000',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '900',
  },
  pet: {
    fontSize: 18,
    padding: 30,
    marginTop: 40,
  },
});

export default App;
