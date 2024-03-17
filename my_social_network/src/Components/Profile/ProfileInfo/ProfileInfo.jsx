import s from './ProfileInfo.module.css'
import coverPic from '../../../Assets/Images/cover_pic.jpg'
import Preloader from '../../Preloader/preload';
import yesPic from '../../../Assets/Images/yesPic.jpeg';
import noPic from '../../../Assets/Images/noPic.jpeg';
import ProfileStatus from './ProfileStatus'

const Contacts = (props) => {
  return (
    <div className={s.contacts}>
      <div>facebook: {props.facebook}</div>
      <div>website: {props.website}</div>
      <div>vk: {props.vk}</div>
      <div>twitter: {props.twitter}</div>
      <div>instagram: {props.instagram}</div>
      <div>youtube: {props.youtube}</div>
      <div>github: {props.github}</div>
      <div>mainLink: {props.mainLink}</div>
    </div>
  )
}

const LookingJob = (props) => {
  return (
    <div className={s.lookingJob}>
      <span>Looking for a job:</span>
      <span>{props.profile.lookingForAJob
        ? <img src={yesPic} alt='yes' />
        : <img src={noPic} alt='no' />}
      </span>
      <div>{props.profile.lookingForAJobDescription}</div>
    </div>
  )
}

const ProfileDescription = (props) => {
  return (
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} alt='Large photo' />
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>
      <Contacts contacts={props.profile.contacts} />
      <LookingJob profile={props.profile} />
    </div>
  )
}


function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src={coverPic} className={s.coverPic} alt="Cover picture" />
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <ProfileDescription profile={props.profile} />
    </div>
  );
}

export default ProfileInfo;
