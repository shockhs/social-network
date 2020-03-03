import React from 'react';
import '../../../css/Profile/MyPosts/Post/Post.css';
/*eslint-disable */

//suppress all warnings between comments
const Post = ({message,likes_count}) => {
    return (
        <div className="section-profile-inner-posts-elements-item">
            <div className="row">
                <div className="col-sm-2">
                    <img className="img-responsive img-circle section-profile-inner-posts-elements-item-avatar-image" src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt="" />
                </div>
                <div className="col-sm-7">
                    <div className="section-profile-inner-posts-elements-item-message">
                        <p>{message}</p>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="section-profile-inner-posts-elements-item-social">
                        <div className="section-profile-inner-posts-elements-item-social-counter">
                            <span>{likes_count}</span>
                        </div>
                        <div className="section-profile-inner-posts-elements-item-social-buttons">
                            <a href="#">like</a>
                            <a href="#">dislike</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
/*eslint-enable */
export default Post;