import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>

            <div>
                <img src="https://scontent.fifo4-1.fna.fbcdn.net/v/t1.6435-9/202816376_3757223394388412_1793505853708581899_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xYhlTmd8_PgAX_gPYp2&_nc_ht=scontent.fifo4-1.fna&oh=dc84b4848b234c5262bcab3752a3a317&oe=617CB6F3" alt="avatar" />
                {props.message}
            </div>

            <div>
                Likes: {props.likesCount}
            </div>

        </div>
    )
}

export default Post;