import { useState } from "react"
export function TwitterFollowCard({username, children, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    console.log(isFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassname = isFollowing 
    ? 'user-card__follow-buttom is-following' 
    : 'user-card__follow-buttom'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
  
    return (
        <article className='user-card'>
            <header className='user-card__header'>
                <img className='user-card__avatar' alt="Avatar de midudev" src={`https://unavatar.io/${username}`} />
                <div className='user-card__info'>
                    <strong className='user-card__name'>{children}</strong>
                    <span className='user-card__username'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    <span className="not-following-hover">{text}</span>
                    <span className="is-following-hover">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}