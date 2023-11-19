import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text italic preset="headingLarge">
        ConnectaCWBgg
      </Text>
      <Text bold preset="headingMedium">
        ConnectaCWBgg
      </Text>
      <Text semiBold preset="headingLarge">
        ConnectaCWBgg
      </Text>
      <Text preset="headingLarge">ConnectaCWBgg</Text>
    </SafeAreaView>
  );
}

export default App;
