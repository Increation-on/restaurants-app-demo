import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import { elevation } from './../common/styles';
import { Alert } from 'react-native';

const CategoryItem = ({ imgUrl, name, index, active, handlePress }) => {
    return (
        <TouchableOpacity onPress={()=>handlePress()}>
            <View
                style={[
                    styles.container,
                    styles.elevation,
                    index === 0 ? { marginLeft: 18 } : { marginLeft: 15 },
                    active
                        ? { backgroundColor: "rgb(241, 186, 87)" }
                        : { backgroundColor: "white" }
                ]}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={imgUrl}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.title}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    elevation,
    image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5
    },
    title: {
        fontWeight: "bold"
    }
})