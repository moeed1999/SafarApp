import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const LoginPage = () => {
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
                <View style={styles.input}>
                    <Icon name="phone" size={20} color="black" style={{ marginRight: 5 }} />
                    <TextInput
                        style={styles.inputText}
                        placeholder='Contact Num'
                        placeholderTextColor={'black'}
                        keyboardType='phone-pad'
                        value={contactNum}
                        onChangeText={(e) => setContactNum(e)}
                    />
                </View>
                <View style={styles.input}>
                    <Icon name="onepassword" size={20} color="black" style={{ marginRight: 5 }} />
                    <TextInput
                        style={styles.inputText}
                        placeholder='Password'
                        placeholderTextColor={'black'}
                        secureTextEntry={showPassword}
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <TouchableOpacity>
                        <Icon
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            size={20} color="black"
                            style={{ marginRight: 5 }}
                            onPress={() => setShowPassword(!showPassword)} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
            </View>
            <TouchableOpacity
                style={styles.loginContainer}
            >
                <Text style={{ fontWeight: '700', fontSize: 15 }}>Login</Text>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', color: 'black', marginTop: 10, }}>OR</Text>
            <TouchableOpacity
                style={styles.signUpContainer}
            >
                <Text style={{ fontWeight: '700', fontSize: 15, color: '#11799a' }}>Sign-Up</Text>
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
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        color: 'black'
    },
    inputText: {
        width: '80%',
        borderBottomWidth: 1,
        color: 'black'
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