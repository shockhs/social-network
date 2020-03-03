import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { getPosts } from '../../../redux/Selectors/profileSelector';

let mapStateToProps = (state) => {
    return {
        postsData: getPosts(state)
    }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;