import React from 'react'
import {
  Text,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Index from './src/screens/Index'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from './src/assets/fonts/selection.json'

export const Icon = createIconSetFromIcoMoon(icoMoonConfig)

const entireScreenWidth = Dimensions.get('window').width
const entireScreenHeight = Dimensions.get('window').height

EStyleSheet.build({ //creating a responsive rem unit
  $green: '#38C172',
  $dw: entireScreenWidth,
  $dh: entireScreenHeight
})

export default class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, container: 'white' }}>
        <Index />
      </View>
    )
  }
}
