import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'


export const AboutScreen = ({navigation}) => {

    navigation.setOptions({
        headerTitle: 'О приложении',
        headerTitleAlign: 'center',

        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item 
                    title='Toggle drawer' 
                    iconName='ios-menu' 
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerTintColor: '#fff',

    })

    return (
        <View style={styles.center}>
            <Text>Это приложение для личных заметок</Text>
            <Text>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
}



const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    version: {
        fontFamily: 'open-bold'
    }
})