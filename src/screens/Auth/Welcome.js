import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import color from '../../theme/color';
import Button from '../../components/Button';

const Welcome = ({navigation}) => {
  return (
    <View>
      <View>
        <Image
          style={{
            alignSelf: 'center',
            marginTop: '15%',
          }}
          source={images.logo}
        />
        <Image
          style={{
            alignSelf: 'center',
            marginTop: '5%',
            resizeMode: 'contain',
            width: '90%',
          }}
          source={images.dogs}
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 42,
            textAlign: 'center',
            marginTop: '2%',
            color: color.thene_green,
          }}>
          Take <Text style={{fontWeight: 'normal'}}>Better</Text> Care{' '}
          <Text style={{fontWeight: 'normal'}}>Of Your</Text> Pets{' '}
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            width: '80%',
            alignSelf: 'center',
            marginTop: '2%',
            color:color.black
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>
      <Button onPress={()=>navigation.navigate("SignUp")}
      text={'GET STARTED'} />
      <Text style={{textAlign:"center",fontSize:20,marginTop:"1%",color:color.black}}>Already Have An Account? Login</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
