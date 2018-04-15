import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
StyleSheet,
TouchableOpacity,
View,
Text,
} from 'react-native'

export default class RandomNum extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
    }
render() {
const { container } = styles
return (
<View style={ container }>
    <TouchableOpacity 
        onPress={this.handlePress}
        style={styles.circle}>
        <Text 
            style={styles.randomText}>{this.props.number}</Text>
    </TouchableOpacity>
</View>
)
}
}

const styles = StyleSheet.create({
    circle: {
      borderRadius: 50,
      width: 100,
      margin: 20,
      backgroundColor: 'cornflowerblue',
  },
    randomText: {
        fontSize: 35,
        textAlign: 'center',
  },
})

