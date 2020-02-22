import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DATA } from '../data'
import { THEME } from '../theme'


export const PostScreen = ({navigation, route}) => {
    const postId = route.params.postId
    const post = DATA.find(p => p.id === postId)


    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [
              {
                text: 'Отменить',
                style: 'cancel',
              },
              {text: 'Удалить', style: 'destructive', onPress: () => {}},
            ],
            {cancelable: false},
          );
    }
    const booked = route.params.booked
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    navigation.setOptions({
        headerTitle: 'Мой пост ' + new Date(route.params.date).toLocaleDateString(),
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerRight: ({ navigation, route}) => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item 
                    title='make star' 
                    iconName={iconName} 
                    onPress={() => console.log('Press star')}
                />
            </HeaderButtons>
        ),

    })

    return (
        <ScrollView> 
           <Image source={{ uri: post.img}} style={styles.image} />
           <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
           </View>
           <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
})