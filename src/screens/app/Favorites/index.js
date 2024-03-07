import React, {navigation} from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles"
import { products } from "../../../data/products";
import Header from "../../../components/Header";
import FavoriteItem from "../../../components/FavoriteItem";
import { useNavigation } from "@react-navigation/native";


const Favorites = () => {
    const navigation = useNavigation()
    const renderItem = ({item}) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', {product: item})
        }
        return (
            <FavoriteItem {...item}/>
            <FavoriteItem onPress={onProductPress} {...item}/>
        )
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Header title="Favorites" />
            <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item.id)} />
        </View>
        </SafeAreaView>
    )
}
export default Favorites;