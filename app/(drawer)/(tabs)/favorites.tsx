import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import React from 'react';
import { useFavorites } from '@/app/context/FavoritesContext';
import bookData from '@/assets/data/books.json';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavorites();
  const allBooks = bookData.categories.flatMap((category) => category.books);
  const favoriteBooks = allBooks.filter((book) => favorites.includes(book.id));

  if (favoriteBooks.length === 0) {
    return (
      <ThemedView className='flex-1 justify-center items-center'>
        <ThemedText type='subtitle'>
          No tienes libros favoritos.
        </ThemedText>
        <ThemedText className='mt-2 text-gray-500'>
          Añade uno desde el catálogo!
        </ThemedText>
      </ThemedView>
    )
  }

  return (
    <ThemedView className='flex-1 p-4'>
      <FlatList 
        data={favoriteBooks}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <ThemedText type='title' className='mb-4'>
            Mis Favoritos
          </ThemedText>
        }
        renderItem={({item}) => (
          <View className='flex-row bg-white dark:bg-gray-800 p-3 rounded-lg mb-4 shadow-md'>
            <Image
              source={{uri: item.image }}
              className="w-20 h-28 rounded-md"
            />
            <View className='flex-1 ml-4 justify-center'>
              <ThemedText type='subtitle' className='font-bold'>
                {item.title}
              </ThemedText>
              <ThemedText className='text-gray-600 dark:text-gray-400 mt-1'>
                {item.author}
              </ThemedText>
            </View>
            <TouchableOpacity
              onPress={() => removeFavorite(item.id)}
              className='justify-center p-2'
            >
              <Ionicons name='trash-outline' size={24} color='red'/>
            </TouchableOpacity>
          </View>
        )}
      >

      </FlatList>

    </ThemedView>
  )
}