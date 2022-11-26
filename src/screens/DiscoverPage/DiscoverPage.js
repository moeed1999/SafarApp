import { Text, View, FlatList, ImageBackground, Image, ScrollView } from 'react-native'
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


    const showPlaces = ({ item, index }) => {
        return (
            <View style={styles.placesContainer}>
                <Text
                    style={styles.places}
                >{item}</Text>
                {index === 0 && <Text
                    style={[styles.places, { marginTop: -15, fontWeight: 'bold', alignSelf: 'center', fontSize: 20 }]}
                >{'.'}</Text>}
            </View>
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
                    <Icon name={'search1'} size={20} color={'grey'} style={{ marginRight: 5 }} />
                    <Icon name={'bells'} size={20} color={'grey'} style={{ marginRight: 5 }} />
                    <Icon name={'user'} size={20} color={'grey'} style={{ marginRight: 5 }} />
                </View>
            </View>
            <Text style={styles.description}>We've got a lot of new deals here{'\n'}
                check them out!
            </Text>
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

