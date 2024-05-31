import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import color from '../../../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../../components/Button';

const TakeAQuiz = ({navigation}) => {
  return (
    <View>
      <Header
        title={'Rabat'}
        icon1={<AntDesign name="hearto" size={25} />}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
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
          height: 330,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', margin: '5%'}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 80,
              borderWidth: 1,
              borderColor: color.thene_green,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: color.thene_green,
                fontWeight: 'bold',
              }}>
              3
            </Text>
          </View>
          <Text style={{fontSize: 28, marginLeft: 10, fontWeight: 'bold'}}>
            Take Quiz
          </Text>
        </View>
        <View
          style={{width: '90%', alignSelf: 'center'}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>
            Test Your Pet Care Knowledge
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <Text style={{fontSize: 22}}>
            Answer Each Question In Order To Test Your Knowledge ( Required )
          </Text>
        </View>
        <Button text={'GET STARTED'}
        onPress={()=>navigation.navigate("Quiz")}/>
      </View>
    </View>
  );
};

export default TakeAQuiz;

const styles = StyleSheet.create({});
