import React from 'react'
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image} />
        <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at £55,000</Text>
        </View>
        <StyledButton type="primary" content={'Custom order'} onPress={() => {console.warn('Custom Order was pressed')}}/>
        <StyledButton type="secondary" content={'Existing inventory'} onPress={() => {console.warn('Existing inventory was pressed')}}/>
    </View>
  )
}

export default CarItem