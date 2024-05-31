import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox = ({text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
      }}>
      <BouncyCheckbox fillColor={"black"} onPress={()=>{}}/>
      <Text style={{fontSize: 15}}>{text}</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
