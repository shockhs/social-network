import React from 'react';
import '../../css/Profile/MyPosts/MyPosts.css';
import Post from './Post/Post';

const MyPosts = React.memo(({ postsData, likePost, authId, dislikePost,deletePost }) => {
    let mainPostsData = postsData.map((post) => {
        return <Post key={post.id} authId={authId} blockedId={post.blockedId} postId={post.id} likePost={likePost} dislikePost={dislikePost} deletePost={deletePost} likes_count={post.likesCount} message={post.message} />
    });
    return (
        <div className="section-profile-inner-posts-elements">
            {mainPostsData}
        </div>
    );
})

export default MyPosts;