import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
    const friendsElements = props.dialogs.map(d => <Friend name={d.name} avatar={d.avatar} />).slice(0, 3);

    return (
        <div className={s.friendsSection}>
            <h3>Friends</h3>
            <div className={s.friendsList}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;