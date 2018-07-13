import React from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';
import Button from 'react-native-button';
import {Constants} from 'expo';



export default class Start extends React.Component {
  
  constructor(props) {
	  super()
  }
  
  render() {
	return(
        <Button
			style={{fontSize: 20, backgroundColor: '#FF6347', color: 'orange', padding: 20, width: 250}}
			styleDisabled={{color: '#ddd'}}
			onPress={() => this.props.click()}>
			STAST/PAUSE
		</Button>
		);
	}
}