import { View, Text, StyleSheet } from 'react-native';

// Tela carregada por padrão na primeira aba (Aba Início)
export default function TabIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Index do Tabs (Aba Início)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});