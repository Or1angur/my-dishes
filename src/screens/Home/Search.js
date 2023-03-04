import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from '../../constants';

export default function Search() {
  return (
    <View style={styles.container}>
        <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.bgColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });