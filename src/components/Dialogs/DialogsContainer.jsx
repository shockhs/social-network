import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { getDialogsList, getMembersList, getMessages } from '../../redux/Selectors/dialogsSelector';

let mapStateToProps = (state) => {
    return {
        dialogsData: getDialogsList(state),
        membersData: getMembersList(state),
        messagesData: getMessages(state)
    }
}


const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;