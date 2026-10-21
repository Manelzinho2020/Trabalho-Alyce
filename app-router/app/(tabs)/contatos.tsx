import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function TabContatos() {
  // Hook de navegação do Expo Router
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos do Tabs</Text>

      {/* Botão que navega do grupo Tabs para uma rota Stack externa (app/auth/login.tsx) */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/auth/login')}
      >
        <Text style={styles.buttonText}>Ir para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});