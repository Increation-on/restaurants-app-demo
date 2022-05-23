import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { elevation } from '../common/styles';
import { withNavigation } from 'react-navigation'

const RestaurantItem = ({ restoraunt, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Restaurant", { id: restoraunt.id })}
        >
            <View style={[styles.elevation, styles.container]}>
                <Image style={styles.image} source={{ uri: restoraunt.image_url }} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{restoraunt.name}</Text>
                    <View style={styles.info}>
                        <Text style={styles.rating}>{restoraunt.rating}</Text>
                        <Text style={styles.price}>{restoraunt.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default withNavigation(RestaurantItem);

const styles = StyleSheet.create({
    elevation,
    container: {
        backgroundColor: "white",
        height: 100,
        alignSelf: "stretch",
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4
    },
    info: {
        flexDirection: "row",
    },
    rating: {
        marginRight: 10
    },
    price: {
        color: "gold"
    }
})