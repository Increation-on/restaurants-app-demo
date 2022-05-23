import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../common/styles';
import { useState } from 'react';

const Search = ({ setTerm }) => {

  const [input, setInput] = useState('');

  const handleEndEditing = () => {
    if (!input) {
      setTerm("")
    }
    setTerm(input);
  }

  const clearInput = () => {
    setInput("")
  }

  console.log(input)
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        placeholder='Restaraunts, food'
        style={styles.input}
        value={input}
        onChangeText={(text) => {
          setInput(text)
        }}
        onEndEditing={handleEndEditing}
      />
      <TouchableOpacity onPress={clearInput}>
        <FontAwesome name='close' size={25} style={{ marginLeft: 107 }} />
      </TouchableOpacity>
    </View>
  )
}

export default Search


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 22,
    marginTop: 5,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 40,
    width: 322
  },
  elevation,
  input: {
    marginLeft: 10
  }
})