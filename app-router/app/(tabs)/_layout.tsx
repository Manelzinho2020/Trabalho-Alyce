import { Tabs, useRouter } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#ff0000' },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',

        // Seta de voltar para a Home
        headerLeft: () => (
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
        ),

        // --- DESTAQUE DE FUNDO NAS ABAS (ATIVO / INATIVO) ---
        tabBarActiveBackgroundColor: '#ff0000',   // Fundo Vermelho no quadrado selecionado
        tabBarInactiveBackgroundColor: '#e0e0e0', // Fundo Cinza no quadrado não selecionado
        
        tabBarActiveTintColor: '#ffffff',         // Texto/Ícone Branco sobre o fundo vermelho
        tabBarInactiveTintColor: '#666666',       // Texto/Ícone Cinza escuro sobre o fundo cinza
        
        // Estilo geral da barra de abas
        tabBarStyle: {
          backgroundColor: '#e0e0e0', // Mesma cor do fundo inativo para preencher as bordas
          height: 70,
          paddingBottom: 8,
          paddingTop: 6,
        },

        // Estilo do texto dos nomes das abas
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      {/* 1ª ABA: INÍCIO */}
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={22} color={color} />
          ),
        }} 
      />

      {/* 2ª ABA: CONTATOS */}
      <Tabs.Screen 
        name="contatos" 
        options={{ 
          title: 'Contatos',
          tabBarIcon: ({ color }) => (
            <Feather name="phone" size={22} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
  },
});