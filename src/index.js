/* eslint-disable react-native/no-inline-styles */
//
// Copyright (c) PulpoAR
// PhotoMakeUp React Native Demo Project
//

import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Product from './components/Product';
import PulpoAR from './components/PulpoAR';
import Variation from './components/Variation';
import products from '../products.json';
import WebView from 'react-native-webview';

// javascript code after webview loaded
const initializeCommand = `
initProducts('YOUR_WEBSITE_ID', 'YOUR_WHITELIST URL');
activeProduct = {"Lipstick": "CREAM LIP STAIN RUJ 13 MARVELOUS MAUVE","makeupType":["Lipstick"],"makeupMode":0} 
set_active_products(JSON.stringify(activeProduct))
changeChoosModelColorAndLabel('Change Model','#993F47');
`;

const url = 'https://devphotomakeup.pulpoar.com/'; // website url

// product array

class DemoPulpoAr extends Component {
  renderProducts = () => {
    return products.map((product, index) => {
      return (
        <Product
          key={index}
          onPress={() => {
            this.pulpoAR.injectJavaScript(
              "applyProductWithCode('" + product.code + "')",
            );
          }}
          product={product}
        />
      );
    });
  };

  render() {
    this.renderProducts();
    return (
      <View style={styles.container}>
        <View style={styles.plugin}>
          <WebView
            onMessage={() => {}}
            source={{uri: 'https://devphotomakeup.pulpoar.com/'}}
            allowsInlineMediaPlaybackjavaScriptEnabledoriginWhitelist={['*']}
            injectedJavaScript={initializeCommand}
          />
        </View>
        <Text style={styles.divider}>- MORE PRODUCTS</Text>
        <ScrollView horizontal={true} style={styles.products}>
          {this.renderProducts()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
  },
  plugin: {
    flex: 2,
  },
  variations: {
    flex: 0.1,
    flexDirection: 'row',
    marginTop: 10,
    maxHeight: 100,
  },
  products: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  divider: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default DemoPulpoAr;
