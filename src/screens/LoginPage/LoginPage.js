import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextFieldInput from '../../components/TextFieldInput';


const LoginPage = ({ navigation }) => {
    const [contactNum, setContactNum] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
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
                <View style={{ marginTop: 10 }}>
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
                </View>
                <View style={{ marginTop: 10 }}>
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
                </View>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
            </View>
            <TouchableOpacity
                style={styles.loginContainer}
                onPress={() => console.log(password, contactNum)}
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
    forgotPass: {
        color: '#11799a',
        alignSelf: 'center',
        marginTop: 20
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