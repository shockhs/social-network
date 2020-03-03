import { addMessageActionCreater } from '../../../redux/dialogsReducer';
import SendMessage from './SendMessage';
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.messagesData
    }
}
const SendMessageContainer = connect(mapStateToProps, { addMessageActionCreater})(SendMessage);

export default SendMessageContainer;