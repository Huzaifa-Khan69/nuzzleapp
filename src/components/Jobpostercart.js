import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from './Button';

const Jobpostercart = ({img, companyname, location, time, jobtitle, pay}) => {
  return (
    <View
      style={{
        width: wp('80%'),
        height: 220,
        marginTop: 20,
        marginRight: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:"lightgrey"
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>{jobtitle}</Text>
        <FontAwesome name="bookmark-o" size={30} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          marginTop: 3,
          alignItems: 'center',
        }}>
        <Text>{pay}$ hourly</Text>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 8,
            marginLeft: 25,
            width: 80,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Full Time</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          alignSelf: 'center',
          marginTop: 30,
        }}>
        {img ? img : null}
        <View style={{flexDirection: 'column', marginHorizontal: 10}}>
          <Text>{companyname}</Text>
          <Text>{location}</Text>
        </View>
        <View style={{justifyContent: 'center', marginLeft: 40, marginTop: 15}}>
          <Text>{time} days ago</Text>
        </View>
      </View>
      <Button text={'Apply Now'} buttonstyle={{height: 42, width: '95%'}} />
    </View>
  );
};

export default Jobpostercart;

const styles = StyleSheet.create({});
