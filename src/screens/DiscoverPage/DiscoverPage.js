import { Text, View, FlatList, ImageBackground, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/AntDesign';


const DiscoverPage = () => {
    const [places] = useState(['Naran Kaghan', 'Azad Kashmir', 'Swat & Malam Jabba', 'Kalam', 'Skardu', 'Hunza & Naltar Valley',])
    const [toursGoing] = useState([
        { img: require('../../assets/images/waterfall2.jpg'), name: 'Safar-Nama', ratings: '4.5', moto: 'More Travel, Less Worry' },
        { img: require('../../assets/images/beach.jpg'), name: 'Pakistani-Tours', ratings: '4.7', moto: 'More Travel, Less Worry' },
        { img: require('../../assets/images/waterfall.jpg'), name: 'Trekkers', ratings: '4.2', moto: 'More Travel, Less Worry' },
        { img: require('../../assets/images/animatedBg4.jpg'), name: 'Northeners', ratings: '4.1', moto: 'More Travel, Less Worry' },
    ])
    const [topPlaces] = useState([
        { img: require('../../assets/images/waterfall2.jpg'), name: 'Kel - Arang Kel', description: 'visit before it gets too crowded' },
        { img: require('../../assets/images/beach.jpg'), name: 'Sharan Forest', description: 'visit before it gets too crowded' },
        { img: require('../../assets/images/waterfall.jpg'), name: 'Gabbin Jabba', description: 'visit before it gets too crowded' },
        { img: require('../../assets/images/animatedBg4.jpg'), name: 'Lake Saif ul Mulook', description: 'visit before it gets too crowded' },
    ])
    const [selectedPlace, setSelectedPlace] = useState(0)

    const showPlaces = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.placesContainer}
                onPress={() => setSelectedPlace(index)}
            >
                <Text
                    style={styles.places}
                >{item}</Text>
                {index === selectedPlace && <Text
                    style={[styles.places, { marginTop: -15, fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }]}
                >{'.'}</Text>}
            </TouchableOpacity>
        )
    }

    const showToursGoing = ({ item }) => {
        return (
            <ImageBackground source={item.img}
                resizeMode='cover'
                style={styles.toursGoingContainer}>
                <View style={styles.toursDescriptionContainer}>
                    <View style={styles.descriptionUpperContiner}>
                        <Text style={{ color: 'black', fontWeight: '600' }}>{item.name}</Text>
                        <View style={styles.descriptionIconContainer}>
                            <Icon name={'star'} size={20} color={'#ffdd33'} style={{ marginRight: 5 }} />
                            <Text style={{ color: 'black' }}>{item.ratings}</Text>
                        </View>
                    </View>
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '400' }}>{item.moto}</Text>
                </View>
            </ImageBackground>

        )
    }

    const showTopPlaces = ({ item }) => {
        return (
            <View style={styles.topPlacesContainer}>
                <Image
                    source={item.img}
                    style={styles.topPlacesImage}
                    resizeMode='cover'
                />
                <View style={styles.topPlacesHeading}>
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 14 }}>
                        {item.name}
                    </Text>
                    <View>
                        <Text style={styles.topPlacesDescription}>
                            {item.description}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.upperBar}>
                <Text style={styles.heading}>Discover</Text>
                <View style={styles.upperBarIconsContainer}>
                    <Icon name={'bells'} size={20} color={'grey'} style={{ marginRight: 20 }} />
                    <Icon name={'user'} size={20} color={'grey'} />
                </View>
            </View>
            {/* make component of search bar here */}
            <View style={{ borderWidth: 1, width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center', marginTop: 12, borderRadius: 10, borderColor: 'grey', height: 40 }}>
                <TextInput style={{
                    width: '80%',
                    color: 'black',
                    fontSize: 15,
                }}
                    placeholder='search for places or tours'
                    placeholderTextColor='grey'
                ></TextInput>
                <Icon name={'search1'} size={20} color={'grey'} style={{ marginRight: 5 }} />
            </View>
            {/* ===== */}
            <FlatList
                style={{ flexGrow: 0 }}
                data={places}
                renderItem={(item, index) => showPlaces(item, index)}
                horizontal
            />
            <FlatList
                style={{ flexGrow: 0 }}
                data={toursGoing}
                renderItem={(item) => showToursGoing(item)}
                horizontal
            />
            <Text style={styles.description}>OR{'\n'}
                maybe check out some cool spots!
            </Text>
            <View style={styles.destinationHeadingContainer}>
                <Text style={styles.destinationHeading}>Top Destinations</Text>
                <Icon name={'ellipsis1'} size={20} color={'grey'} style={{ marginRight: 5 }} />
            </View>
            <FlatList
                style={{ flexGrow: 0 }}
                data={topPlaces}
                renderItem={(item) => showTopPlaces(item)}
                horizontal
            />
        </ScrollView>
    )
}

export default DiscoverPage

