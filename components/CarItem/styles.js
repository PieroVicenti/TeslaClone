import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      carContainer: {
        width: '100%',
        height: '100%',
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      },
    
      title: {
        fontSize: 40,
        fontWeight: '500'
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
      subtitleCTA: {
        fontSize: 16,
        textDecorationLine: 'underline',
        
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',

      }
})

export default styles;