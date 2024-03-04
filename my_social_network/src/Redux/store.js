let store = {
    _state: {
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
                { id: 1, post: "Hello!", likesCount: 10 },
                { id: 2, post: "Post 1", likesCount: 20 },
                { id: 3, post: "Post 2", likesCount: 30 },
                { id: 4, post: "Post 3", likesCount: 40 }
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
            ],
            newMessageText: ''
        },


    },
    _callSubscriber() { },

    getState() { return this._state; },
    subscribe(observer) { // observer pattern
        this._callSubscriber = observer; // rerenderEntireTree
    },

    addPost() {
        let nextId = this._state.dialogsPage.dialogsData[this._state.dialogsPage.dialogsData.length - 1].id + 1;
        let newPost = {
            id: nextId,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let nextId = this._state.dialogsPage.messagesData[this._state.dialogsPage.messagesData.length - 1].id + 1;
        let newMessage = {
            id: nextId,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    dispatch() {

    }
}

export default store;
window.store = store;