import React from 'react';
import '../../css/Profile/MyPosts/MyPosts.css';
import Post from './Post/Post';

const MyPosts = React.memo(({postsData}) => {
    let mainPostsData = postsData.map((post) => {
        return <Post likes_count={post.likesCount} message={post.message} />
    });
    return (
        <div className="section-profile-inner-posts-elements">
            {mainPostsData}
        </div>
    );
})

export default MyPosts;