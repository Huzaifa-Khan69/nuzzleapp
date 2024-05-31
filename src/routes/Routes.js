import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Auth/Welcome';
import SignUp from '../screens/Auth/SignUp';
import Services from '../screens/Main/ServiceUser/Services';
import PersonDetails from '../screens/Main/ServiceUser/PersonDetails';
import WelcomePerson from '../screens/Main/ServiceProvider/WelcomePerson';
import Form from '../screens/Main/ServiceProvider/Form';
import TakeAQuiz from '../screens/Main/ServiceProvider/TakeAQuiz';
import Quiz from '../screens/Main/ServiceProvider/Quiz';
import PassScreen from '../screens/Main/ServiceProvider/PassScreen';
import Jobs from '../screens/Main/ServiceProvider/Jobs';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="PersonDetails" component={PersonDetails} />
        <Stack.Screen name="WelcomePerson" component={WelcomePerson} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="TakeAQuiz" component={TakeAQuiz} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="PassScreen" component={PassScreen} />
        <Stack.Screen name="Jobs" component={Jobs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})