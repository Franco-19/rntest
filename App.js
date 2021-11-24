/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
    Text,
    View,
} from 'react-native';


const text = "this is a testing text";

const App = () => {
    return ( 
      <View>
        <Text>
          { text }
        </Text>
        <Button
          title="Click me"
        />
      </View>
    )
};

export default App;