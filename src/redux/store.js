import dialogReducer from "./dialog-reducer"
import profileReduser from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
 
    

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
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action) 
        this._callSubscriber(this._state)

    }, 
}



export default store