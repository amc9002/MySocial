import { rerenderEntireTree } from "../render";

export let state = {
    sidebar: {
        navData: [
            { id: 1, url: '/profile', title: 'Profile', isActive: false },
            { id: 2, url: '/dialogs', title: 'Messages', isActive: true },
            { id: 3, url: '/news', title: 'News', isActive: false },
            { id: 4, url: '/music', title: 'Music', isActive: false },
            { id: 5, url: '/friends', title: 'Friends', isActive: false },
            { id: 6, url: '/users', title: 'Users', isActive: false },
            { id: 7, url: '/settings', title: 'Settings', isActive: false },
        ],
    },

    profilePage: {
        postsData: [
            { id: 1, text: "Hello!", likesCount: 10 },
            { id: 2, text: "Post 1", likesCount: 20 },
            { id: 3, text: "Post 2", likesCount: 30 },
            { id: 4, text: "Post 3", likesCount: 40 }
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogsData: [
            {
                id: 1,
                name: 'Andris',
                ava: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
                isActive: false,
            },
            {
                id: 2,
                name: 'Mscislau',
                ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU",
                isActive: true,
            },
            {
                id: 3,
                name: 'Anela',
                ava: "https://alitech.com.ng/wp-content/uploads/2020/06/IMG_20200603_114713-e1592183490881.jpg",
                isActive: false,
            },
            {
                id: 4,
                name: 'Kandrat',
                ava: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png",
                isActive: false,
            },
            {
                id: 5,
                name: 'Jakub',
                ava: "https://im.indiatimes.in/content/2022/Feb/AMP-44_61fb8b8840826.jpg?w=820&h=540&cc=1",
                isActive: false,
            }
        ],
        messagesData: [
            { id: 1, message: 'message 1' },
            { id: 2, message: "message 2" },
            { id: 3, message: 'message 3' }
        ]
    }
}

export function addPost(postMessage) {
    let nextId = state.dialogsPage.dialogsData[state.dialogsPage.dialogsData.length - 1].id + 1;
    let newPost = {
        id: nextId,
        text: postMessage,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state, addPost, updateNewPostText);
}
export function updateNewPostText(newText) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state, addPost, updateNewPostText);
}
