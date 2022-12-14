import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // borderWidth: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20

    },
    upperBar: {
        borderBottomWidth: 1,
        paddingBottom: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        borderBottomColor: 'grey'
    },
    heading: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600'

    },

    upperBarIconsContainer: {
        flexDirection: 'row',
        width: '35%',
        justifyContent: 'flex-end'
    },
    placesContainer: {
        marginTop: 12,
        height: 30,
        marginRight: 15,
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 7,
        borderRadius: 10,
        backgroundColor: '#f1f3f3'
    },
    selectedPlaceContainer: {
        marginTop: 12,
        height: 30,
        marginRight: 15,
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 7,
        borderRadius: 10,
        backgroundColor: colors.mainBlue,
    },
    places: {
        color: 'grey',
        fontSize: 15,
    },
    selectedPlace: {
        color: 'white',
        fontSize: 15,
    },
    toursGoingContainer: {
        // borderWidth: 1,
        height: 300,
        marginTop: 12,
        marginRight: 20,
        width: 200,
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    toursDescriptionContainer: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginBottom: 5
    },
    descriptionUpperContiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    descriptionIconContainer: {
        flexDirection: 'row',
    },
    destinationHeadingContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignItems: 'center'
    },
    destinationHeading: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600'
    },
    topPlacesContainer: {
        height: 90,
        // width: 200,
        marginTop: 15,
        marginRight: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#eeefef',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10
    },
    topPlacesImage: {
        height: 100,
        width: 100
    },
    topPlacesHeading: {
        marginLeft: 2
    },
    topPlacesDescription: {
        color: 'black',
        fontWeight: '400',
        fontSize: 10,
        // width: '70%',
        textAlign: 'center'
    },
    description: {
        color: 'grey',
        marginTop: 15
    }
})