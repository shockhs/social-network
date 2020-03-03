const SEND_MESSAGE = "dialogsReducer/SEND-MESSAGE";

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 1, message: action.text }]
            }
        }
        default: return state;
    }
}

export let addMessageActionCreater = (text) => ({ type: SEND_MESSAGE, text });

export default dialogsReducer;