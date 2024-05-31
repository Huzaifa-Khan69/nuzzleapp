import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../../theme/color';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../../components/Button';

const Form = ({navigation}) => {
  return (
    <ScrollView>
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
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', margin: '5%'}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 80,
              borderWidth: 1,
              borderColor: color.thene_green,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, color: color.thene_green}}>2</Text>
          </View>
          <Text style={{fontSize: 22, marginLeft: 10}}>
            Tell Us About Your Self!
          </Text>
        </View>

        <Input
          title={'Home Address'}
          placeholder={'Type Here'}
          titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          containerStyle={{marginHorizontal: 30, width: '85%'}}
        />
        <Input
          title={'Current Employer'}
          placeholder={'Type Here'}
          titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          containerStyle={{marginHorizontal: 30, width: '85%'}}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '85%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Input
            title={'Since'}
            placeholder={'Years'}
            style={{width: '100%'}}
            containerStyle={{width: '45%'}}
            titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          />
          <Text style={{fontSize: 45, color: 'black', marginTop: 10}}>_</Text>
          <Input
            placeholder={'Months'}
            style={{width: '100%'}}
            containerStyle={{width: '45%'}}
            titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          />
        </View>
        <Input
          title={'Past/Present Office Address'}
          placeholder={'Type Here'}
          titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          containerStyle={{marginHorizontal: 30, width: '85%'}}
        />
        <View style={{flexDirection: 'row', width: '85%', alignSelf: 'center'}}>
          <Input
            title={'Gender'}
            placeholder={'Male'}
            style={{width: '90%'}}
            containerStyle={{width: '28%'}}
            titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          />
          <Input
            placeholder={'Female'}
            style={{width: '90%'}}
            containerStyle={{width: '28%'}}
            titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          />
          <Input
            placeholder={'Prefer Not To Say'}
            style={{width: '80%'}}
            containerStyle={{width: '55%'}}
            titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            width: '85%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          Shifts/Experience In
        </Text>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Checkbox text={'Daycare (Group Play)'} />
          <Checkbox text={'Bathing'} />
          <Checkbox text={'Ennel (Dog Handling/Feeding/Health'} />
          <Checkbox text={'Reception'} />
          <Checkbox text={'Training'} />
          <Checkbox text={'Grooming'} />
          <Checkbox text={'Other'} />
        </View>
        <Input
          title={'Cetifications'}
          placeholder={'Type Here'}
          icon={<Entypo name="attachment" size={20} />}
          titleStyle={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}
          containerStyle={{marginHorizontal: 30, width: '85%'}}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            width: '85%',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          Comfortable With
        </Text>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Checkbox text={'Small Dogs'} />
          <Checkbox text={'Large Dogs'} />
          <Checkbox text={'All Breeds'} />
          <Checkbox text={'Leash Reactivity'} />
          <Checkbox text={'Cats'} />
          <Checkbox text={'Birds'} />
          <Checkbox text={'Reptiles'} />
          <Checkbox text={'Small Furries/Rodents'} />
          <Checkbox text={'Horses'} />
          <Checkbox text={'Farm Animals'} />
        </View>
        <Button
          onPress={() => navigation.navigate('TakeAQuiz')}
          text={'SUBMIT'}
          buttonstyle={{width: '85%'}}
        />
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({});
