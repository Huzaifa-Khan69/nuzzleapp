import {StyleSheet, Image, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Profile from '../../../components/Profile';
import images from '../../../assets/images';
import color from '../../../theme/color';
import Button from '../../../components/Button';

const person_data = [
  {
    image: <Image source={images.person_img} />,
    name: 'John Doe',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'John Doe',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'John Doe',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'John Doe',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'John Doe',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'John Doe',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
];
const Housesitting = [
  {
    image: <Image source={images.person_img} />,
    name: 'Bai Lu',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Bai Lu',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Bai Lu',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Bai Lu',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Bai Lu',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Bai Lu',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
];

const Drop_In_Visits = [
  {
    image: <Image source={images.person_img} />,
    name: 'Kim Ya Ti',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Kim Ya Ti',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Kim Ya Ti',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Kim Ya Ti',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Kim Ya Ti',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Kim Ya Ti',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
];
const Boarding = [
  {
    image: <Image source={images.person_img} />,
    name: 'Li Xian',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Li Xian',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Li Xian',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Li Xian',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Li Xian',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
  {
    image: <Image source={images.person_img} />,
    name: 'Li Xian',
    jobdescription: 'Pet Sitter',
    rating: 4.9,
    price: '10.00',
  },
];

const PersonDetails = ({navigation, route}) => {
  const {text} = route.params;
  return (
    <ScrollView>
      <Header
        title={'Rabat'}
        icon1={<AntDesign name="hearto" size={25} />}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          color: color.thene_green,
          fontWeight: 'bold',
        }}>
        {text}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          width: '90%',
          alignSelf: 'center',
          marginLeft:"3%"
        }}>
        {text === 'Dog Walking'
          ? person_data.map(eachObject => {
              return (
                <Profile
                  image={eachObject.image}
                  name={eachObject.name}
                  jobdescription={eachObject.jobdescription}
                  rating={eachObject.rating}
                  price={eachObject.price}
                />
              );
            })
          : text === 'House Sitting'
          ? Housesitting.map(eachObject => {
              return (
                <Profile
                  image={eachObject.image}
                  name={eachObject.name}
                  jobdescription={eachObject.jobdescription}
                  rating={eachObject.rating}
                  price={eachObject.price}
                />
              );
            })
          : text === 'Drop-In Visits'
          ? Drop_In_Visits.map(eachObject => {
              return (
                <Profile
                  image={eachObject.image}
                  name={eachObject.name}
                  jobdescription={eachObject.jobdescription}
                  rating={eachObject.rating}
                  price={eachObject.price}
                />
              );
            })
          : Boarding.map(eachObject => {
              return (
                <Profile
                  image={eachObject.image}
                  name={eachObject.name}
                  jobdescription={eachObject.jobdescription}
                  rating={eachObject.rating}
                  price={eachObject.price}
                />
              );
            })}
      </View>
      <Button
        text={'Become A Pet Professional'}
        onPress={()=>navigation.navigate("WelcomePerson")}
        icon={
          <Image style={{width: 35, height: 35}} source={images.paw_image} />
        }
      />
    </ScrollView>
  );
};

export default PersonDetails;

const styles = StyleSheet.create({});
