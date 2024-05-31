import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../../assets/images'
import Button from '../../../components/Button'

const PassScreen = ({navigation}) => {
  return (
    <View
        style={{
            
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginTop:"40%",
          height: "60%",
          width: '90%',
          alignSelf:"center",
          borderRadius: 10,
          backgroundColor: 'white',
          alignItems:"center",
          justifyContent:"center"
        }}>
            <Text style={{fontWeight:"bold",fontSize:35,textAlign:"center"}}>Congrts You Passed The Quiz</Text>
            <Image source={images.clear}/>
            <Button  onPress={()=> navigation.navigate("Jobs")} text={"Continnue"}/>
            </View>
  )
}

export default PassScreen

const styles = StyleSheet.create({})