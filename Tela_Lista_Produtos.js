//Implemente a tela para listar os produtos.
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection('products').onSnapshot((snapshot) => {
      const productsData = [];
      snapshot.forEach((doc) =>
        productsData.push({ ...doc.data(), id: doc.id })
      );
      setProducts(productsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
