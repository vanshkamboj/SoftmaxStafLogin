/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import LoadingComp from './src/LoadingComp';

const App: () => React$Node = () => {
  const renderLoadingView = () => {
    return (
      //for show Loading before webPage load
      <LoadingComp />
    );
  };
  return (
    <>
      <WebView
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
        }}
        source={{uri: 'https://www.softmax.info/e_index.php'}}
        renderLoading={renderLoadingView}
        startInLoadingState={true}
      />
    </>
  );
};

export default App;
