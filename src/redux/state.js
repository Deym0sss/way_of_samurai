let rerenderEntireTree = () => {
    console.log(state)
}
let state = {

    profilePage: {
        posts: [

            { message: 'Hello there', amountOfLikes: 'Likes 12' },
            { message: 'Escalator', amountOfLikes: 'Likes 28' },
            { message: 'Mayonez', amountOfLikes: 'Likes 20' },
            { message: 'First post', amountOfLikes: 'Likes 100' }],

        newPostText:'Example'

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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        amountOfLikes: 'Likes '+Math.round(Math.random()*101)
    }
   
    state.profilePage.posts.push(newPost)
   
    rerenderEntireTree(state);
    
}

export const updateNewPostText = (newText) => {
  
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}










export const subscribe = (observer) => {

    rerenderEntireTree = (observer)

}

rerenderEntireTree(state)

export default state