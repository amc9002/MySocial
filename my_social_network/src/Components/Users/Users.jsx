import s from "./Users.module.css"
import userPhoto from './../../Assets/Images/user.png'
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followUnfollowAPI } from "../../API/api";

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
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPic} alt="userPic" />
                    </NavLink>
                </div>
            </span>
            <span>
                <div>
                    {u.followed
                        ? <button onClick={() => { followUnfollowAPI.unFollowUser(u.id)
                            .then(resultCode => {
                                if (resultCode === 0)
                                        props.unfollow(u.id)
                                });
                        }}>Unfollow</button>
                        : <button onClick={() => { followUnfollowAPI.followUser(u.id)
                                .then(resultCode => {
                                    if (resultCode === 0)
                                        props.follow(u.id)
                                });
                        }}>Follow</button>}
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