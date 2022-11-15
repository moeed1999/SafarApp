import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'

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

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    },
    viewsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    headingsContainer: {
        marginBottom: 20
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',

    },
    subheading: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',

    },
    buttonContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '400',
        color: 'black'
    }
})