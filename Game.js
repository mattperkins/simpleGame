import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class App extends Component {
    static propTypes = {
        randomNumCount: PropTypes.number.isRequired,
    }
    
    randomNums = Array
    .from({ length: this.props.randomNumCount })
    .map(() => 1 + Math.floor(10 * Math.random()))
    
    target = this.randomNums
        .slice(0, this.props.randomNumCount -2)
        .reduce((acc, curr) => acc + curr, 0)

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.target}>
            {this.target}
        </Text>

        <View style={styles.randomContainer}>
            {this.randomNums.map((randomNum, index) => 
                <View style={styles.circle} key={index}>
                    <Text style={styles.randomText}>{randomNum}</Text>
                </View>
        )}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  target: {
      fontSize: 40,
      backgroundColor: '#aaa',
      margin: 50,
      textAlign: 'center'
  },
  randomContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
  },
  circle: {
      borderRadius: 50,
      width: 100,
      margin: 20,
      backgroundColor: '#999',
  },
  randomText: {
      fontSize: 35,
      textAlign: 'center',
  },
})
