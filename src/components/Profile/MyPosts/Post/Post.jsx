import React from 'react';
import '../../../css/Profile/MyPosts/Post/Post.css';
import avatar from '../../../../img/default-avatar.png';


const Post = ({ message, likes_count, authId, blockedId, postId, dislikePost, likePost, deletePost }) => {
    let handleLikeClick = () => {
        if (!blockedId.includes(authId)) {
            likePost(postId, authId);
        } else {
            dislikePost(postId, authId);
        }
    }
    let handleDeleteClick = () => {
        deletePost(postId);
    }
    return (
        <div className="section-profile-inner-posts-elements-item">
            <div className="row">
                <div className="col-sm-2">
                    <img className="img-responsive img-circle section-profile-inner-posts-elements-item-avatar-image" src={avatar} alt="" />
                </div>
                <div className="col-sm-6">
                    <div className="section-profile-inner-posts-elements-item-message">
                        <p>{message}</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="section-profile-inner-posts-elements-item-social">
                        <div className="section-profile-inner-posts-elements-item-social-counter">
                            <span>{likes_count}</span>
                        </div>
                        <div className="section-profile-inner-posts-elements-item-social-buttons">
                            {!blockedId.includes(authId)
                            ? <button onClick={handleLikeClick} className="section-profile-inner-posts-form-functions-button like">Like</button>
                            : <button onClick={handleLikeClick} className="section-profile-inner-posts-form-functions-button dislike">Dislike</button>}
                            <button onClick={handleDeleteClick} className="section-profile-inner-posts-form-functions-button delete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;