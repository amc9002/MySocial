import s from './ProfileInfo.module.css'
import coverPic from '../../../Assets/Images/cover_pic.jpg'
import Preloader from '../../Preloader/preload';
import yesPic from '../../../Assets/Images/yesPic.jpeg';
import noPic from '../../../Assets/Images/noPic.jpeg';

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src={coverPic} className={s.coverPic} alt="Cover picture" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt='Large photo' />
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
        <div className={s.contacts}>
          <div>facebook: {props.profile.contacts.facebook}</div>
          <div>website: {props.profile.contacts.website}</div>
          <div>vk: {props.profile.contacts.vk}</div>
          <div>twitter: {props.profile.contacts.twitter}</div>
          <div>instagram: {props.profile.contacts.instagram}</div>
          <div>youtube: {props.profile.contacts.youtube}</div>
          <div>github: {props.profile.contacts.github}</div>
          <div>mainLink: {props.profile.contacts.mainLink}</div>
        </div>
        <div className={s.lookingJob}>
          <span>Looking for a job:</span>
          <span>{props.profile.lookingForAJob
            ? <img src={yesPic} alt='yes' />
            : <img src={noPic} alt='no' />}
          </span>
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
