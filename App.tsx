import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions, LogBox } from 'react-native';
import { NativeBaseProvider, Input, Image, Icon, Button } from "native-base";
import MainRouter from './src/router/main.router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function App(): JSX.Element {
  const centeredViewWidth = windowWidth * 0.8;
  const centeredViewHeight = windowHeight * 0.4;
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (

    <NativeBaseProvider>
      <MainRouter />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
  },
  centeredView: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    marginTop: (windowHeight - 350) / 2
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#29367C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 29.05,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },
  viewContainer: {
    padding: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 29.05,
    fontWeight: '700',
    fontFamily: 'Inter-Regular',
  },
  buttonRegister: {
    backgroundColor: 'white',
  },
  TextRegister: {
    color: '#1469BE',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter-Regular',
    borderBottomWidth: 2,
    borderBottomColor: '#1469BE'
  },

});

export default App;