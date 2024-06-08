import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="mnbuongiorno"
        name="Buongiorno Marcelo"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="sasquatch"
        name="Sasquatch"
      />
    </section>
  );
}
