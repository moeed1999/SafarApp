import { StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const SearchField = ({
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    onCancel
}) => {
    return (
        <KeyboardAvoidingView
            style={styles.mainContainer}
        >
            <TouchableOpacity>
                <Icon name={'search1'} size={20} color={'grey'}
                    style={{ marginLeft: 5 }}
                />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity
                onPress={onCancel}
            >
                <Icon name={'close'} size={20} color={'grey'}
                    style={{
                        marginRight: 5,
                        opacity: value ? 1 : 0
                    }} />
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default SearchField

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: 'grey',
        height: 40
    },
    input: {
        width: '80%',
        color: 'black',
        fontSize: 15,
        marginLeft: 5
    }
})