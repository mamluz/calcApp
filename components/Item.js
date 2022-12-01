import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    if(this.props.text != "")
    this.props.onchange(this.props.text)
  }

  render() {
    return (
      <View style={{flex: 5,backgroundColor: ""+this.props.color+""}}>
      <TouchableOpacity
         onPress={this.onPress}
       >
        <Text style={styles.text}> {this.props.text} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 60, textAlign: "center", }
});



export default Item;