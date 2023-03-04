import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from '../../constants';

export default function Home() {
  return (
    <View style={styles.container}>
        <Text>Home</Text>
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