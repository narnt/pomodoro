import React from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import {Constants} from 'expo';

const styles = StyleSheet.create({
  count: {
	fontSize: 80,
  }
});

export class CountMin extends React.Component {
  constructor() {
	  super()
	  this.state = {
		  minutes: 0,
	  }
  }
  componentDidMount() {
	setInterval(this.inc, 60000)
  }
  
  inc = () => {
	this.setState((prevState) => ({
		minutes: prevState.minutes + 1,
	}))
  }
  render() {
	  return (
	  <Text style={styles.count}>{this.state.minutes}</Text>
	  );
	}
  }
  
export class CountSec extends React.Component {
  constructor() {
	  super()
	  this.state = {
		  sec: 0,
	  }
  }
  
  componentDidMount() {
	setInterval(this.inc, 1000)
  }
  
  inc = () => {
	this.setState((prevState) => ({
		count: prevState.sec + 1,
	}))
	if(this.state.sec === 60){
	  this.setState({
		count: 0,
	  })
	}
  }
  render() {
	  return (
	  <Text style={styles.count}>{this.state.sec}</Text>
	  );
	}
  }