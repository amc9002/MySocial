let initialState = {
        navData: [
            { id: 1, url: '/profile', title: 'Profile', isActive: false },
            { id: 2, url: '/dialogs', title: 'Messages', isActive: true },
            { id: 3, url: '/news', title: 'News', isActive: false },
            { id: 4, url: '/music', title: 'Music', isActive: false },
            { id: 5, url: '/friends', title: 'Friends', isActive: false },
            { id: 6, url: '/users', title: 'Users', isActive: false },
            { id: 7, url: '/settings', title: 'Settings', isActive: false },
        ],
    }

function sidebarReducer(state = initialState, action) {

    return state;
}

export default sidebarReducer;