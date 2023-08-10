const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


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
            ]
        },





        sidebar: {

        }
    },



    getState() {
        return (this._state)
    },
    subscribe(observer) {

        this._callSubscriber = (observer)

    },



  

    
    dispatch(action){
        if (action.type === 'ADD-POST'){

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                amountOfLikes: 'Likes ' + Math.round(Math.random() * 101)
            }
    
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText=''
    
            this._callSubscriber(this._state);

        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
    
        }
    },
   
   
   

    
}

export let addPostActionCreator = () => {
    return {

        type: ADD_POST

    }
}

export let updateNewPostTextActionCreator =(text)=>{
    return{
    
        type: UPDATE_NEW_POST_TEXT,
        newText:text

    }
}

export default store