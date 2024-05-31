import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../../theme/color';
import Input from '../../components/Input';
import Button from '../../components/Button';

const data = [
  {
    title: 'Legal First Name',
    placeholder: 'Type Here',
  },
  {
    title: 'Legal Middle Name',
    placeholder: 'Type Here',
  },
  {
    title: 'Legal Last Name',
    placeholder: 'Type Here',
  },
  {
    title: 'Email Address',
    placeholder: 'Type Here',
  },
  {
    title: 'Phone Number',
    placeholder: 'Type Here',
  },
];

const SignUp = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          width: '90%',
          alignItems: 'center',
          marginTop: '10%',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 30, color: color.black}}>
          Please enter Your Name
        </Text>
        <Text style={{color: color.black, fontSize: 30}}>
          As It Appears On your ID
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          borderRadius: 10,
          backgroundColor: 'white',
          height: '80%',
          alignSelf: 'center',
          marginTop: '5%',
          justifyContent: 'center',
        }}>
        {data.map(eachObject => {
          return (
            <Input
              title={eachObject.title}
              placeholder={eachObject.placeholder}
              titleStyle={{fontSize: 15, marginBottom: 10, fontWeight: 'bold'}}
              containerStyle={{marginHorizontal: 30, width: '85%'}}
            />
          );
        })}
        <Button 
        onPress={()=>navigation.navigate("Services")}
        text={'GET STARTED'} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
