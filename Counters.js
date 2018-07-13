import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {vibrate} from './utils';
import Button from 'react-native-button';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
	borderColor: 'green',
	borderTopWidth: 3,
	borderBottomWidth: 3,
	paddingTop: 5,
	paddingBottom: 5,
	marginTop: 5,
  },
  countWrap: {
	minWidth: 250,
	paddingBottom: 5,
	flexDirection: 'row',
    alignItems: 'center',
  },
  countMin: {
	flex: 1,
	borderWidth: 5,
	borderColor: '#FF6347',
	marginRight: -2.5,
	alignItems: 'flex-end',
	padding: 10,
  },
  countSec: {
	flex: 1,
	borderWidth: 5,
	borderColor: '#FF6347',
	marginLeft: -2.5,
	alignItems: 'flex-end',
	padding: 10,
  },
  count: {
	fontSize: 80,
	color: 'green',
  },
});
 
export const TimerEnds = {end: false};
 
export class Counters extends React.Component {
  constructor(props) {
	  super()
	  this.state = {
		  sec: 0,
		  minutes: 0,
		  work: true,
	  }
  }
  
  work = 25;
  
  rest = 5;
  
  buttonText = 'START';
  
  componentWillReceiveProps(nextProps) {
	if(nextProps.counting){
		this.timerSec = setInterval(this.decSec, 1000);
		this.buttonText = 'PAUSE';
	}
	if(this.state.minutes === 0 && this.state.sec === 0){
		this.setState((prevState) => ({
			work: !prevState.work,
			minutes: prevState.work === true ? this.work : this.rest,
			}))
	}
  }
  
  decSec = () => {
	if(!this.props.counting || (this.state.minutes === 0 && this.state.sec === 1)){
		clearInterval(this.timerSec);
		this.buttonText = 'START';
	}
	if(this.props.counting && this.state.minutes === 0 && this.state.sec === 1){
		TimerEnds.end = true;
	}
	else{
		TimerEnds.end = false;
	}
	if(this.state.sec === 0){
	  this.setState((prevState) => ({
		sec: 59,
		minutes: prevState.minutes - 1,
	  }))
	}
	else{
		this.setState((prevState) => ({
			sec: prevState.sec - 1,
		}))
	}
  }
  
  
  render() {
	  if(this.state.minutes===0 && this.state.sec===1 && this.props.counting){
		this.timerVibr = setInterval(() => vibrate(), 1000)
		}
	  else if(TimerEnds.end === false){
		clearInterval(this.timerVibr);
	  }
		
	  return (
	  <View style={styles.container}>
		<View style={styles.countWrap}>
			<View style={styles.countMin}>
				<Text style={styles.count}>{this.state.minutes}</Text>
			</View>
			<View style={styles.countSec}>
				<Text style={styles.count}>{this.state.sec}</Text>
			</View>
		</View>
        <Button
			style={{fontSize: 20, backgroundColor: '#FF6347', color: 'orange', padding: 20, width: 250}}
			styleDisabled={{color: '#ddd'}}
			onPress={() => this.props.click()}>
				{this.buttonText}
		</Button>
	   </View>
	  );
	}
  }