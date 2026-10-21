import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#ff0000' },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
      }}
    >
      {/* Tela Home: Define o botão "Sobre" explicitamente no headerRight */}
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity 
              style={styles.headerButton} 
              onPress={() => router.push('/sobre')}
            >
              <Text style={styles.headerButtonText}>Sobre</Text>
            </TouchableOpacity>
          ),
        }} 
      />

      {/* Rota para o arquivo app/sobre.tsx */}
      <Stack.Screen 
        name="sobre" 
        options={{ title: 'Sobre o App' }} 
      />

      {/* Grupo do menu de abas */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />

      {/* Tela de login */}
      <Stack.Screen 
        name="auth/login" 
        options={{ title: 'Login' }} 
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    backgroundColor: '#ffffff', // Fundo branco do botão
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 10,
  },
  headerButtonText: {
    color: '#ff0000', // Texto vermelho combinando com o tema
    fontWeight: 'bold',
    fontSize: 14,
  },
});