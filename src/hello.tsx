import React from 'react';
import { Text, Touchable } from 'revas';

export default function App() {
  return (
    <Touchable style={styles.button} onPress={() => alert('Hi~')}>
      <Text style={styles.text}>Hello Revas</Text>
    </Touchable>
  );
}

const styles = {
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
};
