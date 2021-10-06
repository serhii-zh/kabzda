import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <img src={props.avatar} alt={props.name} />
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}

export default Dialog;