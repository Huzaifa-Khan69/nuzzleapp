import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../../theme/color';
import QuizCart from '../../../components/QuizCart';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';

const quiz_data = [
  {
    num: 1,
    question: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?',
    options: [
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitrt',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitre',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitrj',
    ],
    right_option: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr',
  },
  {
    num: 2,
    question: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?',
    options: [
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitri',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitru',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitrz',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr',
    ],
    right_option: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr',
  },
  {
    num: 3,
    question: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?',
    options: [
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitrk',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitrl',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitrj',
    ],
    right_option: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr',
  },
  {
    num: 4,
    question: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr?',
    options: [
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitre',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitrt',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr',
      'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitru',
    ],
    right_option: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr',
  },
];

const Quiz = ({navigation}) => {
  const [checkResult, setcheckResult] = useState(false);
  return (
    <ScrollView>
      <Header
        title={'Rabat'}
        icon1={<AntDesign name="hearto" size={25} />}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
      <View>
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
              4
            </Text>
          </View>
          <Text style={{fontSize: 28, marginLeft: 10, fontWeight: 'bold'}}>
            Pet Quiz
          </Text>
        </View>
        {quiz_data.map(eachObject => {
          return (
            <QuizCart
              num={eachObject.num}
              question={eachObject.question}
              option={eachObject.options}
              right_option={eachObject.right_option}
              checkResult={checkResult}
            />
          );
        })}
      </View>
      <Button
        text={'Check Your Result'}
        onPress={() => {
          navigation.navigate('PassScreen')
          setcheckResult(true)
        }}
      />
    </ScrollView>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
