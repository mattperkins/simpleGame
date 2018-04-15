import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import RandomNum from './RandomNum'

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

    handlePress = () => {

    }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.sumTotal}>
            <Text style={styles.targetNum}>
                {this.target}
            </Text>
        </View>

        <View style={styles.randomContainer}>
            {this.randomNums.map((randomNum, index) => 
                <RandomNum key={index} number={randomNum} />
        )}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  sumTotal: {
    borderRadius: 6,
    backgroundColor: 'tomato',
    margin: 60,
    marginTop: 100,
    padding: 10,
  },
  targetNum: {
      fontSize: 40,
      textAlign: 'center'
  },
  randomContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
  },
})
