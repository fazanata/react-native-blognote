import React from 'react'
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DATA} from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const BookedScreen = ({navigation}) => {
    const openPostHandler = post => {
          navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    }
    navigation.setOptions({
        headerTitle: 'Избранное',
        headerTitleAlign: 'center',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item 
                    title='Toggle drawer' 
                    iconName='ios-menu' 
                    onPress={() => console.log('Press menu')}
                />
            </HeaderButtons>
        ),
        headerTintColor: '#fff',

    })

    const data = DATA.filter(post => post.booked)
    return (
        <PostList data={data} onOpen={openPostHandler} />
    )
}

