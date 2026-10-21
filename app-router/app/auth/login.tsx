import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  // Hook de navegação do Expo Router
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>

      {/* Botão que executa o router.back() para desempilhar e retornar ao Tabs */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()} // Retorna para a tela que chamou (Contatos)
      >
        <Text style={styles.backButtonText}>Voltar para o Tabs</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});