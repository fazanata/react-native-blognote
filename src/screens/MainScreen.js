import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DATA} from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList';

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
          navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    }
    navigation.setOptions({
        headerTitle: 'Мой блог',
        headerTitleAlign: 'center',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item 
                    title='Take photo' 
                    iconName='ios-camera' 
                    onPress={() => navigation.navigate('Create')}
                />
            </HeaderButtons>
        ),
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
        <PostList data={DATA} onOpen={openPostHandler} />
    )
}

