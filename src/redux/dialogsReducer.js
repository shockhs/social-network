import { addNewDialog } from "../api/API-dialogs";

const SEND_MESSAGE = "dialogsReducer/SEND-MESSAGE";
const SET_MEMBERS_DATA = "dialogsReducer/SET-MEMBERS-DATA";

let initialState = {
    count: 0
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 1, message: action.text }]
            }
        }
        case SET_MEMBERS_DATA: {
            return {
                ...state, membersData: action.members
            }
        }
        default: return state;
    }
}

export let addMessageActionCreater = (text) => ({ type: SEND_MESSAGE, text });
export let setMembersData = (members) => ({ type: SET_MEMBERS_DATA, members });

export let addNewDialogsMember = (id) => {
    return async (dispatch) => {
        let response = await addNewDialog(id);
        if (response.status === 200) {
            //some code
        }
    }
}

export default dialogsReducer;

