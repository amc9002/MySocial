import s from "./Users.module.css"

function Users(props) {
    return <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.userPic} className={s.userPic} alt="userPic" />
                        </div>
                    </span>
                    <span>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </div>
                )
            }
        </div>
}

export default Users;