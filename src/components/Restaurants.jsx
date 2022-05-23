import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { useRestaurants } from '../hooks/useRestaraunts';
import { useEffect } from 'react';
import RestaurantItem from './RestaurantItem';

const Restaurants = ({ term }) => {

    const [{ data, loading, error }, searchRestaurants] = useRestaurants();

    useEffect(() => {
        searchRestaurants(term)
    }, [term])

    if (loading) {
        return <ActivityIndicator size="large" marginVertical={30} />
    }
    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{error}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Restoraunts</Text>
            <FlatList
                data={data}
                keyExtractor={(restoraunt)=>restoraunt.id}
                renderItem={({item})=> <RestaurantItem restoraunt={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Restaurants;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
    }
});
