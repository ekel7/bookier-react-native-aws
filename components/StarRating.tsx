import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';

type StarRatingProps = {
  rating: number;
  maxRating?: number;
  size?: number;
  color?: string;
};

export default function StarRating({
  rating,
  maxRating = 5,
  size = 16,
  color = '#FFD700',
}: StarRatingProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 2,
      }}
    >
      {[...Array(maxRating)].map((_, index) => {
        const starNumber = index + 1;
        const iconName = starNumber <= rating ? 'star' : 'star-outline';
        return (
          <Ionicons
            key={starNumber}
            name={iconName}
            size={size}
            color={color}
          />
        );
      })}
      <ThemedText>
        {rating}.0
      </ThemedText>
    </View>
  );
}
