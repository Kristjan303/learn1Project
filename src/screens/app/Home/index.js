import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles"
import Header from "../../../components/Header";
import { categories } from "../../../data/categories";
import CategoryBox from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import ProductHomeItem from "../../../components/ProductHomeItem";


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedProducts, setSelectedProducts] = useState(products)

    useEffect(() => {
        if(selectedCategory){
        const updateSelectedProducts = products.filter((product) => product?.category === selectedCategory)
        setSelectedProducts(updateSelectedProducts)
    } else {
        setSelectedProducts(products)
    }
    }, [selectedCategory])

    const renderCategoryItem = ({item}) => {
        console.log("item => ", item)
        return (
            <CategoryBox title={item?.title} image={item?.image}
            onPress={() => setSelectedCategory(item?.id)}
            isSelected={item.id === selectedCategory}
            />
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
                <FlatList numColumns={2} data={selectedProducts} renderšItem={renderProductItem} keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height: 250}}/>}/>
            </View>
        </SafeAreaView>
    )
}

export default Home