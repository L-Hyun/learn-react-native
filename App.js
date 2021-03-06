import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add an item!"
          placeholderTextColor={'#999'}
          autoCorrect={false}
        />
        <View style={styles.button}>
          <Button title={'ADD'} />
        </View>
    </View>
        <ScrollView>
          <View>
            <Text>TodoList</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default App;