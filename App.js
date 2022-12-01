import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Item from "./components/Item"
import ItemTop from "./components/ItemTop"


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dzialanie: "",
      wynik: "",
    };

    this.onchange = this.onchange.bind(this);
  }
  onchange = (obj) => {
    if (obj != "") {
      if (obj != "C" && obj != "=") {
        if (obj == "+" || obj == "-" || obj == "*" || obj == "/") {
          if (this.state.dzialanie.substring(this.state.dzialanie.length - 1) != "+" &&
            this.state.dzialanie.substring(this.state.dzialanie.length - 1) != "-" &&
            this.state.dzialanie.substring(this.state.dzialanie.length - 1) != "*" &&
            this.state.dzialanie.substring(this.state.dzialanie.length - 1) != "/") {
            this.setState({ dzialanie: this.state.dzialanie + obj })
          }

        }
        else {
          this.setState({ dzialanie: this.state.dzialanie + obj })
        }

      }
      else if (obj == "C") {
        this.setState({ dzialanie: this.state.dzialanie.substring(0, this.state.dzialanie.length - 1), wynik: "" })
      }
      else if (obj == "=") {
        if (this.state.dzialanie.substring(this.state.dzialanie.length - 1) != "+" &&
          this.state.dzialanie.substring(this.state.dzialanie.length - 1) != "-" &&
          this.state.dzialanie.substring(this.state.dzialanie.length - 1) != "*" &&
          this.state.dzialanie.substring(this.state.dzialanie.length - 1) != "/") {
          let wynik = eval(this.state.dzialanie)
          this.setState({ wynik: wynik })
        }

      }
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <ItemTop text={this.state.dzialanie} color="white" />
          <ItemTop text={this.state.wynik} color="lightblue" />
        </View>
        <View style={styles.container5}>
          <View style={styles.container4}>
            <Item text="1" color="darkgrey" onchange={this.onchange} />
            <Item text="4" color="darkgrey" onchange={this.onchange} />
            <Item text="7" color="darkgrey" onchange={this.onchange} />
            <Item text="." color="darkgrey" onchange={this.onchange} />
          </View>
          <View style={styles.container4}>
            <Item text="2" color="darkgrey" onchange={this.onchange} />
            <Item text="5" color="darkgrey" onchange={this.onchange} />
            <Item text="8" color="darkgrey" onchange={this.onchange} />
            <Item text="0" color="darkgrey" onchange={this.onchange} />
          </View>
          <View style={styles.container4}>
            <Item text="3" color="darkgrey" onchange={this.onchange} />
            <Item text="6" color="darkgrey" onchange={this.onchange} />
            <Item text="9" color="darkgrey" onchange={this.onchange} />
            <Item text="=" color="darkgrey" onchange={this.onchange} />
          </View>
          <View style={styles.container4}>
            <Item text="C" color="lightgrey" onchange={this.onchange} />
            <Item text="/" color="lightgrey" onchange={this.onchange} />
            <Item text="*" color="lightgrey" onchange={this.onchange} />
            <Item text="-" color="lightgrey" onchange={this.onchange} />
            <Item text="+" color="lightgrey" onchange={this.onchange} />
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#ffff00',
  },
  container2: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#ffff00',
  },
  container4: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: '#ffff00',
  },
  container5: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#ffff00',
  },

});