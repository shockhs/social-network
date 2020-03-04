import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        messagesPage: {
            messagesData: [
                { id: 1, message: "Sergei" },
                { id: 1, message: "Sergei" },
                { id: 1, message: "Sergei" },
                { id: 1, message: "Sergei" },
                { id: 1, message: "Sergei" },
                { id: 1, message: "Sergei" },
                { id: 2, message: "Andrei" },
                { id: 3, message: "Dima" },
                { id: 3, message: "Dima" },
                { id: 3, message: "Dima" },
                { id: 3, message: "Dima" },
                { id: 3, message: "Dima" },
                { id: 4, message: "Kolya" },
                { id: 5, message: "Sasha" },
                { id: 6, message: "Andrei" },
                { id: 7, message: "Nastya" },
                { id: 8, message: "Lena" }
            ],
            dialogsData: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
                { id: 7 },
                { id: 8 },
            ],
            membersData: [
                { id: 1, name: 'Sergei' },
                { id: 2, name: 'Andrei' },
                { id: 3, name: 'Dima' },
                { id: 4, name: 'Kolya' },
                { id: 5, name: 'Sasha' },
                { id: 6, name: 'Andrei' },
                { id: 7, name: 'Nastya' },
                { id: 8, name: 'Lena' }
            ],
            newMessageText: ""
        },
        profilePage: {
            postsData: [
                { id: 1, likesCount: "232", message: "Тестовое сообщение 1" },
                { id: 2, likesCount: "15", message: "Тестовое сообщение 2" },
                { id: 3, likesCount: "24", message: "Тестовое сообщение 3" },
                { id: 4, likesCount: "55", message: "Тестовое сообщение 4" },
                { id: 5, likesCount: "125", message: "Тестовое сообщение 5" }
            ],
            newPostText: ""
        }
    },
    _callSubscriber() {
        return 0;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;
