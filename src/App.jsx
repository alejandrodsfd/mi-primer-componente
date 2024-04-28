import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';
export function App() {

  const users = [
    {
      username: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      username: 'pheralb',
      name: 'Pablo Hernandez',
      isFollowing: false
    },
    {
      username: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: true
    },
    {
      username: 'vxnder',
      name: 'Vanderhart',
      isFollowing: false
    }
  ]

  return (
    <section className='App'>
      {
        users.map(user => {
          const {username, name, isFollowing} = user
          return(
            <TwitterFollowCard 
              username={username} 
              initialIsFollowing= {isFollowing}
            	key={username}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
      {/* <TwitterFollowCard initialIsFollowing={true} username="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing={false} username="pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing username="elonmusk">
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing={false} username="vxnder">
        Vanderhart
      </TwitterFollowCard> */}
    </section>
  );
}
