import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="books"
        options={{
          title: 'Libros',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'book' : 'book-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'Noticias',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'newspaper' : 'newspaper-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
