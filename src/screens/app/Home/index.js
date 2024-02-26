import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles"
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";


const Home = () => {
    const renderCategoryItem = ({item}) => {
        console.log("item => ", item)
        return (
            <CategoryBox title={item?.title} image={item?.image}/>
        )
    }
    const renderProductItem = ({item}) => {
        return (
            <ProductHomeItem {...item}/>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find all you need"/>
                <FlatList showsHorizontalScrollIndicator={false} horizontal style={styles.list} data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)} />
                <FlatList data={products} renderItem={renderCategoryItem} keyExtractor={(item) => String(item.id)}/>
            </View>
        </SafeAreaView>
    )
}

export default Home