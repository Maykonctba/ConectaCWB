import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">ConnectaCWBgg</Text>
        <Button title="Butaozinho" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
