import dialogReducer from "./dialog-reducer"
import profileReduser from "./profile-reducer"

 
    

let store = {

    _callSubscriber() { },

    _state: {

        profilePage: {
            posts: [

                { message: 'Hello there', amountOfLikes: 'Likes 12' },
                { message: 'Escalator', amountOfLikes: 'Likes 28' },
                { message: 'Mayonez', amountOfLikes: 'Likes 20' },
                { message: 'First post', amountOfLikes: 'Likes 100' }],

            newPostText: 'Example'

        },
        
        dialogPage: {
            dialogs: [
                { id: '1', name: 'Kyrill' },
                { id: '2', name: 'Pasha' },
                { id: '3', name: 'Sasha' },
                { id: '4', name: 'Vanya' }
            ],
            messages: [
                { text: 'Hi' },
                { text: 'Darova' },
                { text: 'Bonjorno' }
            ],
            newMessageBody:''
        },

        sidebar: {}},

    getState() {return (this._state)},

    subscribe(observer) {this._callSubscriber = (observer)},
    
    dispatch(action){
        profileReduser(this_.state.profilePage, action)
        dialogReducer(this._state.dialogPage, action)
        sidebarReducer(this._state.sidebar, action) 
    }, 
}



export default store