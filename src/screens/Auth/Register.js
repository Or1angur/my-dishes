import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from '../../constants';

export default function Register() {
  return (
    <View style={styles.container}>
        <Text>Register</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });