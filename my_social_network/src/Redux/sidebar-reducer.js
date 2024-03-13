const PAGE_IS_ACTIVE = 'PAGE_IS_ACTIVE';

let initialState = {
    navData: [
        { id: 1, url: '/profile', title: 'Profile', isActive: false },
        { id: 2, url: '/dialogs', title: 'Messages', isActive: false },
        { id: 3, url: '/news', title: 'News', isActive: false },
        { id: 4, url: '/music', title: 'Music', isActive: false },
        { id: 5, url: '/friends', title: 'Friends', isActive: false },
        { id: 6, url: '/users', title: 'Users', isActive: false },
        { id: 7, url: '/settings', title: 'Settings', isActive: false },
    ],
}

function sidebarReducer(state = initialState, action) {
    switch (action.type) {
        case PAGE_IS_ACTIVE: {
            let stateCopy = { ...state, navData: [...state.navData]};
            stateCopy.navData.map(n => { n.isActive = n.id === action.id ? true : false });
            return stateCopy;
        }
        default: return state;
    }
}

export const pageIsActive = (pageId) => ({type: PAGE_IS_ACTIVE, id: pageId});

export default sidebarReducer;