import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TextFieldInput from '../../components/TextFieldInput';
import { styles } from './styles';


const LoginPage = ({ navigation }) => {
    const [contactNum, setContactNum] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [contactError, setContactError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [specialCharactersFormat] = useState(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
    const [alphaNumericFormat] = useState("[a-zA-Z]+")

    const handleLogin = () => {
        validateContactNum()
        validatePassword()
        approveLogin()

    }

    const validateContactNum = () => {
        (contactNum.length !== 11 || contactNum.match(specialCharactersFormat)) ? setContactError(true) : setContactError(false)
    }

    const validatePassword = () => {
        (!password.match(specialCharactersFormat) || !password.match(alphaNumericFormat) || password.length < 10) ? setPasswordError(true) : setPasswordError(false)
    }

    const approveLogin = () => {
        (contactError == false && passwordError == false) &&
            console.log('login succesful')
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/animatedBg3.jpg')} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.heading}>Hello Again!{"\n"}Welcome{"\n"}Back</Text>
                <View style={{ marginTop: 5 }}>
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
                    {contactError &&
                        <Text
                            style={styles.errorTexts}
                        >Please enter a valid contact number</Text>}
                </View>
                <View style={{ marginTop: 5 }}>
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
                    {passwordError &&
                        <Text
                            style={styles.errorTexts}
                        >Please enter a 10 digit long password with atlease one small letter, one capital letter, one number and one special character</Text>}
                </View>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
            </View>
            <TouchableOpacity
                style={styles.loginContainer}
                onPress={handleLogin}
            >
                <Text style={{ fontWeight: '700', fontSize: 15 }}>Login</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', color: 'black', marginTop: 10, }}>OR</Text>
            <TouchableOpacity
                onPress={() => (navigation.navigate('Signup'))}
                style={styles.signUpContainer}
            >
                <Text style={{ fontWeight: '500', fontSize: 15, color: '#11799a' }}>
                    Don't have an account ? </Text>
            </TouchableOpacity>
        </View >
    )
}

export default LoginPage
