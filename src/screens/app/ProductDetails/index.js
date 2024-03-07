import React from "react";
import {View, ScrollView, Text, Image, Pressable, Linking} from "react-native";
import { styles } from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";
import Button from "../../../components/Button";
import ImageCarousel from "../../../components/ImageCarousel";

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {}
    console.log('product => ', product)

    const onBackPress = () => {
        navigation.goBack()
    }

    const onContact = () => {
        // phone call
        let phone = '1234567890'
        Linking.openURL(`tel:${phone}`)

        // email
        let email = 'email address'
        Linking.openURL(`mailto:${email}`)
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images}/>
                ) : (
                    <Image style={styles.image} source={{uri: product?.image}}/>
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require("../../../assets/back.png")} />
                </Pressable>
            </ScrollView>
        <View style={styles.footer}>
            <Pressable>
                <Image style={styles.bookmarkIcon} source={require("../../../assets/tabs/bookmark.png")} />
            </Pressable>
            <Button onPress={onContact} style={styles.container} title="Contact Seller" />
        </View>
        </SafeAreaView>
    )
}
export default ProductDetails;