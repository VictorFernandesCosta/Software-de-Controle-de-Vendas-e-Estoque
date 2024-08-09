// Um menu simples para navegar entre as telas de adicionar produtos e listar produtos.
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Add Product"
        onPress={() => navigation.navigate('Add Product')}
      />
      <Button
        title="Product List"
        onPress={() => navigation.navigate('Product List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
