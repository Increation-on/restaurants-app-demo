import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Search from '../components/Search';
import Restaurants from '../components/Restaurants';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';


const HomeScreen = () => {

    const [term, setTerm] = useState("Burger");

    return (
        <View style={styles.container}>
            <Header />
            <Search setTerm={setTerm} />
            <Categories setTerm={setTerm} term={term} />
            <Restaurants term={term} />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(253, 253, 253)",
        flex: 1
    }
})

export default HomeScreen;