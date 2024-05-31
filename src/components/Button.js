import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const Button = ({text,textstyle,buttonstyle,icon,onPress,disabled=false}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
      style={[{
        width: '90%',
        borderWidth: 1,
        backgroundColor:color.thene_green,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        flexDirection:"row"
        ,margin:"5%"
      },buttonstyle]}>
              {icon?icon:null}
      <Text style={[{fontSize: 22,color:"white",marginLeft:6},textstyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
