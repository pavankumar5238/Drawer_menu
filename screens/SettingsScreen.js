import React, {Component} from 'react';
//import {connect} from 'redux';
//simport { Table, Row, Rows } from 'react-native-table-component';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function Feed({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
        <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><Image source={require('./icons/menu.png')} style={{width:100,height:100,paddingLeft:10}}
          
          
        /></TouchableOpacity></View>
    );
  }