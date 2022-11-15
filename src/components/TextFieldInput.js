import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextFieldInput = ({
    iconName,
    iconSize,
    iconColor,
    placeholderText,
    placeholderTextColor,
    keyboardType,
    val,
    handleChange,
    maxLength,
    isPasswordField,
    rightIcon,
    rightIconColor,
    rightIconSize,
    secureTextEntry,
    handleRightIcon
}) => {
    return (
        <View style={styles.input}>
            <Icon name={iconName} size={iconSize} color={iconColor} style={{ marginRight: 5 }} />
            <TextInput
                style={styles.inputText}
                placeholder={placeholderText}
                placeholderTextColor={placeholderTextColor}
                keyboardType={keyboardType}
                value={val}
                onChangeText={handleChange}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
            />
            {isPasswordField &&
                <TouchableOpacity>
                    <Icon
                        name={rightIcon}
                        size={rightIconSize}
                        color={rightIconColor}
                        style={{ marginRight: 5 }}
                        onPress={handleRightIcon}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

export default TextFieldInput

const styles = StyleSheet.create({
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 25,
        color: 'black'
    },
    inputText: {
        width: '80%',
        borderBottomWidth: 1,
        color: 'black'
    },
})