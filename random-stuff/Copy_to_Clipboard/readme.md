- ### Copy to Clipbaord (react) 📔

```js
const handleCopy = () => {
    navigator.clipboard.writeText(text);
};

```

- ### Copy to Clipbaord (react-native expo) 📔

[expo-clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)

- install

```bash
npx expo install expo-clipboard
``` 

- use it:

```js
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync('hello world');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View style={styles.container}>
      <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text>
    </View>
  );
}
```

---



