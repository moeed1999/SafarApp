import { Text, View, FlatList, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
import SearchField from '../../components/SearchField';

const DiscoverPage = () => {
    const [places] = useState(['Naran Kaghan', 'Azad Kashmir', 'Swat & Malam Jabba', 'Kalam', 'Skardu', 'Hunza & Naltar Valley',])
    const [toursGoing, setToursGoing] = useState([
        { img: require('../../assets/images/waterfall2.jpg'), name: 'Safar-Nama', ratings: '4.5', moto: 'More Travel, Less Worry', place: ['Azad Kashmir', 'Swat & Malam Jabba', 'Naran Kaghan'] },
        { img: require('../../assets/images/beach.jpg'), name: 'Pakistani-Tours', ratings: '4.7', moto: 'More Travel, Less Worry', place: ['Skardu', 'Azad Kashmir',] },
        { img: require('../../assets/images/waterfall.jpg'), name: 'Trekkers', ratings: '4.2', moto: 'More Travel, Less Worry', place: ['Naran Kaghan', 'Azad Kashmir',] },
        { img: require('../../assets/images/animatedBg4.jpg'), name: 'Northeners', ratings: '4.1', moto: 'More Travel, Less Worry', place: ['Kalam', 'Swat & Malam Jabba'] },
    ])
    const [filteredToursGoing] = useState(toursGoing)
    const [toursFilter, setToursFilter] = useState('')
    const [topPlaces] = useState([
        { img: require('../../assets/images/waterfall2.jpg'), name: 'Kel - Arang Kel', description: 'visit before it gets too crowded' },
        { img: require('../../assets/images/beach.jpg'), name: 'Sharan Forest', description: 'visit before it gets too crowded' },
        { img: require('../../assets/images/waterfall.jpg'), name: 'Gabbin Jabba', description: 'visit before it gets too crowded' },
        { img: require('../../assets/images/animatedBg4.jpg'), name: 'Lake Saif ul Mulook', description: 'visit before it gets too crowded' },
    ])
    const [selectedPlace, setSelectedPlace] = useState('')
    const [searchVal, setSearchVal] = useState('')

    const handlePlaces = (item, index) => {
        setSelectedPlace(index !== selectedPlace ? index : '')
        setToursFilter(index !== selectedPlace ? item : '')
        console.log(selectedPlace, '-->>')
    }
    const showPlaces = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={[styles.placesContainer, index === selectedPlace && styles.selectedPlaceContainer]}
                onPress={() => handlePlaces(item, index)}
            >
                <Text
                    style={[styles.places, index === selectedPlace && styles.selectedPlace]}
                >
                    {item}
                </Text>
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

    const showEmptyToursList = () => {
        return (
            <View style={{ height: 315, justifyContent: 'center', alignItems: 'center' }}
            >
                <Image
                    source={require('../../assets/images/empty.jpg')}
                    style={{ height: 200, width: 150, alignSelf: 'center', borderWidth: 1 }}
                    resizeMode='cover'
                />
                <Text style={{ color: 'black', fontSize: 14 }}>
                    No matching search...
                </Text>
            </View>
        )
    }

    useEffect(() => {
        if (searchVal || !toursFilter) {
            setToursGoing(filteredToursGoing.filter((elem) => {
                return elem.name.toLowerCase().includes(searchVal.toLowerCase())
            }))
        }
        if (toursFilter) {
            setToursGoing(filteredToursGoing.filter((elem) => {
                return elem.place.includes(toursFilter)
            }))
        }
        if (searchVal && toursFilter) {
            setToursGoing(filteredToursGoing.filter((elem) => {
                return elem.name.toLowerCase().includes(searchVal.toLowerCase()) && elem.place.includes(toursFilter)
            }))
        }
    }, [searchVal, toursFilter])

    return (
        <ScrollView style={styles.mainContainer}
            // keyboardShouldPersistTaps used here to persist search bar text input
            keyboardShouldPersistTaps={"always"}
        >
            <View style={styles.upperBar}>
                <Text style={styles.heading}>Discover</Text>
                <View style={styles.upperBarIconsContainer}>
                    <Icon name={'message1'} size={20} color={'black'} />
                </View>
            </View>
            {/* search bar */}
            <View style={{ marginTop: 12, width: '90%', alignSelf: 'center' }}>
                <SearchField
                    placeholder='search tour agencies'
                    placeholderTextColor='grey'
                    value={searchVal}
                    onChangeText={(e) => setSearchVal(e)}
                    onCancel={(e) => {
                        setSearchVal('')
                        setToursGoing(filteredToursGoing)
                    }}
                />
            </View>
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
                ListEmptyComponent={showEmptyToursList}
                contentContainerStyle={[
                    { flexGrow: 1 },
                    { justifyContent: 'center' }
                ]}
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

