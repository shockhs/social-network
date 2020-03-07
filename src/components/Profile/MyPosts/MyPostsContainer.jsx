import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { getPosts } from '../../../redux/Selectors/profileSelector';
import { likePost, dislikePost, deletePost } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
    return {
        postsData: getPosts(state),
        authId: state.authPage.isAuth
    }
}

const MyPostsContainer = connect(mapStateToProps, { likePost, dislikePost, deletePost})(MyPosts);

export default MyPostsContainer;