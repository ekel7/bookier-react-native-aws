import {
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import bookData from '@/assets/data/books.json';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import StarRating from '@/components/StarRating';
import { useFavorites } from '@/app/context/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function BooksScreen() {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    rating: number;
    image: string;
  }

  interface Category {
    id: string;
    name: string;
    books: Book[];
  }

  const renderBooks = () => {
    return bookData.categories.map((category: Category) => (
      <View key={category.id} className="mb-8">
        <ThemedText type="subtitle" className="text-xl font-bold mb-3 px-4">
          {category.name}
        </ThemedText>

        <FlatList
          data={category.books}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          renderItem={({ item }) => (
            <Link href={`/book/${item.id}`} asChild>
              <TouchableOpacity>
                <View className="w-40">
                  <View>
                    <Image
                      source={{ uri: item.image }}
                      className="w-full h-56 rounded-lg"
                      style={{ resizeMode: 'cover' }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        isFavorite(item.id)
                          ? removeFavorite(item.id)
                          : addFavorite(item.id);
                      }}
                      className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full"
                    >
                      <Ionicons
                        name={isFavorite(item.id) ? 'heart' : 'heart-outline'}
                        size={20}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                  <ThemedText className="mt-2 font-semibold" numberOfLines={1}>
                    {item.title}
                  </ThemedText>
                  <ThemedText
                    className="text-sm text-gray-600 dark:text-gray-400"
                    numberOfLines={1}
                  >
                    {item.author}
                  </ThemedText>
                  <StarRating rating={item.rating}></StarRating>
                </View>
              </TouchableOpacity>
            </Link>
          )}
        ></FlatList>
      </View>
    ));
  };

  return (
    <ScrollView className="flex-1 bg-gray-100 dark:bg-gray-900">
      <ThemedView className="py-4">
        <ThemedText type="title" className="text-center mb-6">
          Catálogo de libros
        </ThemedText>
        {renderBooks()}
      </ThemedView>
    </ScrollView>
  );
}
