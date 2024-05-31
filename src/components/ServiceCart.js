import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const ServiceCart = ({Image, text,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        flexDirection: 'column',
        width: '45%',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginTop: '3%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius:10,
        backgroundColor:"white"
      }}>
      {Image ? Image : null}
      <Text style={{fontSize: 25, color: color.thene_green}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ServiceCart;

const styles = StyleSheet.create({});
