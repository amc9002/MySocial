import s from './ProfileInfo.module.css'

function ProfileInfo(props) {
  return (
    <div>
      <div>
        <img src="https://i.pinimg.com/564x/1c/56/74/1c5674df8896d8c173d8aaf59f5aeecb.jpg" className={s.coverPic} alt="Cover picture" />
      </div>
      <div className={s.descriptionBlock}>
        <div>ava + {props.name}</div>
        <div>{props.descr}</div>
      </div>
    </div>
  );
}

export default ProfileInfo;