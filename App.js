import React from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';
import {Constants} from 'expo';

import {Counters, TimerEnds} from './Counters.js';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
	paddingTop: Constants.statusBarHeight,
  },
  logo: {
    height: 160,
    width: 160,
  },
});

export default class App extends React.Component {
  
  constructor() {
	  super()
	  this.state = {
		 counting: false,
	  }
  }
  
  click = () => {
	this.setState({
		counting: !this.state.counting,
	})
	  if(TimerEnds.end == true){
		this.setState((prevState)=>({
		counting: !prevState.counting,
		}))
	 }
  }
  
  render() {
    return (
      <View style={styles.container}>
		<Image style={styles.logo} source={require("./assets/tomato.png")}/>
		<Counters counting={this.state.counting} click={this.click}/>
      </View>
    );
  }
}