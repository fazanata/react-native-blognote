import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'


export const CreateScreen = ({navigation}) => {

    navigation.setOptions({
        headerTitle: 'Создать пост',
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
            <Text>создаьб </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})