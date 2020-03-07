import React from 'react';
import '../../../css/Profile/MyPosts/Post/Post.css';
import avatar from '../../../../img/default-avatar.png';
import { Link } from 'react-router-dom';


const Post = ({message,likes_count}) => {
    return (
        <div className="section-profile-inner-posts-elements-item">
            <div className="row">
                <div className="col-sm-2">
                    <img className="img-responsive img-circle section-profile-inner-posts-elements-item-avatar-image" src={avatar} alt="" />
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
                            <Link href="#">like</Link>
                            <Link href="#">dislike</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;