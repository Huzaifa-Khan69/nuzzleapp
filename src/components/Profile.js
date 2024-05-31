import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Profile = ({image, name, jobdescription, rating, price}) => {
  return (
    <View
      style={{
        width: wp('75%'),
        height: 175,
        marginTop: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        borderRadius:5,
        backgroundColor:"white"
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          marginTop:10
        }}>
        {image ? image : null}
        <View style={{flexDirection: 'column', width: '40%', marginLeft: '5%'}}>
          <Text style={{color: color.thene_green, fontSize: 25}}>{name}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{jobdescription}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>{rating}</Text>
              <AntDesign name="star" size={15} />
            </View>
          </View>
        </View>
        <View style={{left: '140%'}}>
          <AntDesign name="hearto" size={20} />
        </View>
      </View>
      <Text style={{width: '60%', height: '30%', marginLeft: '5%'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          marginTop:15
        }}>
        <Text style={{color: color.thene_green, fontSize: 25}}>
          $ {price}/w
        </Text>
        <TouchableOpacity
          style={{
            width: 90,
            height: 30,
            left: '220%',
            backgroundColor: color.thene_green,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
