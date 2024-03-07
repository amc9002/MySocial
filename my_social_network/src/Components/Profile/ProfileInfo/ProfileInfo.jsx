import s from './ProfileInfo.module.css'
import coverPic from './../../../Assets/Images/cover_pic.jpg'

function ProfileInfo(props) {
  return (
    <div>
      <div>
        <img src={coverPic} className={s.coverPic} alt="Cover picture" />
      </div>
      <div className={s.descriptionBlock}>
        <div>ava + {props.name}</div>
        <div>{props.descr}</div>
      </div>
    </div>
  );
}

export default ProfileInfo;