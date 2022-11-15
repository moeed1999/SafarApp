import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextFieldInput from '../../components/TextFieldInput';

const SignUpPage = ({ navigation }) => {
    const [contactNum, setContactNum] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [showPasswordCheck, setShowPasswordCheck] = useState(false)

    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/animatedBg3.jpg')} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>Welcome!{"\n"}Lets Get You{"\n"}Started</Text>
                <TextFieldInput
                    iconName='phone'
                    iconSize={20}
                    iconColor='black'
                    placeholderText='Contact Num'
                    placeholderTextColor='black'
                    keyboardType='phone-pad'
                    val={contactNum}
                    handleChange={(e) => setContactNum(e)}
                    maxLength={11}
                />
                <TextFieldInput
                    iconName='mail'
                    iconSize={20}
                    iconColor='black'
                    placeholderText='E-mail'
                    placeholderTextColor='black'
                    keyboardType='email-address'
                    val={email}
                    handleChange={(e) => setEmail(e)}
                />
                <TextFieldInput
                    iconName='onepassword'
                    iconSize={20}
                    iconColor='black'
                    placeholderText='Password'
                    placeholderTextColor='black'
                    secureTextEntry={!showPassword}
                    val={password}
                    handleChange={(e) => setPassword(e)}
                    isPasswordField={true}
                    rightIcon={!showPassword ? "eye-outline" : "eye-off-outline"}
                    rightIconColor='black'
                    rightIconSize={20}
                    handleRightIcon={() => setShowPassword(!showPassword)}
                />
                <TextFieldInput
                    iconName='onepassword'
                    iconSize={20}
                    iconColor='black'
                    placeholderText='Confirm Passwords'
                    placeholderTextColor='black'
                    secureTextEntry={!showPasswordCheck}
                    val={passwordCheck}
                    handleChange={(e) => setPasswordCheck(e)}
                    isPasswordField={true}
                    rightIcon={!showPasswordCheck ? "eye-outline" : "eye-off-outline"}
                    rightIconColor='black'
                    rightIconSize={20}
                    handleRightIcon={() => setShowPasswordCheck(!showPasswordCheck)}
                />
            </View>
            <TouchableOpacity
                onPress={() => console.log(contactNum, password, passwordCheck, email, 'ss')}
                style={styles.loginContainer}
            >
                <Text style={{ fontWeight: '700', fontSize: 15 }}>Sign-Up</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', color: 'black', marginTop: 10, }}>OR</Text>
            <TouchableOpacity
                style={styles.signUpContainer}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ fontWeight: '500', fontSize: 15, color: '#11799a' }}>
                    Already have an account ? </Text>
            </TouchableOpacity>
        </View >
    )
}

export default SignUpPage

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fbfdfd',
    },
    upperContainer: {
        width: '100%',
        height: '30%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    formContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: -20,
        borderRadius: 10,
        padding: 20,
        paddingBottom: 30,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,

    },
    heading: {
        color: 'black',
        fontSize: 22,
        fontWeight: '600'
    },
    loginContainer: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#11799a',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
    },
    signUpContainer: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
    }
})