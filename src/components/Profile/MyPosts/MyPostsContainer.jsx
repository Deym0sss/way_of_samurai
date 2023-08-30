import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => (
    <StoreContext.Consumer>
        {(store) => {
            const addPost = () => {
                store.dispatch(addPostActionCreator());
            };

            const onPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            };

            return (
                <MyPosts 
                    updateNewPostText={onPostChange} 
                    addPost={addPost} 
                    posts={store.getState().profilePage.posts} 
                    newPostText={store.getState().profilePage.newPostText} 
                />
            );
        }}
    </StoreContext.Consumer>
);

export default MyPostsContainer;
