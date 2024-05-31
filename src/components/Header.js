import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../theme/color'

const Header = ({title, icon1 = false, icon2 = false}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 15,
      }}>
      <Text style={{color:color.thene_green, fontSize: 30}}>Hey {title},</Text>
      <View style={{flexDirection:"row",alignItems:"center",width:"20%",justifyContent:"space-between"}}>
        <View>
        {icon1 ? icon1 : null}
        </View>
      <View style={{left:5}}>
        {icon2 ? icon2 : null}
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})