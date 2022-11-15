import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';

const LandingPage = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../assets/images/animatedBg3.jpg')} resizeMode='cover' style={styles.mainContainer}>
            <View style={styles.viewsContainer}>
                <View style={styles.headingsContainer}>
                    <Text style={styles.heading}>Welcome</Text>
                    <Text style={styles.subheading}>Lets start our journey together</Text>
                </View>
                <TouchableOpacity
                    onPress={() => (navigation.navigate('Login'))}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Lets get started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default LandingPage
