import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { primaryGradientArray } from '../../utils/Colors';
import { APP_ID } from '../../utils/Keys';
import Gallery from '../Gallery';
export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/?client_id=' + APP_ID)
      .then(res => res.json())
      .then(data => {
        this.setState({ images: data });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }

  render() {
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>Hi!</Text>
        <Gallery images={this.state.images}></Gallery>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});