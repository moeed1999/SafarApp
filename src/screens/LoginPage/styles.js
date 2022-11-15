import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    },
    errorTexts: {
        color: 'red',
        textAlign: 'center',
        margin: 5,
        fontSize: 11
    }
})