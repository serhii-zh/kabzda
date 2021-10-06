import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.appears-itn.eu/wp-content/uploads/2018/07/long.jpg' />
            </div>

            <div className={s.profileInfo}>
                img + description
            </div>
        </div>
    )
}

export default ProfileInfo;