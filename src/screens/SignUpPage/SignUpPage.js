import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import TextFieldInput from '../../components/TextFieldInput';
import { styles } from './styles';
import Toast from 'react-native-simple-toast';

const SignUpPage = ({ navigation }) => {
    const [contactNum, setContactNum] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [showPasswordCheck, setShowPasswordCheck] = useState(false)
    const [errors, setErrors] = useState({
        contactError: true,
        passwordError: true,
        confirmPasswordError: true,
        emailError: true
    })
    const [specialCharactersFormat] = useState(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
    const [alphaNumericFormat] = useState("[a-zA-Z]+")
    const [emailFormat] = useState(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    const [pressedSignUp, setPressedSignUp] = useState(false)


    const handleSignUp = () => {
        setPressedSignUp(true)
        validateData();
        approveSignUp()
    }
    useEffect(() => {
        if (
            errors.confirmPasswordError ||
            errors.contactError ||
            errors.emailError ||
            errors.passwordError
        ) { validateData() }
    }, [contactNum, password, email, passwordCheck])

    const validateData = () => {

        contactNum.length !== 11 || contactNum.match(specialCharactersFormat) || contactNum === '' ?
            setErrors(errors => ({
                ...errors,
                contactError: true
            }))
            :
            delete errors['contactError'];

        password.length < 10 ?
            setErrors(errors => ({
                ...errors,
                passwordError: true
            }))
            :
            delete errors['passwordError'];

        passwordCheck !== password || passwordCheck === '' ?
            setErrors(errors => ({
                ...errors,
                confirmPasswordError: true
            }))
            :
            delete errors['confirmPasswordError'];

        email === '' || !email.match(emailFormat) ?
            setErrors(errors => ({
                ...errors,
                emailError: true
            }))
            :
            delete errors['emailError'];


    }

    const approveSignUp = () => {
        JSON.stringify(errors) !== '{}' ? Toast.show('signed up failed') : Toast.show('sign up success')
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../../assets/images/animatedBg3.jpg')} />
            </View>
            <View
                style={[styles.formContainer, { marginTop: JSON.stringify(errors) === '{}' ? -20 : -105, }]}
            >
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
                />{
                    (pressedSignUp && errors.contactError) &&
                    <Text
                        style={styles.errorTexts}
                    >Please enter a valid contact number</Text>
                }
                <TextFieldInput
                    iconName='mail'
                    iconSize={20}
                    iconColor='black'
                    placeholderText='E-mail'
                    placeholderTextColor='black'
                    keyboardType='email-address'
                    val={email}
                    handleChange={(e) => setEmail(e)}
                />{
                    (pressedSignUp && errors.emailError) &&
                    <Text
                        style={styles.errorTexts}
                    >Please enter a valid email address</Text>
                }
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
                />{
                    (pressedSignUp && errors.passwordError) &&
                    <Text
                        style={styles.errorTexts}
                    >Please enter a 10 digit long password with atlease one letter, one number and one special character</Text>
                }
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
                />{
                    (pressedSignUp && errors.confirmPasswordError) &&
                    <Text
                        style={styles.errorTexts}
                    >Passwords don't match</Text>
                }
            </View>
            <TouchableOpacity
                onPress={handleSignUp}
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
