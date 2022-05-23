import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Grab your</Text>
            <Text style={styles.boldHeader}>delicios meal!</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    lightHeader: {
        fontSize: 35,
    },
    boldHeader: {
        fontSize: 40,
        fontWeight: "bold"
    },
    container: {
        marginTop: 60,
        marginHorizontal: 25,
    }
})

export default Header;