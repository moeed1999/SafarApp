
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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