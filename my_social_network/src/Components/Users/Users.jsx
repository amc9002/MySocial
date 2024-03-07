import s from "./Users.module.css"
import userPhoto from './../../Assets/Images/user.png'
import React from "react";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    return <div>
        <div className={s.pageNumbers}>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? s.selectedPage : ''} 
                onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPic} alt="userPic" />
                </div>
            </span>
            <span>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
            </span>
        </div>
        )}
    </div>
}

export default Users;