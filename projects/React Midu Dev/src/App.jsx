import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: 'mnuongiorno',
    name: 'Buongioro Marcelo',
    isFollowing: true,
  },
  {
    userName: 'sasquatch',
    name: 'Sasquatch',
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          name={name}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
