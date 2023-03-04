import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants';

export default function ForgotPassword({route}) {
  return (
    <View style={styles.container}>
        <Text>ForgotPassword</Text>
        <Text>Params: {route.params.userID}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
      color: COLORS.black
    },
  });