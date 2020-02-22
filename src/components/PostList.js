import React, {useEffect} from 'react'
import {View, FlatList, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native'
import {Post} from './Post'

export const PostList = ({data, onOpen}) => {
    return (
        <View style={styles.wrapper}>
            <FlatList 
                data={data} 
                keyExtractor={post => post.id.toString()} 
                renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})