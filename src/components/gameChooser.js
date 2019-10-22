import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';

export default class GameChooser extends Component {

  constructor(props) {
    super(props)
    this.state = {
       stage: 0,
       isLocked: -1
    };
  };

  componentDidMount = () => {
    const {stage, isLocked} = this.props
    this.setState({
      stage, isLocked
    })
  };
  
  
  render() {
    const { stage, isLocked, onStageClicked} = this.props
    console.log("render: ", this.props)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} disabled={(isLocked < 0)} onPress={(isLocked < 0) ? null : onStageClicked}>
          <View style={styles.container3}>
            <Image style={styles.image} source={require('./../../assets/img1.jpg')}/>
            <Text style={styles.text}>{stage}</Text>
            {(isLocked < 0) && (
              <View style={styles.blurTop}>
                <Image style={styles.blurTopImage} source={require('./../../assets/ic_lock_outline.png')} />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

GameChooser.propTypes = {
  stage: PropTypes.number,
  isLocked: PropTypes.number,
  onStageClicked: PropTypes.func
};

GameChooser.defaultProps = {
  stage: 0,
  isLocked: -1,
  onStageClicked: null
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center'
  },
  
  container3: {
    width: 100,
    height: 100,
    position: 'absolute'
  },
  touchable: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 24,
    borderWidth: 4,
    borderColor: 'rgba(1,255,255,0.4)',
  },
  text:{
    fontSize: 40,
    fontWeight: '900',
    top: 20,
    position: 'absolute',
    alignSelf: 'center',
  },
  blurTop:{
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 24,
    justifyContent: 'center'
  },
  blurTopImage:{
    width: 48,
    height: 48,
    alignSelf: 'center',
  }
})
