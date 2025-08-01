import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import bookData from '@/assets/data/books.json'
import StarRating from '@/components/StarRating';
import { useFavorites } from '../context/FavoritesContext';
import { Ionicons } from '@expo/vector-icons';


 interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    rating: number;
    image: string;
  }


export default function BookDetailScreen() {
  const { id } = useLocalSearchParams();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const allBooks = bookData.categories.flatMap((cat) => cat.books);
    const foundBook = allBooks.find((b) => b.id === id);
    if(foundBook) {
        setBook({ ...foundBook, rating: Number(foundBook.rating)});
    }
  }, [id])

  if(!book){
    return(
        <ThemedView style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
            <ThemedText>Libro no encontrado.</ThemedText>
        </ThemedView>
    )
  }

  const isBookFavorite = isFavorite(book.id);


  return (
    <ScrollView>
        <Stack.Screen options={{ title: book.title, headerBackTitle: 'Atrás'}}/>

        <Image source={{ uri: book.image }} className='w-full h-96'/>

        <View className='p-6'>
            <View className='flex-row justify-between items-start'>
                <View className='flex-1'>
                    <ThemedText type='title' className='mb-1'>
                        {book.title}
                    </ThemedText>
                    <ThemedText type='subtitle' className='text-lg text-gray-600 dark:text-gray-400'>
                        por {book.author}
                    </ThemedText>
                </View>
                <TouchableOpacity
                    onPress={() => isBookFavorite ? removeFavorite(book.id) : addFavorite(book.id)}
                    className='bg-gray-200 dark:bg-gray-700 p-3 rounded-full'
                >
                    <Ionicons
                        name={isBookFavorite ? 'heart' : 'heart-outline'}
                        size={28}
                        color={isBookFavorite ? 'red' : '#333'}
                    />
                </TouchableOpacity>
            </View>
            
            <View className='mt-4'>
                <StarRating rating={book.rating} size={24}/>
            </View>

            <ThemedText className='mt-6 text-base leading-relaxed'>
                {book.description}
            </ThemedText>

        </View>
    </ScrollView>
  );
}
 