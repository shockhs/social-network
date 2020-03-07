import React from 'react';
import '../../css/Profile/ProfileInfo/ProfileInfo.css';
import Preloader from '../../commons/Preloader/Preloader';
import facebook from '../../../img/icons/facebook.svg';
import youtube from '../../../img/icons/youtube.svg';
import twitter from '../../../img/icons/twitter.svg';
import vk from '../../../img/icons/vk.svg';
import instagram from '../../../img/icons/instagram.svg';
import website from '../../../img/icons/website.svg';
import mainlink from '../../../img/icons/mainlink.svg';
import github from '../../../img/icons/github.svg';
import StatusContainer from './Status/StatusContainer';
import AvatarContainer from './Avatar/AvatarContainer';


const ProfileInfo = ({ profile, isLoading, authStatus, addNewDialogsMember }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div className="section-profile-inner-about">
            {(isLoading) ? <div className="col-sm-2 col-sm-offset-5"><Preloader isLoading={isLoading} /></div> :
                <div className="row">
                    <div className="col-sm-4 section-profile-inner-about-avatar">
                        <AvatarContainer addNewDialogsMember={addNewDialogsMember} id={profile.userId} authStatus={authStatus} photo={profile.photos.large} />
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="section-profile-inner-about-description col-sm-12">
                                <div className="section-profile-inner-about-description-main col-sm-12">
                                    <div className="section-profile-inner-about-description-main-name">
                                        <h1>{profile.fullName}</h1>
                                    </div>
                                    <div className="section-profile-inner-about-description-main-status">
                                        <StatusContainer authStatus={authStatus} />
                                    </div>
                                </div>
                                <div className="section-profile-inner-about-description-about col-sm-12">
                                    <div className="liprofile">Обо мне: </div>
                                    {profile.aboutMe ? <h5>{profile.aboutMe}</h5> : <h5>Нет информации</h5>}
                                </div>
                                <div className="section-profile-inner-about-description-job col-sm-12">
                                    <div className="section-profile-inner-about-description-job-looking">
                                        <div className="liprofile">Ищу работу: </div>
                                        {profile.lookingForAJob ? <h5>Да</h5> : <h5>Нет</h5>}
                                    </div>
                                    {profile.lookingForAJob ? <div className="section-profile-inner-about-description-job-looking">
                                        <div className="liprofile">Какую работу ищу: </div>
                                        <h5>{profile.lookingForAJobDescription}</h5> </div> : null}
                                </div>
                                <div className="col-sm-12 section-profile-inner-about-description-contacts">
                                    {(profile.contacts.website === null) ? <img className="img-responsive" src={website} alt="" /> :
                                        <div><a href={"http://" + profile.contacts.website}><img className="img-responsive fill-svg" src={website} alt="" /></a></div>}
                                    {(profile.contacts.facebook === null) ? <img className="img-responsive" src={facebook} alt="" /> :
                                        <div><a href={"http://" + profile.contacts.facebook}><img className="img-responsive fill-svg" src={facebook} alt="" /></a></div>}
                                    {(profile.contacts.twitter === null) ? <img className="img-responsive" src={twitter} alt="" /> :
                                        <div><a href={"http://" + profile.contacts.twitter}><img className="img-responsive fill-svg" src={twitter} alt="" /></a></div>}
                                    {(profile.contacts.youtube === null) ? <img className="img-responsive" src={youtube} alt="" /> :
                                        <div><a href={"http://" + profile.contacts.youtube}><img className="img-responsive fill-svg" src={youtube} alt="" /></a></div>}
                                    {(profile.contacts.github === null) ? <img className="img-responsive" src={github} alt="" /> :
                                        <div><a href={"http://" + profile.contacts.github}><img className="img-responsive fill-svg" src={github} alt="" /></a></div>}
                                    {(profile.contacts.instagram === null) ? <img className="img-responsive" src={instagram} alt="" /> :
                                        <div><a href={"http://" + profile.contacts.instagram}><img className="img-responsive fill-svg" src={instagram} alt="" /></a></div>}
                                    {(profile.contacts.vk === null) ? <img className="img-responsive" src={vk} alt="" /> :
                                        <div><a href={"http://" + profile.contacts.vk}><img className="img-responsive fill-svg" src={vk} alt="" /></a></div>}
                                    {(profile.contacts.mainLink === null) ? <img className="img-responsive" src={mainlink} alt="" /> :
                                        <div><a href={"http://" + profile.contacts.mainlink}><img className="img-responsive fill-svg" src={mainlink} alt="" /></a></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}


export default ProfileInfo;