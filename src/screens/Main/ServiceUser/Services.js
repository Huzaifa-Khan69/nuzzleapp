import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../../theme/color';
import ServiceCart from '../../../components/ServiceCart';
import images from '../../../assets/images';
import Profile from '../../../components/Profile';
import Button from '../../../components/Button';
import PersonDetails from './PersonDetails';

const services_data = [
  {
    img: <Image source={images.dogwalking} />,
    text: 'Dog Walking',
  },
  {
    img: <Image source={images.Housesitting} />,
    text: 'House Sitting',
  },
  {
    img: <Image source={images.DropInvisits} />,
    text: 'Drop-In Visits',
  },
  {
    img: <Image source={images.Boarding} />,
    text: 'Boarding',
  },
];

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
];

const Services = ({navigation}) => {
  return (
    <View>
      <Header
        title={'Rabat'}
        icon1={<AntDesign name="hearto" size={25} />}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
      <Text
        style={{
          fontSize: 25,
          color: color.thene_green,
          width: '90%',
          alignSelf: 'center',
        }}>
        Which <Text style={{fontWeight: 'bold'}}>Service</Text> Do You Need?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {services_data.map(eachObject => (
          <ServiceCart
            Image={eachObject.img}
            text={eachObject.text}
            onPress={() =>
              navigation.navigate('PersonDetails', {text: eachObject.text})
            }
          />
        ))}
      </View>
      <Text
        style={{
          color: color.thene_green,
          fontSize: 30,
          width: '90%',
          alignSelf: 'center',
        }}>
        Top <Text style={{fontWeight: 'bold'}}>Related</Text> Profiles
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft:15}}>
        {person_data.map(eachObject => {
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
      </ScrollView>
      <Button
        onPress={() => navigation.navigate('WelcomePerson')}
        text={'Become A Pet Professional'}
        icon={
          <Image style={{width: 35, height: 35}} source={images.paw_image} />
        }
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
