import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/screens/Auth/Welcome'
import SignUp from './src/screens/Auth/SignUp'
import Services from './src/screens/Main/ServiceUser/Services'
import PersonDetails from './src/screens/Main/ServiceUser/PersonDetails'
import WelcomePerson from './src/screens/Main/ServiceProvider/WelcomePerson'
import Form from './src/screens/Main/ServiceProvider/Form'
import TakeAQuiz from './src/screens/Main/ServiceProvider/TakeAQuiz'
import Quiz from './src/screens/Main/ServiceProvider/Quiz'
import PassScreen from './src/screens/Main/ServiceProvider/PassScreen'
import Routes from './src/routes/Routes'
import Jobs from './src/screens/Main/ServiceProvider/Jobs'

const App = () => {
  return (
    //  <Jobs/>
      <Routes/>
      // <Quiz/>
  )
}

export default App

const styles = StyleSheet.create({})