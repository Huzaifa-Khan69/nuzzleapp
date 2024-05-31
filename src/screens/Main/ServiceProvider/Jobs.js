import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../../theme/color';
import Jobpostercart from '../../../components/Jobpostercart';
import images from '../../../assets/images';

const dog_walk = [
  {
    jobtitle: 'Morning Walk',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Karachi',
    time: 4,
  },
  {
    jobtitle: 'Morning Walk',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Karachi',
    time: 4,
  },
  {
    jobtitle: 'Morning Walk',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Karachi',
    time: 4,
  },
  {
    jobtitle: 'Morning Walk',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Karachi',
    time: 4,
  },
  {
    jobtitle: 'Morning Walk',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Karachi',
    time: 4,
  },
  {
    jobtitle: 'Morning Walk',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Karachi',
    time: 4,
  },
  {
    jobtitle: 'Morning Walk',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Karachi',
    time: 4,
  },
];
const housesiting = [
  {
    jobtitle: 'House Sitting',
    pay: 8,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Lahore',
    time: 4,
  },
  {
    jobtitle: 'House Sitting',
    pay: 8,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Lahore',
    time: 4,
  },
  {
    jobtitle: 'House Sitting',
    pay: 8,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Lahore',
    time: 4,
  },
  {
    jobtitle: 'House Sitting',
    pay: 8,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Lahore',
    time: 4,
  },
  {
    jobtitle: 'House Sitting',
    pay: 8,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Lahore',
    time: 4,
  },
  {
    jobtitle: 'House Sitting',
    pay: 8,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Lahore',
    time: 4,
  },
  {
    jobtitle: 'House Sitting',
    pay: 8,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Lahore',
    time: 4,
  },
];
const drop_in = [
  {
    jobtitle: 'Drop-In Visits',
    pay: 12,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Islamabad',
    time: 4,
  },
  {
    jobtitle: 'Drop-In Visits',
    pay: 12,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Islamabad',
    time: 4,
  },
  {
    jobtitle: 'Drop-In Visits',
    pay: 12,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Islamabad',
    time: 4,
  },
  {
    jobtitle: 'Drop-In Visits',
    pay: 12,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Islamabad',
    time: 4,
  },
  {
    jobtitle: 'Drop-In Visits',
    pay: 12,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Islamabad',
    time: 4,
  },
  {
    jobtitle: 'Drop-In Visits',
    pay: 12,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Islamabad',
    time: 4,
  },
  {
    jobtitle: 'Drop-In Visits',
    pay: 12,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Islamabad',
    time: 4,
  },
];
const boarding = [
  {
    jobtitle: 'Boarding',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Multan',
    time: 4,
  },
  {
    jobtitle: 'Boarding',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Multan',
    time: 4,
  },
  {
    jobtitle: 'Boarding',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Multan',
    time: 4,
  },
  {
    jobtitle: 'Boarding',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Multan',
    time: 4,
  },
  {
    jobtitle: 'Boarding',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Multan',
    time: 4,
  },
  {
    jobtitle: 'Boarding',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Multan',
    time: 4,
  },
  {
    jobtitle: 'Boarding',
    pay: 10,
    img: <Image source={images.jobposter} />,
    companyname: 'Channel Inc,LLC',
    location: 'Multan',
    time: 4,
  },
];
const Jobs = () => {
  return (
    <ScrollView>
      <Header
        title={'Rabat'}
        icon1={<AntDesign name="hearto" size={25} />}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
      <Text
        style={{
          color: color.thene_green,
          fontSize: 22,
          width: '90%',
          alignSelf: 'center',
        }}>
        Find Your Dream Pet Care Job!
      </Text>
      <Text
        style={{
          color: color.thene_green,
          fontSize: 22,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Dog Walking
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingLeft:15}}>
        {dog_walk.map(eachObject => (
          <Jobpostercart
            jobtitle={eachObject.jobtitle}
            pay={eachObject.pay}
            img={eachObject.img}
            companyname={eachObject.companyname}
            location={eachObject.location}
            time={eachObject.time}
          />
        ))}
      </ScrollView>
      <Text
        style={{
          color: color.thene_green,
          fontSize: 22,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        House Sitting
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingLeft:15}}>
        {housesiting.map(eachObject => (
          <Jobpostercart
            jobtitle={eachObject.jobtitle}
            pay={eachObject.pay}
            img={eachObject.img}
            companyname={eachObject.companyname}
            location={eachObject.location}
            time={eachObject.time}
          />
        ))}
      </ScrollView>
      <Text
        style={{
          color: color.thene_green,
          fontSize: 22,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Drop-In Visits
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingLeft:15}}>
        {drop_in.map(eachObject => (
          <Jobpostercart
            jobtitle={eachObject.jobtitle}
            pay={eachObject.pay}
            img={eachObject.img}
            companyname={eachObject.companyname}
            location={eachObject.location}
            time={eachObject.time}
          />
        ))}
      </ScrollView>
      <Text
        style={{
          color: color.thene_green,
          fontSize: 22,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Boarding
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingLeft:15}}>
        {boarding.map(eachObject => (
          <Jobpostercart
            jobtitle={eachObject.jobtitle}
            pay={eachObject.pay}
            img={eachObject.img}
            companyname={eachObject.companyname}
            location={eachObject.location}
            time={eachObject.time}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Jobs;

const styles = StyleSheet.create({});
