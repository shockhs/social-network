import { addPostActionCreater } from '../../../../redux/profileReducer';
import InputForm from './InputForm';
import { connect } from 'react-redux';
import { getPosts } from '../../../../redux/Selectors/profileSelector';


const mapStateToProps = (state) => {
    return ({
        postsData: getPosts(state)
    })
}

const InputFormContainer = connect(mapStateToProps, { addPostActionCreater })(InputForm);

export default InputFormContainer;