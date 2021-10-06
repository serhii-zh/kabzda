import s from './../Friends.module.css'

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.friendName}>
            {props.name}
            </div>
            <img src={props.avatar} alt={props.name} />
        </div>
    )
}

export default Friend;