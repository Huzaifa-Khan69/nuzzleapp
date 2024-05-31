import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const QuizCart = ({num, question, option, right_option, checkResult}) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

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
        marginVertical: 20,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20}}>{num}.</Text>
        <Text style={{fontSize: 20}}> {question}</Text>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '5%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {option.map((eachoption, index) => (
          <View style={{flexDirection: 'row'}}>
            <BouncyCheckbox
              fillColor={'black'}
              isChecked={index === selectedCheckbox ? true : false}
              onPress={() => setSelectedCheckbox(index)}
              disabled={isSubmitDisabled}
            />
            <Text
              style={[
                {fontSize: 18},
                selectedCheckbox === index && submitClicked
                  ? {backgroundColor: 'pink'}
                  : {backgroundColor: 'white'},
                  right_option === eachoption && checkResult
                  ? {backgroundColor: 'green'}
                  : null,
              ]}>
              {eachoption}
            </Text>
          </View>
        ))}
      </View>
      <Button
        onPress={() => {
          setSubmitClicked(true);
          setIsSubmitDisabled(true);
        }}
        text={'SUBMIT'}
        disabled={isSubmitDisabled}
      />
    </View>
  );
};

export default QuizCart;

const styles = StyleSheet.create({});
