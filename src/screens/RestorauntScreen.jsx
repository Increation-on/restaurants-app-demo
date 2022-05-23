import { StyleSheet, Text, View, ActivityIndicator, Image, Dimensions } from 'react-native';
import { useRestaurant } from './../hooks/useRestaurant';
import { useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const RestaurantScreen = ({ navigation }) => {
    const [{ data, loading, error }, searchRestaurant] = useRestaurant();
    useEffect(() => {
        searchRestaurant(id);
        // console.log(data.photos)
    }, [])
    const id = navigation.getParam("id");
    const dimensions = Dimensions.get("window");
    const imageWidth = dimensions.width;
    const imageHight = Math.round((dimensions.width * 9) / 16);

    if (loading) {
        return <ActivityIndicator size="large" marginVertical={30} />
    }
    if (error) {
        return (
            <View >
                <Text>{error}</Text>
            </View>
        )
    }

    return (
        <View>
            {data && (
                 <FlatList
                     data={data.photos}
                     keyExtractor={(photo) => photo}
                     renderItem={({ item }) =>  <Image source={{ uri: item }}  style={{ height: imageHight, width: imageWidth }} />}
                 />
            )}
           
        </View>
    )
}

export default RestaurantScreen

const styles = StyleSheet.create({})