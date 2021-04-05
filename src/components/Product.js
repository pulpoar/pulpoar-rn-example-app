import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

class Product extends Component {
  render() {
    const {product} = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.6}>
        <View style={[styles.color, {backgroundColor: product.color}]} />
        <View style={styles.container}>
          <Image source={{uri: product.image}} style={styles.image} />
          <View style={styles.productRight}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity style={styles.addToCart}>
              <Text style={styles.addToCartText}> ADD TO CART </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 200,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 18,
    marginVertical: 10,
  },
  productRight: {
    marginLeft: 10,
    marginRight: 10,
    width: width - 170,
  },
  price: {
    fontSize: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  addToCart: {
    marginVertical: 10,
    paddingVertical: 13,
    backgroundColor: '#993F47',
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  color: {
    width: '100%',
    height: 10,
    backgroundColor: 'red',
  },
});
