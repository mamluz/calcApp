import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';

class ItemTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 5,backgroundColor: ""+this.props.color+""}}>
        <Text style={styles.text}> {this.props.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 50,position: "absolute", bottom: 0, right: 0, }
});



export default ItemTop;